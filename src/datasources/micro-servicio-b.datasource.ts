import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'microServicioB',
  connector: 'rest',
  baseURL: 'https://microservicio-promociones.herokuapp.com/Coupon/',
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MicroServicioBDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'microServicioB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.microServicioB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
