import { RequestData, Resolver } from "@langion/apira";
import fetch from "node-fetch";

export class ServiceRequest extends Resolver<void> {
    protected basePath = "http://localhost:8090";

    protected request: <Response, Query, Payload, Params>(
        data: RequestData<Query, Payload, Params, void>,
    ) => Promise<Response> = (data) => {
        const request = fetch(data.url, {
            method: data.method,
            body: JSON.stringify(data.request.payload),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });

        const result = request.then((v) => v.json()).catch((e) => console.log(e));

        return result.then((v) => {
            console.log(v);
            return v;
        });
    }
}
