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
import { CajasModule } from './cajas/cajas.module';
import { CajasService } from './cajas/cajas.service';
import { CajasController } from './cajas/cajas.controller';
import { RequestsModule } from './requests/requests.module';
import { TasksModule } from './tasks/tasks.module';
import { ReportsModule } from './reports/reports.module';
import { ProvidersModule } from './providers/providers.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { RequestsController } from './requests/requests.controller';
import { ReportsController } from './reports/reports.controller';
import { ProvidersController } from './providers/providers.controller';
import { ProvidersService } from './providers/providers.service';
import { RequestsService } from './requests/requests.service';
import { ReportsService } from './reports/reports.service';

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
    CajasModule,
    RequestsModule,
    TasksModule,
    ReportsModule,
    ProvidersModule,
    InventariosModule,
  ],
  controllers: [
    AssistantsController,
    EmployeesController,
    ManagmentController,
    ProductsClientController,
    ProductsController,
    TablesController,
    CajasController,
    TasksController,
    RequestsController,
    ReportsController,
    ProvidersController
  ],
  providers: [
    AdminService,
    AssistantsService,
    EmployeesService,
    ProductsClientService,
    ProductsService,
    ManagmentService,
    TablesService,
    CajasService,
    TasksService,
    ProvidersService,
    RequestsService,
    ReportsService,
  ],
})

export class AppModule { }