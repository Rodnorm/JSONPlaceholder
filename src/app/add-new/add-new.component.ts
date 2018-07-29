import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'

import { appService } from '../app.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
@Injectable()
export class AddNewComponent implements OnInit {

  constructor(private service: appService) {}

  show = false;
  txtButtonNew = 'Novo item';
  dado: any;
  ngOnInit() {
    this.dado = {}
  }
  public mostra(){
    if (this.show){
      this.show= !this.show;
      this.txtButtonNew = 'Novo item';
    }else{
      this.show= !this.show;
      this.txtButtonNew = 'Listar itens';
    }
}
  @Input() userId: number = 100;
  @Input() id: number = 100;
  @Input() title: string = '';
  @Input() body: string = '';
  
  salvar(){
    let newDado = {
      userId: this.userId,
      id: this.id,
      title: this.title,
      body: this.body
     };
     //inicio das validações
     //espera-se que também haja validações no backend :)
     if(this.body == ''){
        alert('Body não pode ser vazio!');
     }else if (this.id == 0){
      alert('Id deve ser maior que 100!');
     }else if(this.userId == 0){
      alert('UserId deve ser maior que 100!');
     }else if(this.title == ''){
      alert('UserId está vazio!');
     }
     //fim das validações
     this.service.addNew(newDado).subscribe(dddsa =>{
       alert("Um novo item foi adicionado");
       //deu tudo certo :)
     },
       (err:HttpErrorResponse) =>{
         //algo deu errado
        alert('Ops, algo deu errado');
        return console.log(err.status);
     } 
    );
    //reseta os campos para os valores iniciais
    this.userId = 100;
    this.id = 100;
    this.title = '';
    this.body = '';
    //..
    //
    this.mostra();
    //esconde as opções de adicionar novo item
  }
}
