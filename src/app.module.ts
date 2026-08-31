import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './config/env.validation';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ConfigModule carga el archivo .env y valida sus valores al iniciar la aplicación.
    ConfigModule.forRoot({
      // isGlobal permite usar ConfigService en cualquier módulo sin volver a importar ConfigModule.
      isGlobal: true,

      // cache evita releer las variables muchas veces durante la ejecución.
      cache: true,

      // Si falta una variable obligatoria o tiene formato inválido, NestJS no arranca.
      validationSchema: envValidationSchema,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}