import { RequestData, Resolver, ResponseData } from "@langion/apira";
import fetch, { Response as FetchResponse } from "node-fetch";

export class ServiceRequest extends Resolver<void, FetchResponse> {
    protected basePath = "http://localhost:8090";

    public request<Response, Query, Payload, Params>(
        data: RequestData<Query, Payload, Params, void>,
    ): Promise<ResponseData<Response, FetchResponse>> {
        const request = fetch(data.url, {
            method: data.method,
            body: JSON.stringify(data.request.payload),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });

        const result = request.then((d) => d.json().then((response) => ({ data: d, response })));

        return result
            .then((v) => {
                console.log(v);
                return v;
            })
            .catch((e) => {
                console.log(e);
                return e;
            });
    }
}
