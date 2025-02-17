import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { DatabaseModule } from './app/database/database.module';
import { MigrationService } from './app/database/migration.service';

@Module({
  imports: [UsersModule, DatabaseModule],
})
export class AppModule {
  constructor(private migrationService: MigrationService) {
    migrationService.up();
  }
}
