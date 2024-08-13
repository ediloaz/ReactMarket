import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const apiUrl = env.VITE_API_URL;

  return defineConfig({
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, 'src/layouts/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@files': path.resolve(__dirname, 'src/assets/files'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@stores': path.resolve(__dirname, 'src/stores'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@contracts': path.resolve(__dirname, 'src/contracts'),
        '@locales': path.resolve(__dirname, 'src/locales'),
      },
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  });
};
