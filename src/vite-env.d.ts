/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE?: string;
  readonly VITE_INQUIRY_WEBHOOK?: string;
  /** POST endpoint for AI concierge (JSON in/out — see `fetchConciergeReply`) */
  readonly VITE_CONCIERGE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
