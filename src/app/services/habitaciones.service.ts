import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) { }

  consultarHabitaciones():Observable<any>{
    let uri="http://apilfs.herokuapp.com/hoteles/habitaciones"
    return this.peticion.get(uri)
  }
}
