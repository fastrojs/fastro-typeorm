import { Connection, createConnection as create } from 'typeorm'
import { configuration, createError, getSourceDir } from '@fastro/core'

export async function createConnection (): Promise<Connection> {
  try {
    const config: any = configuration
    const targetDir = getSourceDir()
    const entities = `${targetDir}/**/**/*.entity.*s`
    const typeOrmConfig: any = config.database
    typeOrmConfig.entities = [entities]
    return create(typeOrmConfig)
  } catch (error) {
    throw createError('CREATE_CONNECTION_ERROR', error)
  }
}
