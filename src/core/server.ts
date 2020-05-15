import { FastifyInstance, FastifyServerOptions } from 'fastify'
import { createConnection } from './database'
import { corePlugin } from './coreplugin'
import {
  createServer as createFastroServer,
  configuration as config,
  createError
} from '@fastro/core'

/**
 * Create fastify server.
 * Check this for detail options: https://www.fastify.io/docs/latest/Server/
 * @param options - Fastify server options
 */
export const createServer = async (options?: FastifyServerOptions): Promise<FastifyInstance> => {
  try {
    await createConnection()
    const server = await createFastroServer(options)
    server.register(corePlugin)
    return server
  } catch (error) {
    throw createError('CREATE_SERVER_ERROR', error)
  }
}

/**
 * Start server
 * @param server
 */
export const start = async (server: FastifyInstance): Promise<void> => {
  await server.ready()
  const configuration: any = config
  const host = configuration.app.host ? configuration.app.host : '0.0.0.0'
  const port = configuration.app.port ? configuration.app.port : 3000
  server.listen(port, host, (error: Error) => {
    configuration.database.password = configuration.database.password.replace(/[a-z0-9]/g, '*')
    configuration.database.username = configuration.database.username.replace(/[a-z0-9]/g, '*')
    console.info(configuration)
    console.info('Loading all modules finished')
    console.info(`Server running on ${host}:${port}`)
    if (error) {
      createError('START_SERVER_ERROR', error)
      process.exit(1)
    }
  })
}
