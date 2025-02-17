import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { MigrationService } from './migration.service';

@Module({
  providers: [...databaseProviders, MigrationService],
  exports: [...databaseProviders, MigrationService],
})
export class DatabaseModule {}
