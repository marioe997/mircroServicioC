import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Zonas, ZonasRelations} from '../models';

export class ZonasRepository extends DefaultCrudRepository<
  Zonas,
  typeof Zonas.prototype.kilogramo,
  ZonasRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Zonas, dataSource);
  }
}
