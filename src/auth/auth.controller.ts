import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from 'src/user/dto/register.dto';
import { SignInDto } from 'src/user/dto/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // @Post("sign-up")
    // signUp(@Body() registerDto: registerDto) {
    //     return this.authService.signIn(registerDto)
    // }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password)
    }
}
