import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {

  listaContactos : any[]=[];
  constructor(private usuService:UsuarioServiceService ) { }

  ngOnInit(): void {
    this.usuService.getUsuarios().subscribe(resp => {
      console.log(resp);
      resp.data.forEach((User:  User) => this.listaContactos.push(User));
        
      })
    }
  }
