import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProductsComponent} from './products.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
