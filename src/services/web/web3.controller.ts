import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'

@Controller({ prefix: '3' })
export class WebController3 {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.ok('hello')
  }
}
