interface IEvent {
  id: string;
  title?: string;
  description?: string;
  date?: number;
  location?: string;
  images?: string[];
}

interface ICourse {
  id: string;
  title?: string;
  description?: string;
  lector?: string;
  images?: string;
  schedule?: {
    day: number;
    start: number;
    end: number;
  };
}
