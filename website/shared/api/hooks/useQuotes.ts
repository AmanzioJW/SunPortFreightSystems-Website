import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../client';
import type { Quote, QuoteRequest } from '../types';

export function useQuotes() {
  return useQuery({
    queryKey: ['quotes'],
    queryFn: () => apiClient.get<Quote[]>('/quotes'),
  });
}

export function useQuote(quoteId: string) {
  return useQuery({
    queryKey: ['quote', quoteId],
    queryFn: () => apiClient.get<Quote>(`/quotes/${quoteId}`),
    enabled: !!quoteId,
  });
}

export function useRequestQuote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (quoteRequest: QuoteRequest) =>
      apiClient.post<Quote>('/quotes', quoteRequest),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
    },
  });
}

export function useAcceptQuote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (quoteId: string) =>
      apiClient.put<Quote>(`/quotes/${quoteId}/accept`, {}),
    onSuccess: (data) => {
      // Update specific quote
      queryClient.setQueryData(['quote', data.id], data);
      // Refresh quotes list
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
    },
  });
}