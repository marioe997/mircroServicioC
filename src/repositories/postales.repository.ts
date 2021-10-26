import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {postales, PostalesRelations} from '../models';

export class PostalesRepository extends DefaultCrudRepository<
  postales,
  typeof postales.prototype._id,
  PostalesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(postales, dataSource);
  }
}
