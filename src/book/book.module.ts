import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookClass, BookSchema } from './schema/schema';

@Module({
  imports : [MongooseModule.forFeature([{name: BookClass.name,schema: BookSchema}]),
],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
