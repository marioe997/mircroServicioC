import {Entity, model, property} from '@loopback/repository';

@model()
export class Zonas extends Entity {
  @property({
    type: 'number',
    required: true,
    id: true
  })
  kilogramo: number;

  @property({
    type: 'number',
    required: true,
  })
  zona1: number;

  @property({
    type: 'number',
    required: true,
  })
  zona2: number;

  @property({
    type: 'number',
    required: true,
  })
  zona3: number;

  @property({
    type: 'number',
    required: true,
  })
  zona4: number;

  @property({
    type: 'number',
    required: true,
  })
  zona5: number;


  constructor(data?: Partial<Zonas>) {
    super(data);
  }
}

export interface ZonasRelations {
  // describe navigational properties here
}

export type ZonasWithRelations = Zonas & ZonasRelations;
