import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Dado } from './dados';

@Injectable({
    providedIn: 'root'
})
export class appService {
    constructor(private http: HttpClient){}
    readonly url = 'https://jsonplaceholder.typicode.com/posts';
    dados: Dado;


    listar(){
        return this.http.get<Dado>(this.url);
    }

    addNew(dados){
        return this.http.post(this.url, JSON.stringify(dados));
    }
    deleteItem(item){
        return this.http.delete(this.url +item);
    }
}