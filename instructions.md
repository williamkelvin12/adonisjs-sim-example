The Package `@william/adonisjs-sim` has been successfully configured. Before you begin, please register the bellow named middleware
inside your `start/kernel.ts` file.

```ts
Server.middleware.registerNamed({
  sim: () => import('@ioc:William/Sim')
})```