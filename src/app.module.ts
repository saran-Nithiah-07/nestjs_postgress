import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Nethraoreo@123',
    database: 'kgf',
    entities: [User],
    synchronize: true,
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
