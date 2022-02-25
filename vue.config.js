module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Canday\'s BLOG'
        return args
      })
  }
}