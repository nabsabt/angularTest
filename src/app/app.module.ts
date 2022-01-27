//Module basicly bundles the app/components we create. For most of the projects, it's usually 1 module is enough,
//only more complex projects require mode modules. Module is basically a shelf, on which we place the books (=components). 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; //this is a TS-specific import, as TS needs to know, from where we import things
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent} from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { SecretButtonComponent } from './secret-button/secret-button.component';
//Every component we add, need to be registered here, in the Module, other wise Angular wont even know, it exists. For TS to know, where it is,
//we need to import it first.

@NgModule({
  //We register new components here, in the declaration object.
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessalertComponent,
    SecretButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
