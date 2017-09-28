export default (store) => ({
  path: 'charts',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'System.import' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    Promise.all([
      import('./containers/ChartsContainer')
    ]).then(([ChartsGallery, modules]) => {
      /*  Return getComponent   */
      cb(null, ChartsGallery.default)
    })
  }
})