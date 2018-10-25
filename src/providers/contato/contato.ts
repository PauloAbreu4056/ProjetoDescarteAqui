import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ContatoProvider Provider');
  }

}
