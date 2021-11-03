import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Precios, PreciosRelations} from '../models';

export class PreciosRepository extends DefaultCrudRepository<
  Precios,
  typeof Precios.prototype.zonas,
  PreciosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Precios, dataSource);
  }
}
