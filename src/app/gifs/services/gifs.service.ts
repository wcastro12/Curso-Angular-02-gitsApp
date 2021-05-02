import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Gif, SearchGifsRespont } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
 
  private apikey:string="tYrdG6V2snzFXCS2AUT66cvpCQE9dd7M"
  private servicesurl:string='https://api.giphy.com/v1/gifs'
  public resultados:Gif[]=[]
  private _history:string[]=[];
  get history(){
    return [... this._history]
  }

  searchGifs( query:string){

    query=query.trim().toLocaleLowerCase();
    if(!this._history.includes(query)){
    this._history.unshift(query);
    this._history=this._history.splice(0,10);

    localStorage.setItem("history",JSON.stringify(this._history));
    }

    const params=new HttpParams()
              .set('api_key','tYrdG6V2snzFXCS2AUT66cvpCQE9dd7M')
              .set('limt','10')
              .set('q',query);

    this.http.get<SearchGifsRespont>(`${this.servicesurl}/search`,{params})
    .subscribe( (resp:SearchGifsRespont) => {
      this.resultados=resp.data;
      localStorage.setItem("return",JSON.stringify(this.resultados));
    })
  }
  constructor(private http:HttpClient) { 


      if(localStorage.getItem('history')){
      this._history= JSON.parse(localStorage.getItem('history')!);
      }

      this.resultados = JSON.parse(localStorage.getItem('return')!) || [];
  }


}
