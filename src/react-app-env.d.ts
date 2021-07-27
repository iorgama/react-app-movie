/// <reference types="react-scripts" />
declare module NodeJS{
  export interface ProcessEnv{
    REACT_APP_VERCEL_API_BASE_URL: string
    REACT_APP_VERCEL_API_KEY: string 
    REACT_APP_VERCEL_IMAGE_API_URL: string
  }
}