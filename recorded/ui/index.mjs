import { database } from "../shared/data.mjs"


; 
(async () => {


    const platform = globalThis.window ? 'browser' : 'console'
    const { default: ViewFactory } = await import(`./../platforms/${platform}/index.mjs`)

    const app = new ViewFactory()
    app.render(database)
})()