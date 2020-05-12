import { createConnection } from '../../../core'
import { serviceContainer, loader } from '@fastro/core'
import { UserService } from '../user.service'

let service: UserService

beforeAll(async () => {
  try {
    await createConnection()
    await loader()
    service = serviceContainer.get('UserService')
    service.deleteAll()
  } catch (error) {
    console.log(error)
  }
})

afterAll(() => {
  service.close()
})

describe('user service', () => {
  test('add user', async () => {
    const payload = {
      email: 'pram2016@gmail.com',
      username: 'zaid',
      password: 'secret'
    }
    const users = await service.register(payload)
    expect(users.username).toBe('zaid')
  })
  test('get all', async () => {
    const users = await service.getAllUser()
    expect(users.length).not.toBe(0)
  })
})
