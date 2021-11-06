// Uncomment these imports to begin using these cool features!
import {get, param} from '@loopback/rest';


export class PruebaController {
  constructor() { }


  @get('/prueba/{c_postal}/{kilogramos}/{formaPago}/{cupon}')//objeto

  async getEstado(
    //mete todo esto dentro de un objeto?
    @param.path.number('c_postal') c_postal: number,
    @param.path.number('kilogramos') kilogramos: number,
    @param.path.string('formaPago') c_poformaPagostal: string,
    @param.path.string('cupon') cupon: string,

  ): Promise<any> {


    return `Hola mundo ${c_postal}`;
  }
}
