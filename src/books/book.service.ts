import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
    sayUserName(): string {
        return "My Name is THE ONE"
    }
}

