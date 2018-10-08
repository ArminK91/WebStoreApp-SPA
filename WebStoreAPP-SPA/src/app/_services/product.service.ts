import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
import { Product } from '../_models/product';
import { GeneralService } from '../_services/general.service';

@Injectable()
export class ProductService {
    constructor(private http: Http, private config: AppConfig, private genServ: GeneralService) { }
 
    getAllProductForUser() {
        return this.http.get(this.genServ.prepareRequest() + '/api/products').map((response: Response) => response.json());
    }
 
    getProductById(_id: number) {
        return this.http.get(this.config.apiUrl + '/api/products/' + _id).map((response: Response) => response.json());
    }
 
    createProduct(product: Product) {
        return this.http.post(this.config.apiUrl + '/api/products', product);
    }
 
    updateProduct(product: Product) {

        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.put(this.config.apiUrl + '/api/products', product);
    }
 
    deleteProduct(_id: number) {
        return this.http.delete(this.config.apiUrl + '/api/products/' + _id);
    }
}