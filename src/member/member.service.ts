import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { memberDto } from 'src/dto/member.dto';
import { Member } from './schema/member.schema';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
    constructor(@InjectModel(Member.name) private memberModel: Model<Member>) { }

    async findMemberById(id) {
        return await this.memberModel.findById(id)
    }

    async findAllMembers() {
        return await this.memberModel.find()
    }

    async createMember(memberObject: memberDto) {
        console.log("In MemberService")
        const newMember = new this.memberModel(memberObject)
        return newMember.save();
    }

    async deleteMemberAccount(id: string) {
        const filter = { _id: id }
        const deleted = await this.memberModel.deleteOne(filter)
        return deleted;
    }

    async updateMember(id: string, memberDto: memberDto) {
        const filter = { _id: id };
        return this.memberModel.updateOne(filter, memberDto)
    }
}
