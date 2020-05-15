import { Controller, InjectService, Get, Post, Hook } from '@fastro/core'
import { UserService } from './user.service'
import { User } from './user.entity'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getAllUserSchema } from './user.schema'
import { ServerResponse } from 'http'

@Controller({ prefix: 'user' })
export class UserController {
  @InjectService(UserService)
  userService: UserService

  @Hook('onRequest')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async req (request: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<void> {
    // This hook will always be executed after the shared `onRequest` hooks
    // console.log('request', request.headers)
  }

  @Get({ schema: getAllUserSchema })
  async getAll (request: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<User[]> {
    const users = await this.userService.getAllUser()
    if (users.length === 0) reply.sendError(new Error('User not found'))
    return users
  }

  @Post({ url: '/' })
  async register (request: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<void> {
    const payload = request.body
    const user = await this.userService.register(payload)
    reply.sendOk(user)
  }
}
