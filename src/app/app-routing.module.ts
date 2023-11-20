import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'createProduct',
        pathMatch: 'full'
      },
    {
        path: 'createProduct',
        component: CreateProductComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
