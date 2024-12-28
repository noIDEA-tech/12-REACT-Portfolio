import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
// /**
//  * Type helper to make it easier to use vite.config.ts
//  * accepts a direct {@link UserConfig} object, or a function that returns it.
//  * The function receives a {@link ConfigEnv} object.
//  */
// declare function defineConfig(config: UserConfig): UserConfig;
// declare function defineConfig(config: Promise<UserConfig>): Promise<UserConfig>;
// declare function defineConfig(config: UserConfigFnObject): UserConfigFnObject;
// declare function defineConfig(config: UserConfigFnPromise): UserConfigFnPromise;
// declare function defineConfig(config: UserConfigFn): UserConfigFn;
// declare function defineConfig(config: UserConfigExport): UserConfigExport;
// interface CreateDevEnvironmentContext {
//     ws: WebSocketServer;
// }