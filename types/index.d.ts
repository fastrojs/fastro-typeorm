import { FastifyServerOptions, FastifyInstance } from 'fastify'
import {
  Connection,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ObjectType,
  EntitySchema,
  Repository
} from 'typeorm'

export declare abstract class BasicEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date
}
export declare abstract class BasicService {
  private conn: Connection
  public getConnection (): Connection
  public repo<Entity> (entityClass: ObjectType<Entity> | EntitySchema<Entity> | string): Repository<Entity>
  public err (errorName: string, error: Error): Error
  public close (): void
}

export type config = {
  app: {
    port: number;
    host: string;
  };
  database: {
    name: string;
    type: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
  };
}

type HookName = 'onRequest' | 'onResponse' | 'preParsing' | 'preValidation' | 'preHandler' | 'preSerialization'

export declare function GatewayHook(hook: HookName): Function
export declare function Hook(hook: HookName): Function
export declare function Get(options?: any): Function
export declare function Post(options?: any): Function
export declare function Delete(options?: any): Function
export declare function Head(options?: any): Function
export declare function Patch(options?: any): Function
export declare function Put(options?: any): Function
export declare function Options(options?: any): Function

export declare function Gateway(options?: any): Function
export declare function Controller(options?: any): Function
export declare function Service(): Function
export declare function InjectController(controller: Function): any
export declare function InjectService(service: Function): any
export declare function createServer(fastifyOpts?: FastifyServerOptions): Promise<FastifyInstance>
export declare function createConnection(): Promise<Connection>
export declare function start(server: FastifyInstance): Promise<void>
export declare function createError(name: string, error: Error): Error
export declare function loader (): Promise<void>

export declare const gatewayControllerContainer: any[]
export declare const gatewayContainer: Map<string | symbol | Object, any>
export declare const gatewayHookContainer: any[]
export declare const controllerContainer: Map<string | symbol | Object, any>
export declare const serviceContainer: Map<string | symbol | Object, any>
export declare const methodContainer: any[]
export declare const hookContainer: any[]
export declare const pluginContainer: any[]
export declare const token: Symbol
export declare const configuration: config
