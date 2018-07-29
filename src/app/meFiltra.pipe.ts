import { Pipe, PipeTransform } from '@angular/core';
import { Dado } from './dados';

@Pipe({name: 'meFiltra'})
export class meFiltra implements PipeTransform {
    transform(dados: Dado[], descriptionQuery: string) {
        if(descriptionQuery){
            return dados.filter(dado => dado.body.includes(descriptionQuery))//o erro acontece aqui
        }else{
            return dados;
        }
    }
}