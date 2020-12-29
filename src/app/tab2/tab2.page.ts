import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  carrito = [] as any;
  listlenght: any;

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    
    this.verLenght();

  }

  constructor(private router:Router, private ar:ActivatedRoute, public alertController: AlertController) {

    this.ar.queryParams.subscribe(() => {
      if(this.router.getCurrentNavigation().extras.state){
        this.carrito = this.carrito.concat(this.router.getCurrentNavigation().extras.state.pedido);
        console.log(this.carrito);
        this.listlenght = this.carrito.length
      }
    })

  }

  verCarriro(){
    console.log(this.carrito);
  }

  borrarPlato(item: object){

    var i = this.carrito.indexOf(item)
    this.carrito.splice(i, 1);
    this.listlenght = this.carrito.length
    console.log(this.carrito);

  }

  verLenght(){
    this.listlenght = this.carrito.lenght;
    console.log(this.verLenght);

  }

  reloadPage() {
    this.router.navigate(["/tabs/tab1"]);
    window.location.reload();
    
}

  async pagar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡¡¡Pagado!!!',
      subHeader: '',
      message: 'Su pedido se ha realizado con exito. En pocos minutos uno de nuestros camareros se lo entregará',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: () => {
            this.reloadPage();
          }
        }
      ]
    });
    
    await alert.present();
  }
  

  

}
