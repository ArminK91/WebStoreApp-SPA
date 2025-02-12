import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { UserproductlistComponent } from './components/userproductlist/userproductlist.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'createproduct', component: CreateproductComponent},
    { path: 'usersproducts', component: UserproductlistComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
