import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { getConnection } from 'typeorm'

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export const corePlugin = fp(async function (fastify: FastifyInstance, opts: any, next: any) {
  fastify
    .addHook('onClose', (instance, done) => {
      getConnection().close()
      instance.log.info('db-connection closed')
      done()
    })
  next()
})
