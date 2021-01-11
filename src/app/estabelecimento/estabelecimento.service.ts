import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import * as g from '../global';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    private http: Http
  ) { }

  getAllEstabelecimento(obj:any){
    return this.http.post(g.baseUrl+'estabelecimento/get_all_estabelecimento',obj)
      .pipe(map((response: Response) => response.json()));
  }

  getAllDsTipoUnidade(){
    return this.http.get(g.baseUrl+'estabelecimento/ds_tipo_unidade')
      .pipe(map((response: Response) => response.json()));
  }

  getAllUf(obj:any){
    return this.http.post(g.baseUrl+'estabelecimento/get_all_uf',obj)
      .pipe(map((response: Response) => response.json()));
  }

  getAllMunicipio(obj:any){
    return this.http.post(g.baseUrl+'estabelecimento/get_all_municipio',obj)
      .pipe(map((response: Response) => response.json()));
  }
}
