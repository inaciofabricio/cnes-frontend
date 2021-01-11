import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from './estabelecimento.service';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  filtros:any = {
    ds_tipo_unidade : null,
    uf : null,
    municipio : null,
    pagina : 1
  };
  allUf:any = [];
  allMunicipio:any = [];
  AllDsTipoUnidade:any = [];

  geral:any = {
    totalEstabelecimentos : 0,
    totalPaginas : 0
  };
  allEstabelecimento: any = [];


  constructor(
    private estabelecimentoService : EstabelecimentoService
  ) { }

  ngOnInit() {
    this.getAllDsTipoUnidade();
    this.getAllUf();
  }

  getAllDsTipoUnidade(){
    this.estabelecimentoService.getAllDsTipoUnidade()
      .subscribe(res => this.AllDsTipoUnidade = res.data);
  }

  getAllUf(){
    this.estabelecimentoService.getAllUf(this.filtros)
      .subscribe(res => this.allUf = res.data);
  }

  getAllMunicipio(){
    this.filtros.municipio = null;
    this.estabelecimentoService.getAllMunicipio(this.filtros)
      .subscribe(res => this.allMunicipio = res.data);
  }

  btnProximoBlock(){
    return (this.geral.totalPaginas == 0 || this.geral.totalPaginas == this.filtros.pagina) ? true : false;
  }

  proxima(){
    this.filtros.pagina = this.filtros.pagina + 1;
    this.filtrar();
  }

  btnAnteriorBlock(){
    return (this.filtros.pagina == 1) ? true : false;
  }

  anterior(){
    this.filtros.pagina = this.filtros.pagina - 1;
    this.filtrar();
  }

  filtrar(){
  
    this.filtros.ds_tipo_unidade = (this.filtros.ds_tipo_unidade == "null") ? null : this.filtros.ds_tipo_unidade;
    this.filtros.uf = (this.filtros.uf == "null") ? null : this.filtros.uf;
    this.filtros.municipio = (this.filtros.municipio == "null") ? null : this.filtros.municipio;

    this.estabelecimentoService.getAllEstabelecimento(this.filtros)
      .subscribe(res => { 

        if(res != null){
          this.allEstabelecimento = res.data.all_estabelecimento;
          this.geral.totalEstabelecimentos = res.data.totais.t_estabelecimentos;
          this.geral.totalPaginas = res.data.totais.t_paginas;
        }

      });
  }
}
