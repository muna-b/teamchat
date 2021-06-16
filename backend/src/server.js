// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

//Connection to DB(mySQL)
fastify.register(require('fastify-mysql'), {
  promise: true,
  connectionString: 'mysql://root:password@localhost/teamchat'
  })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()