import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  pais!:Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ){}
  
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )),
    tap(console.log)
    )
    .subscribe(
      paises => this.pais = paises[0],
      err => console.error(err)
    );
  
  }

  getTranslationKeys(translations: { [key: string]: any }): string[] {
    return Object.keys(translations);
  }
}
