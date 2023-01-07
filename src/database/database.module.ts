import { Module } from '@nestjs/common';
import { Student } from './entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'Lenovo',
      password: 't.s.i.8841',
      database: 'tamil',
      entities: [Student],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      }
    }),
  ],
})
export class DatabaseModule {}