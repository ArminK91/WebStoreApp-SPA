import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../_services/general.service';

@Component({
  selector: 'app-userproductlist',
  templateUrl: './userproductlist.component.html',
  styleUrls: ['./userproductlist.component.scss']
})
export class UserproductlistComponent implements OnInit {

  constructor(private genServ: GeneralService) {


  }

  getAllProductsForUser(){

  }
  

  ngOnInit() {
  }

}
