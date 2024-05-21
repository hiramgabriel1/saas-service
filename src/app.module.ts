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
import { AssistantsController } from './assistants/assistants.controller';
import { EmployeesController } from './employees/employees.controller';
import { ManagmentController } from './managment/managment.controller';
import { ProductsClientController } from './products-client/products-client.controller';
import { ProductsController } from './products/products.controller';
import { TablesController } from './tables/tables.controller';
import { AdminService } from './admin/admin.service';
import { AssistantsService } from './assistants/assistants.service';
import { EmployeesService } from './employees/employees.service';
import { ProductsClientService } from './products-client/products-client.service';
import { ProductsService } from './products/products.service';
import { TablesService } from './tables/tables.service';
import { ManagmentService } from './managment/managment.service';

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
  controllers: [
    AssistantsController,
    EmployeesController,
    ManagmentController,
    ProductsClientController,
    ProductsController,
    TablesController,
  ],
  providers: [
    AdminService,
    AssistantsService,
    EmployeesService,
    ProductsClientService,
    ProductsService,
    ManagmentService,
    TablesService,
  ],
})

export class AppModule {}