import News from "../news/news";
import Sources from "./Sources";

export class AppView {
    newss!:News;
    sourcee!:Sources;
    constructor(news:News,sources:Sources) {
       this.newss=news;
       this.sourcee=sources;
    }

    drawNews(data) {
        const values = data?.articles ? data?.articles : [];
        this.newss.draw(values);
    }

    drawSources(data) {
        const values = data?.sources ? data?.sources : [];
        this.sourcee.draw(values);
    }
}

export default AppView;
