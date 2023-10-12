import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUnidade} from "../models/IUnidade";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AcademiaService {

  private readonly URL_API = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) { }

  buscarAcademias() {
    return this.http.get<IUnidade>(this.URL_API)
      .pipe(first());
  }
}
