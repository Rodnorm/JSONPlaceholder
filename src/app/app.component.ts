import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'


import { appService } from './app.service';
import { Dado } from './dados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor (private service: appService){}
  dados: Dado;
  filtroPesquisa: string = '';
  ngOnInit(): void{
    this.getLista();//retorna a lista obtida através do get
  }
  
  getLista(){
    return this.service.listar().subscribe(dado => {
      this.dados = dado;
    });

  }
  delete(dado){
    if (confirm('Quer realmente deletar o item '+dado.title+'?')){
      this.service.deleteItem('/'+JSON.stringify(dado.id)).subscribe(data =>{
        alert('O item foi deletado corretamente');
      },
        (err: HttpErrorResponse) =>{ //caso algo dê errado
          alert('Ops, algo deu errado');
          console.log(err);
        }
      );
    }
  }

}
