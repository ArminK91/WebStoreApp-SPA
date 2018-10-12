import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PreviewproductComponent } from './previewproduct/previewproduct.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { MatRippleModule } from '@angular/material';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        DashboardRoutingModule,
        SharedModule,
        StatModule,
        MatRippleModule,
    ],
   
    declarations: [
        DashboardComponent,
        ProductlistComponent,
        ProductItemComponent,
        PreviewproductComponent,
        ChatComponent
    ]
})
export class DashboardModule {}
