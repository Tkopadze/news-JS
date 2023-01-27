import Loader from "./loader";

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '45cbbdf9a57d46c8a7dc29dfcf5f4b72', 
        });
    }
}

export default AppLoader;