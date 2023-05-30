declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    POSTGRES_URL: string;
  }
}
