import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders} from "@angular/core";
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';

import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';



@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [FormsModule, CommonModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, 
            RatingComponent, CommonModule, 
            FormsModule, ReactiveFormsModule]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, OrderService, RestaurantsService]
        }
    }
}