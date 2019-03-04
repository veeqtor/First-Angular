import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product-list.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { ProductDetailComponent } from "./product-detail.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
