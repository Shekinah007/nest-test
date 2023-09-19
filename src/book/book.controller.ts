import { Controller, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from 'src/dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Post("addBook")
    addBook(@Body() bookDto: BookDto) {
        console.log("In Book Controller");
        return this.bookService.addBook(bookDto)
    }
}
