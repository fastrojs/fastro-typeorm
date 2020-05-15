import fp from 'fastify-plugin'
import { getConnection } from 'typeorm'

export const corePlugin = fp(async function (fastify, opts, next) {
  fastify
    .addHook('onClose', (instance, done) => {
      getConnection().close()
      instance.log.info('db-connection closed')
      done()
    })
  next()
})
