const path = require('path')

// here we add fake webpack.config
// idea will read aliases configuration from this file by default
// and proper handle our aliases defined by module-alias package

module.exports = {
  resolve: {
    alias: {
      core: path.resolve('core')
    }
  }
}
