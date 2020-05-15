import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'

@Controller()
export class WebController {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.ok('hello')
  }
}
