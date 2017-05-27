import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Address } from "app/util/interfaces/address";
import { API_URL } from "app/util/util.constants";


@Injectable()
export class CorreiosService {

  constructor(private http: Http) { 
  }

  getAddress( cep:string ): Promise<Address> {
    const url = `${API_URL}/${cep}/json`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Address)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
	}

}
