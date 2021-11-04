import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {MicroServicioBDataSource} from '../datasources';

export interface MicroServicioB {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class MicroServicioBProvider implements Provider<MicroServicioB> {
  constructor(
    // microServicioB must match the name property in the datasource json file
    @inject('datasources.microServicioB')
    protected dataSource: MicroServicioBDataSource = new MicroServicioBDataSource(),
  ) {}

  value(): Promise<MicroServicioB> {
    return getService(this.dataSource);
  }
}
