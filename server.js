const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// Initiate the cache
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

const getCacheKey = req => `${req.url}`

const renderAndCache = (req, res, pagePath, queryParams) => {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

app.prepare().then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined above to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/search', (req, res) => {
    const queryParams = { q: req.query.q }
    renderAndCache(req, res, '/search', queryParams)
  })

  server.get('/user', (req, res) => {
    const queryParams = { id: req.query.id }
    renderAndCache(req, res, '/user', queryParams)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
