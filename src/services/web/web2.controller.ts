import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ServerResponse } from 'http'

@Controller({ prefix: '2' })
export class WebController2 {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply<ServerResponse>): any {
    reply.sendOk('hello')
  }
}
