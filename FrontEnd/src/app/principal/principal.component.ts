import {Component, OnInit, Input} from '@angular/core';
import {UsuarioService} from "../servicios/usuario.service";
import {IntercambioInformacionService} from "../servicios/intercambio-informacion.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario: string;
  confirmacion: boolean;
  ultimoIdMostrado: number;

  constructor(private _usuarioServicio: UsuarioService, private _intercambioInformacion: IntercambioInformacionService) {
  }

  ngOnInit() {
    this.usuario = this._usuarioServicio.getUsuario();
  }

  numeroDePerfilesMostrados = 3;
  numeroDePerfilesMostradosPapa = 1
  numeroDePerfilesMostradosHijo = 3
  perfiles = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'profile1.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'profile1.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'profile1.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'profile1.png'
    },
    {
      id: 5,
      nombrePerfil: 'Nancy',
      nombreImagen: 'profile1.png'
    },
    {
      id: 6,
      nombrePerfil: 'Bryan',
      nombreImagen: 'profile1.png'
    },
    {
      id: 7,
      nombrePerfil: 'Andres',
      nombreImagen: 'profile1.png'
    },
    {
      id: 8,
      nombrePerfil: 'Adrian',
      nombreImagen: 'profile1.png'
    },
    {
      id: 9,
      nombrePerfil: 'Vicente',
      nombreImagen: 'profile1.png'
    }
  ];
  perfilesPapa = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'profile1.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'profile1.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'profile1.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'profile1.png'
    },
    {
      id: 5,
      nombrePerfil: 'Nancy',
      nombreImagen: 'profile1.png'
    }];
  perfilesHijo = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'profile1.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'profile1.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'profile1.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'profile1.png'
    },
    {
      id: 5,
      nombrePerfil: 'Nancy',
      nombreImagen: 'profile1.png'
    }];
  dividirPerfiles = [this.perfiles[this.numeroDePerfilesMostrados - 3], this.perfiles[this.numeroDePerfilesMostrados - 2], this.perfiles[this.numeroDePerfilesMostrados - 1], this.perfiles[this.numeroDePerfilesMostrados]]
  dividirPerfilesPapa = [this.perfilesPapa[this.numeroDePerfilesMostradosPapa - 1], this.perfilesPapa[this.numeroDePerfilesMostradosPapa]]
  dividirPerfilesHijo = [this.perfilesHijo[this.numeroDePerfilesMostradosHijo - 3], this.perfilesHijo[this.numeroDePerfilesMostradosHijo - 2], this.perfilesHijo[this.numeroDePerfilesMostradosHijo - 1], this.perfilesHijo[this.numeroDePerfilesMostradosHijo]]



  numeroDePerfiles = this.perfiles.length
  numeroDePerfilesPapa = this.perfilesPapa.length
  numeroDePerfilesHijo = this.perfilesHijo.length

  primero = this.numeroDePerfilesMostrados - 3
  segundo = this.numeroDePerfilesMostrados - 2
  tercero = this.numeroDePerfilesMostrados - 1
  cuarto = this.numeroDePerfilesMostrados
  primeroPapa = this.numeroDePerfilesPapa - 1;
  segundoPapa = this.numeroDePerfilesPapa;
  primeroHijo = this.numeroDePerfilesMostradosHijo - 3
  segundoHijo = this.numeroDePerfilesMostradosHijo - 2
  terceroHijo = this.numeroDePerfilesMostradosHijo - 1
  cuartoHijo = this.numeroDePerfilesMostradosHijo

  dioClickSiguienteHijo(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.numeroDePerfilesMostradosHijo = this.numeroDePerfilesMostradosHijo + 4;
      this.condicionesSaltosCuatroHijo()
    }
  }

  dioClickSiguientePapa(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.numeroDePerfilesMostradosPapa = this.numeroDePerfilesMostradosPapa + 2;
      this.condicionesSaltoDos()
    }
  }

  dioClickSiguiente(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.numeroDePerfilesMostrados = this.numeroDePerfilesMostrados + 4;
      this.condicionesSaltosCuatro()
    }
  }

  aux = 0;

  dioClickAnterior(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.aux = this.numeroDePerfilesMostrados
      this.numeroDePerfilesMostrados = this.numeroDePerfiles + this.numeroDePerfilesMostrados - 4;
      if ((this.numeroDePerfilesMostrados - 4) == this.numeroDePerfiles) {
        this.numeroDePerfilesMostrados = this.aux - 4
      }
      this.condicionesSaltosCuatro()
    }
  }
  auxPapa = 0;
  dioClickAnteriorPapa(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.auxPapa = this.numeroDePerfilesMostradosPapa
      this.numeroDePerfilesMostradosPapa = this.numeroDePerfilesPapa + this.numeroDePerfilesMostradosPapa - 2;
      if ((this.numeroDePerfilesMostradosPapa - 2) == this.numeroDePerfilesPapa) {
        this.numeroDePerfilesMostradosPapa = this.auxPapa - 2
      }
      this.condicionesSaltoDos()
    }
  }
