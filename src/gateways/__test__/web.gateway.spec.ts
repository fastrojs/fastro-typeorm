import { FastifyInstance } from 'fastify'
import { createServer } from '../../core'

let server: FastifyInstance

beforeAll(async () => {
  server = await createServer()
})

afterAll(() => {
  server.close()
})

describe('gateway test', () => {
  test('gateway prefix test', async () => {
    const result = await server.inject({
      url: '/web/',
      method: 'GET'
    })
    expect(result.payload).toContain('hello')
  })
})
