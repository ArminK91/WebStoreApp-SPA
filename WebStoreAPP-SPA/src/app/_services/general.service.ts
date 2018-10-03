import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
 
@Injectable()
export class GeneralService {
    constructor(private http: Http, private config: AppConfig) { 
    }
 

    prepareRequest(): string{
        return this.config.apiUrl;
    }

    getAllProducts(){
        return this.http.get(this.prepareRequest() + 'api/products').map((response: Response) => response.json());
    }



    // getAllProductForUser() {
    //     return this.http.get(this.config.apiUrl + '/api/products').map((response: Response) => response.json());
    // }
 
    // getProductById(_id: number) {
    //     return this.http.get(this.config.apiUrl + '/api/products/' + _id).map((response: Response) => response.json());
    // }
 
    // createProduct(product: Product) {
    //     return this.http.post(this.config.apiUrl + '/api/products', product);
    // }
 
    // updateProduct(product: Product) {

    //     const headers = new Headers();
    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');

    //     return this.http.put(this.config.apiUrl + '/api/products', product);
    // }
 
    // deleteProduct(_id: number) {
    //     return this.http.delete(this.config.apiUrl + '/api/products/' + _id);
    // }
}