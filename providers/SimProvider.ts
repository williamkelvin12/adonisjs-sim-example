import { ApplicationContract } from "@ioc:Adonis/Core/Application"

export default class SimProvider {
  public static needsApplication = true

  constructor (protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Adonis/Sim', () => {
      const { SimMiddleware } = require('../src/SimMiddleware/SimMiddleware')
      return SimMiddleware
    })

    this.app.container.singleton('Adonis/Sim', () => {
      const { SimBaseModel } = require('../src/SimMiddleware/SimBaseModel')
      return SimBaseModel
    })
  }

  public async boot() {
  }
}