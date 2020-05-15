import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'

@Controller({ prefix: '2' })
export class WebController2 {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.ok('hello')
  }
}
