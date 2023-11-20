import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { Liga } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  private baseUrl: string = environment.base_url;
  


  constructor(
    private http:HttpClient  
  ) { }

   //obtener el el token de nuestro localstorage
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
        headers:  {
        'x-token': this.token
      }
    }
  }




  getLigas(){
    const url = `${ this.baseUrl }/productos`;

    return this.http.get< { ok: boolean, productos:any[] } > ( url)
                      .pipe(
                        map( (resp: { ok: boolean, productos:any[] } ) => resp.productos )
                      )
  }

  

  getLigasStatusFalse(){
    const url = `${ this.baseUrl }/ligas/statusFalse`;

    return this.http.get< { ok: boolean, ligas:Liga[] } > ( url, this.headers )
                      .pipe(
                        map( (resp: { ok: boolean, ligas:Liga[] } ) => resp.ligas )
                      )
  }









  agregarLiga( liga: any){

    const url = `${ this.baseUrl }/productos`;

    return this.http.post(url, liga  );
  }

}