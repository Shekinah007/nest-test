import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUserName(): string {
        return "I am Shekinah Nosakhare Shalom-Hope."
    }
}
