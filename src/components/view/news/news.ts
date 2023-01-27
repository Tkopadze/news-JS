import './news.css';

class News {
    /**
     *
     */
    constructor() {

    }
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.firstElementChild.cloneNode(true);

            if (idx % 2) (newsClone as Element).querySelector('.news__item').classList.add('alt');

            (newsClone as Element).querySelector('.news__meta-photo')[0].style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone as Element).querySelector('.news__meta-author').textContent = item.author || item.source.name;
            (newsClone as Element).querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

                (newsClone as Element).querySelector('.news__description-title').textContent = item.title;
                (newsClone as Element).querySelector('.news__description-source').textContent = item.source.name;
                (newsClone as Element).querySelector('.news__description-content').textContent = item.description;
                (newsClone as Element).querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}

export default News;
