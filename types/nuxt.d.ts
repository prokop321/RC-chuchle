declare global {
  interface IEvent {
    id: string;
    title?: string;
    description?: string;
    date?: number;
    location?: string;
    images?: string[];
    type?: "senior" | "basic";
  }

  interface ICourse {
    id: string;
    title?: string;
    description?: string;
    lector?: { space: string; id: string }[];
    images?: string[];
    schedule?: {
      day: number;
      start: number;
      duration: number;
    };
  }

  interface IPost {
    id: string;
    title?: string;
    text?: string;
    timestamp?: number;
    images?: string[];
  }

  interface LektoriItem {
    id: string;
    name: string;
    description: string;
    photos: string[];
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
