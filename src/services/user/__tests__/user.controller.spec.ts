import { FastifyInstance } from 'fastify'
import { createServer } from '../../../core'
import { serviceContainer } from '@fastro/core'
import { UserService } from '../user.service'

let server: FastifyInstance
let service: UserService

beforeAll(async () => {
  server = await createServer({ logger: false })
  service = serviceContainer.get('UserService')
  service.deleteAll()
})

afterAll(() => {
  server.close()
})

test('GET /web/user', async () => {
  const result = await server.inject({
    url: '/web/user',
    method: 'GET'
  })
  expect(result.payload).toBe('{"message":"User not found","error":true}')
})

test('POST /web/user', async () => {
  const result = await server.inject({
    url: '/web/user',
    method: 'POST',
    payload: {
      email: 'pram@diversa.id',
      username: 'zaid',
      password: 'secret'
    }
  })
  expect(result.statusCode).toBe(200)
})
