import {Entity, model, property} from '@loopback/repository';

@model()
export class Entry extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  transaction: string;

  @property({
    type: 'string',
    required: true,
  })
  account: string;

  @property({
    type: 'string',
    default: 'CAD',
  })
  currency?: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isCredit: boolean;


  constructor(data?: Partial<Entry>) {
    super(data);
  }
}

export interface EntryRelations {
  // describe navigational properties here
}

export type EntryWithRelations = Entry & EntryRelations;
