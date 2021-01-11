import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import * as g from '../global';

@Injectable({
  providedIn: 'root'
})
export class ImportarService {

  constructor(
    private http: Http
  ) { }

  update(obj:any){
    return this.http.post(g.baseUrl+'estabelecimento/update',obj)
      .pipe(map((response: Response) => response.json()));
  }

  readFilePromise(file){
    return new Promise((resolve, reject) => {
      this.readFile(file)
        .then(result => resolve(result))
        .catch(err => reject(err));
      }
    );
  }

  readFile(file: File) {
    return new Promise((resolve, reject) => {
            
      let reader = new FileReader();
      reader.onload = () => {

        let result : any = reader.result;
        let linhas = result.split("\n");

        let dados = [];
        let linha = '';

        for (let i = 1; i < linhas.length;i++){
          
            if(linhas[i] != ""){
            
                linha = '';
                linha = linhas[i].split('","');

                dados.push({
                  "co_cnes" : linha[0].replace(/"/g, ''),
                  "co_ibge" : linha[1].replace(/"/g, ''),
                  "no_fantasia" : linha[2].replace(/"/g, ''),
                  "ds_tipo_unidade" : linha[3].replace(/"/g, ''),
                  "tp_gestao" : linha[4].replace(/"/g, ''),
                  "no_logradouro" : linha[5].replace(/"/g, ''),
                  "nu_endereco" : linha[6].replace(/"/g, ''),
                  "no_bairro" : linha[7].replace(/"/g, ''),
                  "co_cep" : linha[8].replace(/"/g, ''),
                  "uf" : linha[9].replace(/"/g, ''),
                  "municipio" : linha[10].replace(/"/g, ''),
                  "nu_telefone" : linha[11].replace(/"/g, '')                  
                });
            }
        }

        resolve(dados)
        reject('Revise o arquivo que está sendo feito upload');
      };
      reader.readAsText(file, 'ISO-8859-1');
    });
  }
}
