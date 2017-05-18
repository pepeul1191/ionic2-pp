import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http:Http) {
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
     this.http.post("http://localhost:2000/login", params, {headers : headers}).map(res => res.json()).subscribe(data => {

        console.log(data);
     });
  }

}
