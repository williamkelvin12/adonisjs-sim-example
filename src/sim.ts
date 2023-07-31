
export type SimContract = {
  hello(): void
  baseModel(): {
    user: string
    port: number
  }
}

export default class Sim implements SimContract {
  public hello() {
    console.log("Hello World")
  }

  public baseModel(): {
    user: string,
    port: number
  } {
    return {
      user: "William",
      port: 3000
    }
  }
}