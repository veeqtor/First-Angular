import { ProductDetailComponent } from "./product-detail.component";
import { ProductComponent } from "./product-list.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}
