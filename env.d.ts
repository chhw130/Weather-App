/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_BASE_URL: string;
  VITE_APP_SERVICE_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
