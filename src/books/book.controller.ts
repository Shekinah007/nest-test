import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {
    constructor(private readonly bookService: BookService) {}
    @Get("")
    sayName(): string {
        return this.bookService.sayUserName()
    }

    // @Get("/:id")
    // getBook(@Param('id', ParseIntPipe) id ) {
    //     return "This is the id " + id
    // }

    @Get("/title")
    getTitle(@Param('title') title: string) {
        return `This is the ${title}`
    }
}