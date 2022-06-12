import {stringify, IStringifyOptions} from 'qs';

type APIResponse<T> = {
    data: T;
    meta: Strapi.Pagination;
}

export const apiQuery = async <T> (path: string, query: IStringifyOptions = {}, options: RequestInit = {}): Promise<APIResponse<T>> => {
    const url = new URL(path, process.env.API_URL);
    url.search = stringify(query);

    const res = await fetch(url.href, options);
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }

    return await res.json();
}

export const getCollection = async <T> (path: string, query: IStringifyOptions = {}, options: RequestInit = {}): Promise<APIResponse<Strapi.Collection<T>>> =>
    apiQuery<Strapi.Collection<T>>(path, query, options);

export const getSingle = async <T> (path: string, query: IStringifyOptions = {}, options: RequestInit = {}): Promise<APIResponse<Strapi.Single<T>>> =>
    apiQuery<Strapi.Single<T>>(path, query, options);

export const getFirst = async <T> (path: string, query: IStringifyOptions = {}, options: RequestInit = {}): Promise<APIResponse<Strapi.Single<T>>> => {
    const res = await getCollection<T>(path, query, options);
    return {
        data: res.data[0],
        meta: res.meta
    };
}

export const getLast = async <T> (path: string, query: IStringifyOptions = {}, options: RequestInit = {}): Promise<APIResponse<Strapi.Single<T>>> => {
    const res = await getCollection<T>(path, query, options);
    return {
        data: res.data[res.data.length - 1],
        meta: res.meta
    };
}