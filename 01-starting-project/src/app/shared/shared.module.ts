import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";





@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]
})

export class SharedModule{
    
}


/**
 * 1- we dont use the bootstrab property here as we only use it in the root module 
 * 2- we exports the module at every other place that use that module 
 */