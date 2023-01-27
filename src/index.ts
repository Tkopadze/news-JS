import App from "./components/app/app";



export class Main  {
    constructor(app:App) {
        app.start();
    }
}

// private readonly
// load:App= new App();
// const app = new App(private readonly appController:AppController,private readonly appView:AppView);
// app.start();
