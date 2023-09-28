import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './schemas/car.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }

  async create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    return newCar.save();
    return 'This action adds a new car';
  }

  async findAll() {
    return this.carModel.find();
    // `This action returns all car`;
  }

  async findOne(id) {
    return await this.carModel.findById(id)
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