auxHijo = 0;
  dioClickAnteriorHijo(confirmacion: boolean) {
    this.confirmacion = confirmacion;
    if (this.confirmacion) {
      this.auxHijo = this.numeroDePerfilesMostradosHijo
      this.numeroDePerfilesMostradosHijo = this.numeroDePerfilesHijo + this.numeroDePerfilesMostradosHijo - 4;
      if ((this.numeroDePerfilesMostradosHijo - 4) == this.numeroDePerfilesHijo) {
        this.numeroDePerfilesMostradosHijo = this.auxHijo - 4
      }
      this.condicionesSaltosCuatroHijo()
    }
  }

  condicionesSaltosCuatro() {
    this.cuarto = this.numeroDePerfilesMostrados
    this.tercero = this.numeroDePerfilesMostrados - 1
    this.segundo = this.numeroDePerfilesMostrados - 2
    this.primero = this.numeroDePerfilesMostrados - 3
    if (this.primero == this.numeroDePerfiles) {
      this.dividirPerfiles = [this.perfiles[0], this.perfiles[1], this.perfiles[2], this.perfiles[3]]
      this.numeroDePerfilesMostrados = 3
    }
    else if (this.segundo == this.numeroDePerfiles) {
      this.dividirPerfiles = [this.perfiles[this.primero], this.perfiles[0], this.perfiles[1], this.perfiles[2]]
      this.numeroDePerfilesMostrados = 2
    }
    else if (this.tercero == this.numeroDePerfiles) {
      this.dividirPerfiles = [this.perfiles[this.primero], this.perfiles[this.segundo], this.perfiles[0], this.perfiles[1]]
      this.numeroDePerfilesMostrados = 1
    }
    else if (this.cuarto == this.numeroDePerfiles) {
      this.dividirPerfiles = [this.perfiles[this.primero], this.perfiles[this.segundo], this.perfiles[this.tercero], this.perfiles[0]]
      this.numeroDePerfilesMostrados = 0
    }
    else {
      this.dividirPerfiles = [this.perfiles[this.primero], this.perfiles[this.segundo], this.perfiles[this.tercero], this.perfiles[this.cuarto]]
    }
  }

  condicionesSaltosCuatroHijo() {
    this.cuartoHijo = this.numeroDePerfilesMostradosHijo
    this.terceroHijo = this.numeroDePerfilesMostradosHijo - 1
    this.segundoHijo = this.numeroDePerfilesMostradosHijo - 2
    this.primeroHijo = this.numeroDePerfilesMostradosHijo - 3
    if (this.primeroHijo == this.numeroDePerfilesHijo) {
      this.dividirPerfilesHijo = [this.perfilesHijo[0], this.perfilesHijo[1], this.perfilesHijo[2], this.perfilesHijo[3]]
      this.numeroDePerfilesMostradosHijo = 3
    }
    else if (this.segundoHijo == this.numeroDePerfilesHijo) {
      this.dividirPerfilesHijo = [this.perfilesHijo[this.primeroHijo], this.perfilesHijo[0], this.perfilesHijo[1], this.perfilesHijo[2]]
      this.numeroDePerfilesMostradosHijo = 2
    }
    else if (this.terceroHijo == this.numeroDePerfilesHijo) {
      this.dividirPerfilesHijo = [this.perfilesHijo[this.primeroHijo], this.perfilesHijo[this.segundoHijo], this.perfilesHijo[0], this.perfilesHijo[1]]
      this.numeroDePerfilesMostradosHijo = 1
    }
    else if (this.cuartoHijo == this.numeroDePerfilesHijo) {
      this.dividirPerfilesHijo = [this.perfilesHijo[this.primeroHijo], this.perfilesHijo[this.segundoHijo], this.perfilesHijo[this.terceroHijo], this.perfilesHijo[0]]
      this.numeroDePerfilesMostradosHijo = 0
    }
    else {
      this.dividirPerfilesHijo = [this.perfilesHijo[this.primeroHijo], this.perfilesHijo[this.segundoHijo], this.perfilesHijo[this.terceroHijo], this.perfilesHijo[this.cuartoHijo]]
    }
  }

  condicionesSaltoDos(){
    this.primeroPapa = this.numeroDePerfilesMostradosPapa - 1
    this.segundoPapa = this.numeroDePerfilesMostradosPapa
    if (this.primeroPapa == this.numeroDePerfilesPapa) {
      this.dividirPerfilesPapa = [this.perfilesPapa[0], this.perfilesPapa[1]]
      this.numeroDePerfilesMostradosPapa = 1
    }
    else if (this.segundoPapa == this.numeroDePerfilesPapa) {
      this.dividirPerfilesPapa = [this.perfilesPapa[this.primeroPapa], this.perfilesPapa[0]]
      this.numeroDePerfilesMostradosPapa = 0
    }
    else {
      this.dividirPerfilesPapa = [this.perfilesPapa[this.primeroPapa], this.perfilesPapa[this.segundoPapa]]
    }
  }
}
