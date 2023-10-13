/// <reference types="vite/client" />

declare module '@vule/runtime-core' {
  export interface ImportMetaEnv {
    VITE_APP_BASE_URL: string;
  }

  export interface ImportMeta {
    env: ImportMetaEnv;
  }
}

export {};
