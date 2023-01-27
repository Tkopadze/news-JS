interface response{
    ok?: boolean;
    statusText?:string;
    status?:number
};


class Loader {
    baseLink!: string; 
    options!: Object;
    resp!:response;
  
    constructor(baseLink: string, options: Object) {
        this.baseLink = baseLink;
        this.options = options;

    }


    getResp(
        {endpoint='', options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res:response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options:[], endpoint:string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions["keys"]).forEach((key:any) => {
            
            url += `${key}=${key}&`;
        });

        return url.slice(0, -1);
    }

    load(method:string, endpoint:string, callback:Function, options:any = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res)
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
