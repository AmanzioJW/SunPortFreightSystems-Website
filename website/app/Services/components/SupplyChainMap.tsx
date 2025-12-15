"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

const ROUTES = [
  {
    id: "jax-to-san-juan",
    from: [-81.6557, 30.3322], // Jacksonville
    to: [-66.1057, 18.4655],   // San Juan
  },
  {
    id: "jax-to-rotterdam",
    from: [-81.6557, 30.3322], // Jacksonville
    to: [4.4792, 51.9244],     // Rotterdam
  },
  {
    id: "jax-to-la",
    from: [-81.6557, 30.3322], // Jacksonville
    to: [-118.2437, 34.0522],  // Los Angeles
  },
];

export default function SupplyChainMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;
    if (!mapboxgl.accessToken) {
      console.warn("Missing NEXT_PUBLIC_MAPBOX_TOKEN");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-20, 25], // broad Atlantic view
      zoom: 1.6,
      projection: "globe",
    });

    mapRef.current = map;

    map.on("style.load", () => {
      map.setFog({
        color: "rgb(15, 23, 42)", // slate-900
        "high-color": "rgb(56, 189, 248)",
        "space-color": "rgb(15, 23, 42)",
        "horizon-blend": 0.2,
      });

      // Add nodes (ports/cities)
      const nodeFeatures = [
        {
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [-81.6557, 30.3322] as [number, number] },
          properties: { title: "Jacksonville Hub" },
        },
        {
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [-66.1057, 18.4655] as [number, number] },
          properties: { title: "San Juan" },
        },
        {
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [4.4792, 51.9244] as [number, number] },
          properties: { title: "Rotterdam" },
        },
        {
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [-118.2437, 34.0522] as [number, number] },
          properties: { title: "Los Angeles" },
        },
      ];

      map.addSource("nodes", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: nodeFeatures,
        },
      });

      map.addLayer({
        id: "nodes-layer",
        type: "circle",
        source: "nodes",
        paint: {
          "circle-radius": 5,
          "circle-color": "#22c55e", // emerald-500
          "circle-stroke-width": 1,
          "circle-stroke-color": "#0f172a", // slate-900
        },
      });

      // Add routes
      const routeFeatures = ROUTES.map((route) => ({
        type: "Feature" as const,
        geometry: {
          type: "LineString" as const,
          coordinates: [route.from, route.to],
        },
        properties: { id: route.id },
      }));

      map.addSource("routes", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: routeFeatures,
        },
      });

      map.addLayer({
        id: "routes-layer",
        type: "line",
        source: "routes",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-width": 2.5,
          "line-color": "#22c55e",
          "line-opacity": 0.8,
        },
      });

      // Basic hover cursor
      map.on("mousemove", "nodes-layer", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "nodes-layer", () => {
        map.getCanvas().style.cursor = "";
      });

      // Simple popup interaction
      map.on("click", "nodes-layer", (e) => {
        const feature = e.features?.[0];
        if (!feature) return;

        const coords = (feature.geometry as any).coordinates.slice();
        const title = feature.properties?.title ?? "Node";

        new mapboxgl.Popup({ closeButton: false, offset: 8 })
          .setLngLat(coords)
          .setHTML(
            `<div style="font-size:12px;color:#e2e8f0">
              <strong>${title}</strong><br/>
              Multi-modal gateway in your network
            </div>`
          )
          .addTo(map);
      });

      // (Optional) TODO: animate a moving "shipment" along each route with requestAnimationFrame
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={mapContainerRef} className="h-full w-full" />;
}