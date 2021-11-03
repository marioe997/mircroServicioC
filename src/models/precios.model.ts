import {Entity, model, property} from '@loopback/repository';

@model()
export class Precios extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  kilogramo_1: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_2: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_3: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_4: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_5: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_6: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_7: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_8: number;

  @property({
    type: 'number',
    required: true,
  })
  kilogramo_9: number;


  @property({
    type: 'string',
    required: true,
    id: true
  })
  zonas: string;


  constructor(data?: Partial<Precios>) {
    super(data);
  }
}

export interface PreciosRelations {
  // describe navigational properties here
}

export type PreciosWithRelations = Precios & PreciosRelations;
