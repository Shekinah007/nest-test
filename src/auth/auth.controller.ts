import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from 'src/user/dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("sign-up")
    signUp(@Body() registerDto: registerDto) {
        return this.authService.signUp(registerDto)
    }
}
