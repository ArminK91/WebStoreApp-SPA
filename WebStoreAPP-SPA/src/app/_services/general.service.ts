import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
import { Product } from '../_models/product';
 
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

    deleteProduct(productId: number){
        return this.http.delete(this.prepareRequest() + 'api/products').map((response: Response) => response.json());
    }
  
    getProductById(_id: number) {
        return this.http.get(this.config.apiUrl + '/api/products/' + _id).map((response: Response) => response.json());
    }
 
    createProduct(product: Product) {
        return this.http.post(this.config.apiUrl + '/api/products', product);
    }
 
    updateProduct(product: Product) {
        return this.http.put(this.config.apiUrl + '/api/products', product);
    }
}