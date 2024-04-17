import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface PersonajesResult {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<Personaje>;
}

export interface Personaje {
  id: number;
  name: string;
  species: string;
  image: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private readonly http = inject(HttpClient);

  constructor() { }

  cargar(pagina: number = 1) {
    return this.http
      .get<PersonajesResult>(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .pipe(map(r => r.results));
  }
}
