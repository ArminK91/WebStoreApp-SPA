import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    ChatComponent, CreateproductComponent
} from './components';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PreviewproductComponent } from './previewproduct/previewproduct.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { UserproductlistComponent } from './components/userproductlist/userproductlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxNumberBoxModule, DxDataGridModule } from 'devextreme-angular';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        DashboardRoutingModule,
        FormsModule,
        DxNumberBoxModule,
        DxDataGridModule,
        ReactiveFormsModule,
        SharedModule
    ],
   
    declarations: [
        DashboardComponent,
        ProductlistComponent,
        CreateproductComponent,
        ProductItemComponent,
        UserproductlistComponent,
        PreviewproductComponent,
        ChatComponent
    ]
})
export class DashboardModule {}
