import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class postales extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  _id?: number;

  @property({
    type: 'number',
  })
  d_codigo: number;

  @property({
    type: 'string',
  })
  d_asenta: string;

  @property({
    type: 'string',
  })
  d_tipo_asenta: string;

  @property({
    type: 'string',
  })
  D_mnpio: string;

  @property({
    type: 'string',
  })
  d_estado: string;

  @property({
    type: 'string',
  })
  d_ciudad: string;

  @property({
    type: 'number',
  })
  d_CP: number;

  @property({
    type: 'number',
  })
  c_estado: number;

  @property({
    type: 'number',
  })
  c_oficina: number;

  @property({
    type: 'string',
  })
  c_CP: string;

  @property({
    type: 'number',
  })
  c_tipo_asenta: number;

  @property({
    type: 'number',
  })
  c_mnpio: number;

  @property({
    type: 'number',
  })
  id_asenta_cpcons: number;

  @property({
    type: 'string',
  })
  d_zona: string;

  @property({
    type: 'string',
  })
  c_cve_ciudad: string;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<postales>) {
    super(data);
  }
}

export interface PostalesRelations {
  // describe navigational properties here
}

export type PostalesWithRelations = postales & PostalesRelations;
