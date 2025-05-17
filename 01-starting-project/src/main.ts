// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)







//*********changes *********/


/**
 * 1- we have commented out all the lines of this file as this file is the root that runs the application
 * 2- we have commented the bootstrab application as the appcomponent is work on the standalone module but this is not the approach here now 
 * 3- we will import the platformBrowserDynamic function 
 */