import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import {PagInicial} from '../pag-inicial/pag-inicial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public registro: any;
  public usuario: string;
  public senha: string;

  constructor(public navCtrl: NavController,public _form: FormBuilder, public alertCtrl: AlertController) {
    this.registro = this._form.group({
      "Usuario":["",Validators.required],
      "Senha":["",Validators.required]
    })
  }

submit(){

  this.usuario =this.registro.value.Usuario 
  this.senha = this.registro.value.Senha;

  if (this.usuario == "IOS" && this.senha == "hyperfast"){
    this.navCtrl.push(PagInicial)
  }
  else{
    this.mostrarAlerta();
    this.registro.reset();
  }
}
mostrarAlerta(){
  let alert = this.alertCtrl.create({
    title: "Usuario ou senha incorretos",
    subTitle:"Tente novamente",
    buttons: ["OK"]
  })
  alert.present();
}

}
