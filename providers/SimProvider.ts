import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Sim from '../src/sim'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class SimProvider {
  constructor (protected application: ApplicationContract) {
  }

  public register () {
    
  }

  public async boot () {
    this.application.container.singleton("Adonis/Addons/Sim", () => {
      return new Sim()
    })
  }

  public async ready () {
  }

  public async shutdown () {
    
  }
}
