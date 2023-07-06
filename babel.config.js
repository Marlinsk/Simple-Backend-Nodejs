module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@dtos': './src/dtos',
        '@entities': './src/entities',
        '@errors': './src/errors',
        '@middleware': './src/middleware',
        '@prisma-client': './src/prisma',
        '@providers': './src/providers',
        '@repositories': './src/repositories',
        '@routes': './src/routes',
        '@usecases': './src/usecases'
      }
    }]
  ],
}
