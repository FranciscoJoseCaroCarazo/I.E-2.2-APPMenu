import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  verPrimerosPlatos(): Observable<any>{
    const endPoint="https://platos-8c414-default-rtdb.firebaseio.com/PrimerosPlatos.json";
    return this.http.get(endPoint);
  ​​​ }​

  verSegundosPlatos(): Observable<any>{
    const endPoint="https://platos-8c414-default-rtdb.firebaseio.com/SegundosPlatos.json";
    return this.http.get(endPoint);
  }

  verPostres(): Observable<any>{
    const endPoint="https://platos-8c414-default-rtdb.firebaseio.com/Postre.json";
    return this.http.get(endPoint);
  }

}
