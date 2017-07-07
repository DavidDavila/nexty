import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class ExtractDataService {

  constructor(private _http:Http) { }
  	getDataObservable(url:string) {
  		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		headers.append('Access-Control-Allow-Origin', '*');
   		headers.append('x-forwarded-host', 'foo');

  		let options = new RequestOptions({ headers: headers });
  		let petition = url;

      return this._http.get(petition, options)
          .map(data => {
              data.json();
              // the console.log(...) line prevents your code from working 
              // either remove it or add the line below (return ...)
              console.log("I CAN SEE DATA HERE: ", data.json());
              return data.json();
      });
  	}
}
