/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */
import type { ViteEnv } from '../../utils';

import { VitePWA } from 'vite-plugin-pwa';

export function configPwaConfig(env: ViteEnv) {
  const { VITE_USE_PWA } = env;

  if (VITE_USE_PWA) {
    // vite-plugin-pwa
    const pwaPlugin = VitePWA({
      manifest: {
        name: '来画平台',
        short_name: '来画',
        icons: [
          {
            src: './resource/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './resource/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    });
    return pwaPlugin;
  }
  return [];
}
