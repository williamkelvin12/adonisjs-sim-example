declare module '@ioc:Adonis/Sim' {
  import { ApplicationContract } from "@ioc:Adonis/Core/Application"
  import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

  export type SimConfig = {
    message: string
    port: number
  }

  export interface SimMiddlewareContract {
    new (application: ApplicationContract): {
      handle(ctx: HttpContextContract, next: () => Promise<void>): any
    }
  }

  const SimMiddleware: SimMiddlewareContract

  export default SimMiddleware
}