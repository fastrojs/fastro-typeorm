import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ServerResponse } from 'http'

@Controller()
export class WebController {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply<ServerResponse>): any {
    reply.ok('hello')
  }
}
