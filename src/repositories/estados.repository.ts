import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Estados, EstadosRelations} from '../models';

export class EstadosRepository extends DefaultCrudRepository<
  Estados,
  typeof Estados.prototype.cod_estado,
  EstadosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Estados, dataSource);
  }
}
