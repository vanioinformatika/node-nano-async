/// <reference types="nano" />
import * as Nano from "nano";
import { AsyncResponse } from "../AsyncResponse";
import { DocumentScopeAsync } from "./DocumentScopeAsync";
export interface ServerScopeAsync extends Nano.ServerScope {
    use<D>(db: string): DocumentScopeAsync<D>;
    scope<D>(db: string): DocumentScopeAsync<D>;
    authAsync(username: string, userpass: string): AsyncResponse<Nano.DatabaseAuthResponse>;
    sessionAsync(): AsyncResponse<Nano.DatabaseSessionResponse>;
    updatesAsync(params?: Nano.UpdatesParams): AsyncResponse<Nano.DatabaseUpdatesResponse>;
    uuidsAsync(num: number): AsyncResponse<any>;
}
