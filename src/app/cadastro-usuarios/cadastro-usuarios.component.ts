import { Component } from '@angular/core';
import { UsuarioService } from '../Repository/UsuarioService';
import { IUsuario } from '../Interfaces/UsuarioModel';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent {
  model: IUsuario = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private usuarioService: UsuarioService) {}

  addUsuario() {
    console.log(this.model);
    if (this.model.id == 0) {
      this.usuarioService.addUsuario(this.model).subscribe();
    } else {
      this.usuarioService.updateUsuario(this.model).subscribe();
    }
  }
}
