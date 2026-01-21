import {
  FileText,
  DollarSign,
  ClipboardCheck,
  FolderOpen,
  Truck,
  Warehouse,
  Package,
  Ship,
  ShieldCheck,
  MapPin,
  CheckCircle,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export interface RoadmapStepData {
  id: number;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  customerActions?: string[];
}

export const roadmapSteps: RoadmapStepData[] = [
  {
    id: 1,
    icon: FileText,
    title: "Inquiry",
    shortTitle: "Inquiry",
    description:
      "Customer submits freight requirements and shipping details to begin the logistics journey.",
    details: [
      "Submit cargo specifications (weight, dimensions, type)",
      "Specify origin and destination locations",
      "Indicate preferred transit timeline",
      "Share any special handling requirements",
    ],
    customerActions: [
      "Complete inquiry form or contact sales team",
      "Provide accurate cargo details",
    ],
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Quote",
    shortTitle: "Quote",
    description:
      "SunPort provides competitive pricing and transit options tailored to your shipment needs.",
    details: [
      "Receive detailed cost breakdown",
      "Compare multiple transit options",
      "Review estimated delivery timelines",
      "Understand all applicable fees and surcharges",
    ],
    customerActions: ["Review and approve quoted rates", "Select preferred routing"],
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Contract",
    shortTitle: "Contract",
    description:
      "Agreement finalized, terms confirmed, and booking secured for your shipment.",
    details: [
      "Terms and conditions finalized",
      "Service level agreements confirmed",
      "Booking space reserved on carriers",
      "Insurance coverage arranged if needed",
    ],
    customerActions: [
      "Sign service agreement",
      "Confirm booking details",
      "Arrange payment terms",
    ],
  },
  {
    id: 4,
    icon: FolderOpen,
    title: "Documentation",
    shortTitle: "Docs",
    description:
      "Bill of lading, commercial invoice, and packing list prepared for seamless transit.",
    details: [
      "Bill of Lading (B/L) prepared",
      "Commercial invoice generated",
      "Packing list compiled",
      "Certificate of origin processed",
      "Export/import permits secured",
    ],
    customerActions: [
      "Provide product details for customs",
      "Supply commercial invoice data",
    ],
  },
  {
    id: 5,
    icon: Truck,
    title: "Pickup",
    shortTitle: "Pickup",
    description:
      "Freight collected from origin warehouse or facility by our trusted carriers.",
    details: [
      "Pickup scheduled and confirmed",
      "Carrier dispatched to origin",
      "Cargo inspected and loaded",
      "Initial tracking initiated",
    ],
    customerActions: [
      "Ensure cargo is ready for pickup",
      "Provide facility access",
    ],
  },
  {
    id: 6,
    icon: Warehouse,
    title: "Warehousing",
    shortTitle: "Warehouse",
    description:
      "Cargo consolidated, inspected, and staged for loading at our secure facilities.",
    details: [
      "Cargo received at warehouse",
      "Quality inspection completed",
      "Consolidated with other shipments",
      "Staged for outbound loading",
    ],
  },
  {
    id: 7,
    icon: Package,
    title: "Loading",
    shortTitle: "Loading",
    description:
      "Freight securely loaded onto vessel, aircraft, or truck for international transit.",
    details: [
      "Container/unit load device assigned",
      "Cargo secured and sealed",
      "Weight verification completed",
      "Loading documentation finalized",
    ],
  },
  {
    id: 8,
    icon: Ship,
    title: "Transit",
    shortTitle: "Transit",
    description:
      "Cargo in motion via ocean, air, rail, or road with real-time tracking available.",
    details: [
      "Real-time GPS tracking active",
      "Transit milestones monitored",
      "ETAs continuously updated",
      "Proactive delay notifications",
    ],
  },
  {
    id: 9,
    icon: ShieldCheck,
    title: "Customs",
    shortTitle: "Customs",
    description:
      "Clearance processing, duties paid, and compliance verified at destination country.",
    details: [
      "Customs documentation submitted",
      "Duties and taxes calculated",
      "Regulatory compliance verified",
      "Release obtained from customs",
    ],
    customerActions: [
      "Approve duty payments",
      "Provide any additional documentation if requested",
    ],
  },
  {
    id: 10,
    icon: MapPin,
    title: "Last-Mile",
    shortTitle: "Last Mile",
    description:
      "Final leg delivery from port or hub to your specified destination address.",
    details: [
      "Local carrier assigned",
      "Delivery appointment scheduled",
      "Final mile routing optimized",
      "Delivery window confirmed",
    ],
    customerActions: ["Confirm delivery appointment", "Ensure receiving dock availability"],
  },
  {
    id: 11,
    icon: CheckCircle,
    title: "Delivery",
    shortTitle: "Delivery",
    description:
      "Freight arrives safely at your specified location, completing the physical journey.",
    details: [
      "Cargo delivered to destination",
      "Condition verified upon arrival",
      "Receiving party signs off",
      "Any discrepancies noted",
    ],
    customerActions: ["Inspect cargo upon delivery", "Report any damage immediately"],
  },
  {
    id: 12,
    icon: Receipt,
    title: "POD",
    shortTitle: "POD",
    description:
      "Proof of delivery confirmed and documented, completing your shipment transaction.",
    details: [
      "Digital proof of delivery captured",
      "Signature and timestamp recorded",
      "Final documentation archived",
      "Invoice finalized and sent",
    ],
  },
];
