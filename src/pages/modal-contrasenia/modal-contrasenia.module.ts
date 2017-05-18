import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalContrasenia } from './modal-contrasenia';

@NgModule({
  declarations: [
    ModalContrasenia,
  ],
  imports: [
    IonicPageModule.forChild(ModalContrasenia),
  ],
  exports: [
    ModalContrasenia
  ]
})
export class ModalContraseniaModule {}
