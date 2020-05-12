import { Controller, Get } from '@fastro/core'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Http2ServerResponse } from 'http2'

@Controller({ prefix: '2' })
export class WebController2 {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): any {
    reply.sendOk('hello')
  }
}
