import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    placeholder_usuario : string;
    placeholder_contrasenia : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http:Http, private toastCtrl: ToastController) {
      this.placeholder_usuario = "Usuario";
      this.placeholder_contrasenia ="Contraseña";
      this.loginForm = formBuilder.group({
        usuario: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        contrasenia: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public validar(usuario, contrasenia){
     let headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     var params  = "usuario=" + usuario + "&contrasenia=" +contrasenia;

     this.http.post("http://localhost:2000/login", params, {headers : headers}).map(res => res.json()).subscribe(data => {
        if(data["mensaje"][0] == 1){
          this.navCtrl.push(HomePage);
        }else{
          let toast = this.toastCtrl.create({
            message: 'Usuario y/o contraseña no válidos',
            duration: 3000,
            position: 'middle'
          });

          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });

          toast.present();
        }
     });
  }

}
