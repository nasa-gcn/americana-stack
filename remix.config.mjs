/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/_static/',
  server: 'server.ts',
  serverBuildPath: 'build/server/index.js',
  // appDirectory: "app",
  assetsBuildDirectory: 'build/static',
  serverModuleFormat: 'cjs',
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}
