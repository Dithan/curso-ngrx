import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Repository/UsuarioService';
import { IUsuario } from '../Interfaces/UsuarioModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: IUsuario[] = [];
  constructor(private usuariosService: UsuarioService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((usuarios: IUsuario[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
