import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookClass, BookDocument } from './schema/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookService {

  constructor(@InjectModel(BookClass.name) private BookModel : Model<BookDocument> ){
    //its same as repository concept, where User was coming from user.entity.ts(a DTO for DB)
//constructor(@InjectRepository(User) private readonly userepo : Repository<User>){

    console.log("this is Book object name coming from bookclass: ",BookClass.name)

  }

  create(createBookDto: CreateBookDto):Promise<BookClass> {
   
    //creating a new instache of BookModel which creates a Js object that represents a Book
    const model = new this.BookModel;

    model.title = createBookDto.title;
    model.author = createBookDto.author;
    model.publish = createBookDto.publish;

    //mongoose translating the incoming object of DTO into mongo document
    return model.save();
  }

  findAll():Promise<BookClass[]> {
    return this.BookModel.find().exec();
  }

  findOne(id: string):Promise<BookClass> {
    return this.BookModel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.BookModel.updateOne({
      _id : id
    },
    {
    title : updateBookDto.title,
    author: updateBookDto.author,
    publish: updateBookDto.publish
  }).exec();
  }

  remove(id: string) {
    return this.BookModel.deleteOne({
      _id : id
    }).exec()
  }
}
