import { DataSource } from 'typeorm';
import { FreezerModel } from './models/freezers.model';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'test',
        entities: [
           FreezerModel,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];