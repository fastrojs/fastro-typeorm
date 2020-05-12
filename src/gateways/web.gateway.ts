/* eslint-disable @typescript-eslint/no-unused-vars */
import { Gateway, InjectController, GatewayHook } from '@fastro/core'
import { UserController } from '../services/user/user.controller'
import { WebController } from '../services/web/web.controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { Http2ServerResponse } from 'http2'

@Gateway({ prefix: 'web' })
export class WebGateway {
  @InjectController(UserController)
  userController: UserController

  @InjectController(WebController)
  webController: WebController

  @GatewayHook('onRequest')
  async myHook (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): Promise<void> {
    // This hook will always be executed after the shared `onRequest` hooks
    // console.log('request coba dech', request.headers)
  }

  @GatewayHook('onResponse')
  async myHook2 (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): Promise<void> {
    // This hook will always be executed after the shared `onRequest` hooks
    // console.log('request', request.headers)
  }
}
