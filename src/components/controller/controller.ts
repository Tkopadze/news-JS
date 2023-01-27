import AppLoader from "./appLoader";

class AppController extends AppLoader {
    getSources(callback:Function) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback()
        );
    }


    getNews(e:Event, callback:Function) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as Element).classList.contains('source__item')) {
                const sourceId = (target as Element).getAttribute('data-source-id');
                if ((newsContainer as Element).getAttribute('data-source') !== sourceId) {
                    (newsContainer as Element).setAttribute('data-source', sourceId!);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback()
                    );
                }
                return;
            }
            target = (target as Element).parentNode;
        }
    }
}

export default AppController;
