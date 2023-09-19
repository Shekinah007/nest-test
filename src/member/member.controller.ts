import { Param, Get } from '@nestjs/common';
import { Controller, Post, Body, UsePipes, ValidationPipe, Put, Patch, Delete } from '@nestjs/common';
import { MemberService } from './member.service';
import { memberDto } from '../dto/member.dto';

@Controller('member')
export class MemberController {
    constructor(private memberService: MemberService) { }

    @Get()
    getAllMembers() {
        return this.memberService.findAllMembers();
    }

    @Get(":id")
    findMemberById(@Param("id") id: string) {
        return this.memberService.findMemberById(id);
    }

    @Post("createMember")
    @UsePipes(ValidationPipe)
    createMember(@Body() memberObject: memberDto) {
        console.log("In member controller", memberObject);
        return this.memberService.createMember(memberObject)
    }

    @Delete(":id")
    @UsePipes(ValidationPipe)
    deleteMember(@Param("id") id: string) {
        return this.memberService.deleteMemberAccount(id)
    }

    @Patch(":id")
    @UsePipes(ValidationPipe)
    updateMember(@Param("id") id: string, @Body() memberObject: memberDto) {
        return this.memberService.updateMember(id, memberObject)
    }
}
