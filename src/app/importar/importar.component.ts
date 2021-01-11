import { Component, OnInit } from '@angular/core';
import { ImportarService } from './importar.service';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']
})
export class ImportarComponent implements OnInit {

  constructor(
    private importarService : ImportarService
  ) { }

  allEstabelecimento:any = [];
  acompanhamento : any = {
    totalInserido : 0,
    totalAtualizado : 0,
    totalAndamento : 0,
    totalGeral : 0    
  }

  ngOnInit() {
  }

  fileChanged(e) {
    
    let file = e.target.files[0]; 
    
    this.importarService.readFilePromise(file)
      .then(result => {
        this.allEstabelecimento = result;
        this.acompanhamento.totalInserido = 0;
        this.acompanhamento.totalAtualizado = 0;
        this.acompanhamento.totalAndamento = 0;
        this.acompanhamento.totalGeral = this.allEstabelecimento.length;
        this.update(0);
    });
  }

  update(x){
    
    this.acompanhamento.totalAndamento = x+1;

    this.importarService.update(this.allEstabelecimento[x])
      .subscribe(res => {

        let result:any = res;
          
        if(result.data != null && result.data.status == 1){
          this.acompanhamento.totalInserido = this.acompanhamento.totalInserido + 1;
        }else if(result.data != null && result.data.status == 2){
          this.acompanhamento.totalAtualizado = this.acompanhamento.totalAtualizado + 1;
        }

        if((x+1) < this.allEstabelecimento.length){
          this.update(x+1);
        }

      });
  }

}
