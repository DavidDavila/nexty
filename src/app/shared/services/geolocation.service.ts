import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeolocationService {
  private data: BehaviorSubject<any>;

  constructor(private _http: Http) {
  	this.data = new BehaviorSubject('');
  	this.init();
   }
  init() {
  	if(navigator.geolocation){
	    navigator.geolocation.getCurrentPosition(position => {  
	    	this._http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=true').subscribe( (data) => {
	    		let response = JSON.parse(data['_body']);
	    		let city = this.getCity(response.results[1])
	    		let gps = {
	    			position: position,
	    			data: response,
	    			city: city
	    		}
	    		console.log(gps)
	    		this.data.next(gps); 
	    	})
	    }, (error) => {
	    	this.data.next(false);
	    });
  	}else {
	    this.data.next(false);
  		
  	}

  }
  getData(){
    return this.data.asObservable();
  }
  getCity(locale){
  	let add= locale.formatted_address ;
    let value = add.split(",");

    let count=value.length;
    return {
	    state : value[count-1],
	    city : value[count-2],
	    address : value[count-3]
    }
  }

}
