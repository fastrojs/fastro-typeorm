export const plugin = function (fastify, opts, done) {
  fastify.decorate('someSupport', () => 'hugs')
  done()
}
