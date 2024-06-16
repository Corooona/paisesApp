import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = ''

  paises: Country[]=[];


  hayError: boolean = false;

  constructor(private paisService: PaisService){

  }


  getClaseCSS(region:string): string{
    return (region==this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region:string){

    if(region==this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises=[];

    this.paisService.buscarRegion(region)
    .subscribe(
      (paises)=> {
      console.log(paises);
      this.paises=paises;

    }, (err)=>{
      this.hayError = true;
      this.paises=[];
      console.info(err);
    }) ;
  }
  }

