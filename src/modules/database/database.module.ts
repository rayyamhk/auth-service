import { DynamicModule, Module } from '@nestjs/common';
import { TABLE_NAME } from '../../constants';
import { DatabaseService } from './database.service';

@Module({})
export class DatabaseModule {
  static register(tableName: string): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: TABLE_NAME,
          useValue: tableName,
        },
        DatabaseService,
      ],
      exports: [DatabaseService],
    };
  }
}