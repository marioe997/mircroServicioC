import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, response
} from '@loopback/rest';
import {Estados, postales} from '../models';
import {EstadosRepository, PostalesRepository, ZonasRepository} from '../repositories';

export class PostalesController {
  constructor(
    @repository(PostalesRepository)
    public postalesRepository: PostalesRepository,

    @repository(EstadosRepository)
    public estadosRepository: EstadosRepository,

    @repository(ZonasRepository)
    public zonasRepository: ZonasRepository,
  ) { }

  @get('/postales/{c_postal}/{kilogramos}/{formaPago}')
  @response(200, {
    description: 'Array of Postales model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(postales, {includeRelations: true}),
        },
      },
    },
  })
  async getEstado(
    @param.path.number('c_postal') c_postal: number,
    @param.path.number('kilogramos') kilogramos: number,
    @param.path.string('formaPago') c_poformaPagostal: string,
  ): Promise<postales[]> {

    let postal = this.postalesRepository.find({where: {d_codigo: c_postal}, fields: ['c_estado']});
    let codEstado = (await postal).map((postal) => postal.c_estado);;
    let estado = this.estadosRepository.find({where: {cod_estado: codEstado[0]}, fields: ['zona']});
    let zona = (await estado).map((estado) => estado.zona);
    let zonaConsulta: String = zona[0];
    console.log(zonaConsulta);
    //let precio = this.zonasRepository.find({where: {kilogramo: kilogramos}, fields: [zonaConsulta]});
    //let total = (await estado).map((estado) => estado.zona);

    console.log(zona[0]);


    return postal;
  }

  @get('/prueba')
  @response(200, {
    description: 'Array of Postales model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estados, {includeRelations: true}),
        },
      },
    },
  })
  async Estado(

  ): Promise<Estados[]> {
    let estado = this.estadosRepository.find({where: {cod_estado: 9}, fields: ['zona']});
    return estado;
  }

}
