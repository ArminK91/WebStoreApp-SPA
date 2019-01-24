import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { LocalStorageService } from './local-storage.service';
import { map, catchError } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { IProduct } from '../_models/productModel';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const bbiApiUrl = 'http://apitest.bbi.com.ba/api/';

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=1',
    })
  };
  
  export const httpReportOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/pdf'
    })
  };

@Injectable({
    providedIn: 'root'
  })
export class GeneralService {
    headersMultipartFormData: HttpHeaders;
    //reportingEndpointTest: "http://noviwf.bbi.com.ba:9988/";
    reportingEndpointTest: string;
    constructor(private http: HttpClient, private toastrService: ToastrService, private httpo: Http, private localStorageService: LocalStorageService) {
      this.reportingEndpointTest = "http://localhost:17241/";
      //this.reportingEndpointTest = "noviwf.bbi.com.ba:9988/";
  
      this.headersMultipartFormData = new HttpHeaders();
      this.headersMultipartFormData.delete("Content-Type");
      this.headersMultipartFormData.set('Accept', 'application/json');
      this.headersMultipartFormData.set('enctype', 'multipart/form-data');
      // this.headersMultiform.append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    }

    // prepareRequest(): string{
    //     return this.config.apiUrl;
    // }

    // getAllProducts() : Observable<Product[]>{
    //     return this.http.get(this.prepareRequest() + 'api/products').map((response: Response) => response.json());
    // }

    // deleteProduct(productId: number){
    //     return this.http.delete(this.prepareRequest() + 'api/products').map((response: Response) => response.json());
    // }
  
    // getProductById(_id: number): Observable<Product> {
    //     return this.http.get(this.config.apiUrl + '/api/products/' + _id).map((response: Response) => response.json());
    // }
 
    // createProduct(product: Product): Observable<Product> {
    //     return this.http.post(this.config.apiUrl + '/api/products', product).pipe(map(product =>  Response as Product);
    // }
 
    // updateProduct(product: Product) {
    //     return this.http.put(this.config.apiUrl + '/api/products', product);
    // }


    public extractData(res: Response) {
        const body: any = res.json();
        if (body) {
          return body.data || body;
        } else {
          return {};
        }
      }
    
      
  // methode koje ubrizgavaju Token u header
  get = (url: string): Observable<any> => this.http.get(this.getApiUrl(url), httpOptions);
  delete = (url: string): Observable<any> => this.http.delete(this.getApiUrl(url), httpOptions);
  put = (url: string, body: any): Observable<any> => this.http.put(this.getApiUrl(url), body, httpOptions);
  post = (url: string, body: any): Observable<any> => this.http.post(this.getApiUrl(url), body, httpOptions);
  patch = (url: string, body: any): Observable<any> => this.http.patch(this.getApiUrl(url), body, httpOptions);

   
   
    public getApiUrl(urlPart: string): string {
        return `${bbiApiUrl}${urlPart}`;
    }

    postFormData = (url: string, body: any): Observable<Object> =>
    this.http.post(this.getApiUrl(url), body, { headers: this.headersMultipartFormData })

  public handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message

    // console.log(`Error occured:`, error);

    // const errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    // return Observable.throw(errMsg);
    return Observable.throw(error);
  }

  public showError(error: any) {
    console.log(`Greška: ${error.message}`);
    const config: Partial<IndividualConfig> = this.toastrService.toastrConfig;
    config.positionClass = "toast-top-center";
    this.toastrService.error(`${error.message}`, "Greška", config);
    return Observable.throw(error);
  }





}