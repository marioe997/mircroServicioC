const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, response
} from '@loopback/rest';
import {Precios} from '../models';
import {EstadosRepository, PostalesRepository, PreciosRepository} from '../repositories';

export class PostalesController {
  constructor(
    @repository(PostalesRepository)
    public postalesRepository: PostalesRepository,

    @repository(EstadosRepository)
    public estadosRepository: EstadosRepository,

    @repository(PreciosRepository)
    public preciosRepository: PreciosRepository,
  ) { }

  @get('/postales/{c_postal}/{kilogramos}/{formaPago}/{cupon}')//objeto
  @response(200, {
    description: 'Array of Postales model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Precios, {includeRelations: true}),
        },
      },
    },
  })
  async getEstado(
    //mete todo esto dentro de un objeto?
    @param.path.number('c_postal') c_postal: number,
    @param.path.number('kilogramos') kilogramos: number,
    @param.path.string('formaPago') c_poformaPagostal: string,
    @param.path.string('cupon') cupon: string,

  ): Promise<any> {


    try {
      let postal = this.postalesRepository.find({where: {d_codigo: c_postal}, fields: ['c_estado']});
      let codEstado = (await postal).map((postal) => postal.c_estado);
      let estado = this.estadosRepository.find({where: {cod_estado: codEstado[0]}, fields: ['zona']});
      let zona = (await estado).map((estado) => estado.zona);
      let cantidad;

      if (kilogramos < 0) {
        if (kilogramos < 9) {
          let prueba = this.preciosRepository.find({where: {zonas: zona[1]}});
          let resp;

          switch (kilogramos) {
            case 1:
              resp = (await prueba).map((prueba) => prueba.kilogramo_1);
              cantidad = resp[0];
              break;

            case 2:
              resp = (await prueba).map((prueba) => prueba.kilogramo_2);
              cantidad = resp[0];
              break;

            case 3:
              resp = (await prueba).map((prueba) => prueba.kilogramo_3);
              cantidad = resp[0];
              break;

            case 4:
              resp = (await prueba).map((prueba) => prueba.kilogramo_4);
              cantidad = resp[0];
              break;

            case 5:
              resp = (await prueba).map((prueba) => prueba.kilogramo_5);
              cantidad = resp[0];
              break;

            case 6:
              resp = (await prueba).map((prueba) => prueba.kilogramo_6);
              cantidad = resp[0];
              break;

            case 7:
              resp = (await prueba).map((prueba) => prueba.kilogramo_7);
              cantidad = resp[0];
              break;

            case 8:
              resp = (await prueba).map((prueba) => prueba.kilogramo_8);
              cantidad = resp[0];
              break;
            default:
              break;
          }

        } else {
          let base = this.preciosRepository.find({where: {zonas: zona[0]}});
          let baseSum = (await base).map((base) => base.kilogramo_8);
          let extra = this.preciosRepository.find({where: {zonas: zona[0]}});
          let extraSum = (await extra).map((extra) => extra.kilogramo_9);

          cantidad = baseSum[0] + (extraSum[0] * (kilogramos - 9));

        }
      } else {
        Sentry.captureMessage("los kilogramos no pueden ser negativos");
      }

      //microservicio B

      let respuesta = {
        precio: cantidad,
        "metodo": c_poformaPagostal,
        'cupon': cupon,
      }

      return respuesta;
    } catch (e) {
      Sentry.captureException(e);
    }

  }







}

Sentry.init({
  dsn: "https://cd258629a0db41138ad171dc36dd0166@o1059778.ingest.sentry.io/6048665",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

