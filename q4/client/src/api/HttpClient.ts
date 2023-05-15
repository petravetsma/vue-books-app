import axios, {type AxiosRequestConfig} from 'axios';


/**
 * Main api url for request.
 *
 * Better to use extract this param to the app config level.
 * Wasn't extracted yet because it is only one param in the app.
 */
export const BACKEND_URL = 'http://localhost:3000';

/**
 * Client for making http requests to API.
 */
export default class HttpClient {

    /**
     * Returns request settings.
     *
     * @param config settings for axios
     */
    getRequestConfig(config?: AxiosRequestConfig): any {

        const headers: any = {
            'Content-Type': 'application/json'
        };

        return {
            baseURL: BACKEND_URL,
            ...config,
            headers: {
                ...headers,
                ...config?.headers
            }
        };
    }

    public async executeGetRequest<T = any>(url: string, params: any = null): Promise<T> {

        const response = await axios.get(url, this.getRequestConfig({params}));

        return response.data;
    };

    public async executePostRequest(url: string, body: any, params: any = null, baseURL: string = BACKEND_URL): Promise<any> {

        const response = await axios.post(url, body, this.getRequestConfig({params, baseURL}));
        return response.data;
    };

    public async executePutRequest(url: string, body: any): Promise<any> {
        const response = await axios.put(url, body, this.getRequestConfig());

        return response.data;
    };


}
