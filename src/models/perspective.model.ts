import {Entity, model, property} from '@loopback/repository';

@model()
export class Perspective extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  company: string;


  constructor(data?: Partial<Perspective>) {
    super(data);
  }
}

export interface PerspectiveRelations {
  // describe navigational properties here
}

export type PerspectiveWithRelations = Perspective & PerspectiveRelations;
