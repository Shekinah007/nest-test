import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from 'src/dto/create-user.dto';
import { createCatDto } from 'src/dto/create-cat.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUserName(): string {
        return this.userService.getUserName()
    }

    @Post("create")
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: createUserDto) {
        return this.userService.create(createUserDto)
        return "User Created Succenfully!";
    }

    @Post("createCat")
    createCatUser(@Body() createCatDto: createCatDto) {
        console.log("In the controller");
        return this.userService.createCat(createCatDto)
    }
}
