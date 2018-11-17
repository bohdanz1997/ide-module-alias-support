const moduleAlias = require('module-alias')
const webpackConfig = require('./webpack.config')

// read aliases from webpack.config and pass to moduleAlias
moduleAlias.addAliases(webpackConfig.resolve.alias)
