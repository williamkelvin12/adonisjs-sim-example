import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Adonis/Core/Application'])
export class SimMiddleware {

  public async handle ({ request, logger }: HttpContextContract, next: () => Promise<void>) {
    console.log("Middleware funciona!")
    logger.warn(`[adonisjs-sim] Middleware funcionando "${request}"`)
    
    await next()
  }
}

export class SimBaseModel {
  user: string = "william"
  port: number = 3000
}