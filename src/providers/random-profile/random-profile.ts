import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RandomProfileProvider {

  url = 'https://randomuser.me/api/';

  constructor(public http: Http) {
  }

  //Method using GET from the http module and returning the mapped response as a json.
  getProfile() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
