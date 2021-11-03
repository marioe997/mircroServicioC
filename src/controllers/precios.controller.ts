import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Precios} from '../models';
import {PreciosRepository} from '../repositories';

export class PreciosController {
  constructor(
    @repository(PreciosRepository)
    public preciosRepository : PreciosRepository,
  ) {}

  @post('/precios')
  @response(200, {
    description: 'Precios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Precios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Precios, {
            title: 'NewPrecios',
            
          }),
        },
      },
    })
    precios: Precios,
  ): Promise<Precios> {
    return this.preciosRepository.create(precios);
  }

  @get('/precios/count')
  @response(200, {
    description: 'Precios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Precios) where?: Where<Precios>,
  ): Promise<Count> {
    return this.preciosRepository.count(where);
  }

  @get('/precios')
  @response(200, {
    description: 'Array of Precios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Precios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Precios) filter?: Filter<Precios>,
  ): Promise<Precios[]> {
    return this.preciosRepository.find(filter);
  }

  @patch('/precios')
  @response(200, {
    description: 'Precios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Precios, {partial: true}),
        },
      },
    })
    precios: Precios,
    @param.where(Precios) where?: Where<Precios>,
  ): Promise<Count> {
    return this.preciosRepository.updateAll(precios, where);
  }

  @get('/precios/{id}')
  @response(200, {
    description: 'Precios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Precios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Precios, {exclude: 'where'}) filter?: FilterExcludingWhere<Precios>
  ): Promise<Precios> {
    return this.preciosRepository.findById(id, filter);
  }

  @patch('/precios/{id}')
  @response(204, {
    description: 'Precios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Precios, {partial: true}),
        },
      },
    })
    precios: Precios,
  ): Promise<void> {
    await this.preciosRepository.updateById(id, precios);
  }

  @put('/precios/{id}')
  @response(204, {
    description: 'Precios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() precios: Precios,
  ): Promise<void> {
    await this.preciosRepository.replaceById(id, precios);
  }

  @del('/precios/{id}')
  @response(204, {
    description: 'Precios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.preciosRepository.deleteById(id);
  }
}
