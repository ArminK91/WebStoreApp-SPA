import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 import { map, catchError } from 'rxjs/operators';
import { IProduct } from '../_models/productModel';
import { GeneralService } from '../_services/general.service';

@Injectable()
export class ProductService {
    constructor(private generalService: GeneralService) { }
 
    getAllProductForUser(): Observable<IProduct[]> {
        return this.generalService.get('/api/products').pipe(
            map((response => response as IProduct[]),
            catchError((error =>  this.generalService.showError(error)))
          ));
        }
    

    getProductById(_id: number): Observable<IProduct> {
        return this.generalService.get('/api/products/' + _id).pipe(
            map((response => response as IProduct),
            catchError((error =>  this.generalService.showError(error)))
          ));
    }
 
    createProduct(product: IProduct): Observable<IProduct> {
        return this.generalService.post('/api/products', product)
        .pipe(map((response => response as IProduct),
        catchError((error => this.generalService.showError(error)))
        ));
    }
 
    updateProduct(product: IProduct): Observable<IProduct> {
        return this.generalService.put('/api/products', product)
        .pipe(map((response => response as IProduct),
        catchError((error => this.generalService.showError(error)))
        ));
    }
 
    deleteProduct(_id: number): Observable<any> {
        return this.generalService.delete('/api/products/' + _id)
        .pipe(map((response => response as any),
        catchError((error => this.generalService.showError(error)))
        ));
    }
}


