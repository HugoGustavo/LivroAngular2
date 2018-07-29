import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {
  private nomesPessoas:string[] = ['João', 'Maria', 'Angular 2', 'Hugo Gustavo'];

  constructor() { }

  getPessoas():string[]{
    return this.nomesPessoas;
  }

  setPessoa(nome:string):void{
    this.nomesPessoas.push(nome);
  }

}
