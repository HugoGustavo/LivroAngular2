import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Livro Angular 2';
  private foto:string = 'favicon.ico';

  constructor(private service:AlertaService){

  }
  
  enviarMsg():void{
    this.service.msgAlerta();
  }
}
