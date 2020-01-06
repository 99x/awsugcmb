import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the needed module here and update in the imports and exports arrays
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Add module here
    ModalModule.forRoot()
  ],
  exports: [
    // Add module here
    ModalModule
  ]
})
export class AppNgxBootstrapModule { }
