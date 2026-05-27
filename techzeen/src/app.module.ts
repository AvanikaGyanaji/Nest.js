import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { StudentsModule } from './students/students.module';
import { CustomerModule } from './customer/customer.module';
import { ExxceptionController } from './exxception/exxception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { EvController } from './ev/ev.controller';
import { EvService } from './ev/ev.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, StudentsModule, CustomerModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController, UserController, ProductsController, ExxceptionController, DatabaseController, EvController],
  providers: [AppService, ProductsService, DatabaseService, EvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
