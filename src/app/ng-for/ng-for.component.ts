import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  private nomes:any[] = [
    {id:1, nome:'João'},
    {id:2, nome:'Maria'},
    {id:3, nome:'Thiago'},
    {id:4, nome:'José'}
  ];

  constructor() { }

  ngOnInit() {
  }

  meusave(index:number, nomes:any){
    return nomes.id;
  }

  atualizar():void{
    this.nomes = [
      {id:1, nome:'João'},
      {id:2, nome:'Maria'},
      {id:3, nome:'Thiago'},
      {id:4, nome:'José'},
      {id:5, nome:'tatat'}
    ];
  }
}
