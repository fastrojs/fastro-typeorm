import { FastifyInstance } from 'fastify'
import { createServer } from '../../../core'

let server: FastifyInstance

beforeAll(async () => {
  server = await createServer()
})

afterAll(() => {
  server.close()
})

describe('simple test', () => {
  test('/web/', async () => {
    const result = await server.inject({
      url: '/web/',
      method: 'GET'
    })
    // console.log(result.payload)
    expect(result.payload).toContain('hello')
  })
})
