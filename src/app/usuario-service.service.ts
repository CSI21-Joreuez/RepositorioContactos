import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) {}

getUsuarios() : Observable<any>
{
  return this.http.get<any>('https://reqres.in/api/users?page=2');
}
}
