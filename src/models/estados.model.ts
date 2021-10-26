import {Entity, model, property} from '@loopback/repository';

@model()
export class Estados extends Entity {
  @property({
    type: 'number',
    required: true,
    id: true
  })
  cod_estado?: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  zona: string;


  constructor(data?: Partial<Estados>) {
    super(data);
  }
}

export interface EstadosRelations {
  // describe navigational properties here
}

export type EstadosWithRelations = Estados & EstadosRelations;
