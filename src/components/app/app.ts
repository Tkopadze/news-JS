import AppController from "../controller/controller";
import AppView from "../view/appView";

class App {
    constructor(private readonly appController:AppController,private readonly appView:AppView) {
        
    }

     start() {
        const source = document.querySelector('.sources');
        source?.addEventListener('click', (e) => this.appController.getNews(e, (data:Function) => this.appView.drawNews(data)));
        this.appController.getSources((data:Function) => this.appView.drawSources(data));
    }
}

export default App;