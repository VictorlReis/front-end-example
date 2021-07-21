import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const TIMEOUT: number = 30000;

export interface IRestApiCall {
  baseUrl: string;
  endpoint: string;
  pathParams?: any;
  queryParams?: any;
  headers?: any;
  responseType?: any;
  observe?: string;
}

@Injectable()
export class RestApiProvider {
  constructor(public http: HttpClient) {}
  /**
 *
 * exemplo de uso `this.restApiProvider.get(request)
            .map(objdoback => funcMapeiaObjFront(objdoback));
            `
 *
 */


  get(call: IRestApiCall): Observable<any> {
    let endpoint = this.buildRestEndpoint(call);
    let options = this.buildRequestOptions(call);

    return this.http.get(endpoint, options).pipe(x => x);
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.post(endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.put(endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.request("DELETE", endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.patch(endpoint, body, reqOpts);
  }

  private buildRequestOptions(call: IRestApiCall): any {
    let headers: HttpHeaders;
    let queryParams: HttpParams;
    let requestOptions: any;

    if (call.headers) {
      headers = new HttpHeaders();
      Object.keys(call.headers).forEach((headerName) => {
        headers = headers.append(headerName, call.headers[headerName]);
      });
    }

    if (call.queryParams) {
      queryParams = new HttpParams();
      Object.keys(call.queryParams).forEach((paramName) => {
        queryParams = queryParams.append(paramName, call.queryParams[paramName]);
      });
    }

    if (headers || queryParams) {
      requestOptions = {
        headers: headers,
        params: queryParams,
      };
    }

    if (call.responseType) {
      requestOptions = {
        ...requestOptions,
        responseType: call.responseType,
      };
    }

    if (call.observe) {
      requestOptions = {
        ...requestOptions,
        observe: call.observe,
      };
    }

    return requestOptions;
  }

  private buildRestEndpoint(call: IRestApiCall): string {
    let endpoint = call.baseUrl + call.endpoint;
    let pathParams = call.pathParams;

    if (pathParams) {
      Object.keys(pathParams).forEach((nomeParam) => {
        let regex = new RegExp("{" + nomeParam + "}", "g");
        endpoint = endpoint.replace(regex, pathParams[nomeParam]);
      });
    }

    return endpoint;
  }
}
