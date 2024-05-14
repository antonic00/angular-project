import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Name} from "../name";
import {NAMES} from "../name-list";

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  getNames() : Observable<Name[]> {
    return of(NAMES);
  }

}
