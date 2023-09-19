import { Injectable } from '@nestjs/common';
// Import { InjectModel } from "@nestjs/mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCatDto } from 'src/dto/create-cat.dto';
import { createUserDto } from 'src/dto/create-user.dto';
import { User, Cat } from 'src/schema/user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Cat.name) private readonly catModel: Model<Cat>) { }

    getUserName(): string {
        return "I am Inevitable";
    }

    async create(CreateUserDto: createUserDto) {
        const createdUser = new this.userModel(CreateUserDto);
        console.log("User created successfully: " + createdUser)
        return createdUser.save();
    }

    async createCat(CreateCatDto: createCatDto) {
        console.log("Hello, Cat!");
        const createdCat = new this.catModel(CreateCatDto);
        console.log("Cat created successfully: " + createdCat);
        return createdCat.save();
    }



    // async findAll(): Promise<Cat[]> {
    //     return this.catModel.find().exec();
    //   }

    // async findAll(): Promise<User> {
    //     return this.userModel.find().exec();
    // }
}
