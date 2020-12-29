import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: any;
  carrito = [] as any;

  constructor(private service: ServiceService, private router:Router, public alertController: AlertController) { }

  ngOnInit(): void {
    this.verPrimerosPlatos();
  }

  verPrimerosPlatos(){
    this.service.verPrimerosPlatos()
    .subscribe( response => {
      this.lista = response;
      console.log(this.lista);
    },
    error => {
      console.log(error);
    }
    )
  }

  verSegundosPlatos(){
    this.service.verSegundosPlatos()
    .subscribe( response => {
      this.lista = response;
      console.log(this.lista);
    },
    error => {
      console.log(error);
    }
    )
  }

  verPostres(){
    this.service.verPostres()
    .subscribe( response => {
      this.lista = response;
      console.log(this.lista);
    },
    error => {
      console.log(error);
    }
    )
  }

  obtenerPlato(item: object){

    this.carrito.push(item)
    console.log(this.carrito)

  }

  mandar(){
    let nav : NavigationExtras = {
      state: {pedido: this.carrito}
    }
    this.router.navigate(['/tabs/tab2'], nav)
    this.carrito = [];
  }

  send(){
    if (this.carrito.length < 1){
      this.presentAlert();
    } else{
      this.mandar();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: '',
      message: 'No ha seleccionado ningun plato. Por favor elija al menos uno.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
