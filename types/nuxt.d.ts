import type { TBusiness } from "./busines";

declare module "#app" {
  interface PageMeta {
    fixdedNav?: boolean;
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
