import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../../_services/product.service';
import { IProduct } from '../../../../_models/productModel';



@Component({
  moduleId: module.id,
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
})
export class CreateproductComponent implements OnInit {
  proizvod: IProduct;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  produktForma: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toasterService: ToastrService) {
    this.produktForma = this.formBuilder.group({
      nazivProizvoda: [{ value: null, disabled: false}, [Validators.required]],
      cijenaProizvoda: [{ value: null, disabled: false }, [Validators.required]],
      kolicinaProizvoda: [{ value: null, disabled:  false }, [Validators.required]],
      tipProizvoda: [{ value: null, disabled: false }, [Validators.required]],
      opisProizvoda: [{ value: null, disabled: false }, [Validators.required]]
    });
  }


  snimiProizvod() {
    //const product = this.produktForma.value();
    this.productService.createProduct(this.proizvod).subscribe(data => {
      this.proizvod  = data;
      this.toasterService.success("Uspjesno snimljen produkt!");
    },
    error => {
      this.toasterService.error("Greska prilikom spasavanja.");
    })
  }

  ngOnInit() {
    
  }

}
