import { Injectable } from '@nestjs/common';
import { BookDto } from '../dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from 'src/schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    async addBook(book: BookDto) {
        const newBook = new this.bookModel(book);
        console.log("Created new book successfully! ", newBook);
        return newBook.save();
    }
}
