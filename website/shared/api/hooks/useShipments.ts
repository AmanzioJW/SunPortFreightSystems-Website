import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../client';
import type { Shipment } from '../types';

// GET all shipments
export function useShipments() {
  return useQuery({
    queryKey: ['shipments'],
    queryFn: () => apiClient.get<Shipment[]>('/shipments'),
  });
}

// GET single shipment by tracking number
export function useShipmentTracking(trackingNumber: string) {
  return useQuery({
    queryKey: ['shipment', trackingNumber],
    queryFn: () => apiClient.get<Shipment>(`/shipments/${trackingNumber}`),
    enabled: !!trackingNumber, // Only run if tracking number exists
    refetchInterval: 30000, // Poll every 30 seconds for real-time updates
  });
}

// POST create new shipment
export function useCreateShipment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (shipment: Partial<Shipment>) =>
      apiClient.post<Shipment>('/shipments', shipment),
    onSuccess: () => {
      // Invalidate and refetch shipments list
      queryClient.invalidateQueries({ queryKey: ['shipments'] });
    },
  });
}