import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { EmployeesModule } from './employees/employees.module';
import { TablesModule } from './tables/tables.module';
import { AdminModule } from './admin/admin.module';
import { ManagmentModule } from './managment/managment.module';
import { ProductsClientModule } from './products-client/products-client.module';
import { ProductsModule } from './products/products.module';
import { AssistantsModule } from './assistants/assistants.module';
import config from './configuration/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      load: [config],
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 12,
      },
    ]),
    EmployeesModule,
    TablesModule,
    AdminModule,
    ManagmentModule,
    ProductsClientModule,
    ProductsModule,
    AssistantsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}