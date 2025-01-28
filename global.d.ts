declare global {
  type Gtag = (
    command: 'config' | 'set' | 'event',
    targetId: string,
    parameters?: Record<string, any>,
  ) => void;

  interface Window {
    gtag: Gtag;
  }
}

interface DataLayerEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

interface Window {
  dataLayer: DataLayerEvent[];
}
