export interface Shipment {
  id: string;
  trackingNumber: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'delayed';
  origin: {
    city: string;
    state: string;
    zip: string;
  };
  destination: {
    city: string;
    state: string;
    zip: string;
  };
  estimatedDelivery: string;
  actualDelivery?: string;
  carrier: string;
  containerNumber?: string;
}

export interface Quote {
  id: string;
  quoteNumber: string;
  serviceType: 'FTL' | 'LTL' | 'Drayage' | 'Intermodal' | 'Air';
  origin: string;
  destination: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  rate: number;
  validUntil: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}

export interface QuoteRequest {
  serviceType: string;
  origin: string;
  destination: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  commodityType: string;
  pickupDate: string;
}