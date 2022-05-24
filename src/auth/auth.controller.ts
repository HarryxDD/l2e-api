import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDTO } from './login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ) {}

    @Post('register')
    async register(@Body() RegisterDTO: RegisterDTO) {
        const user = await this.userService.create(RegisterDTO);
        const payload = {
            username: user.username,
        };

        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

    @Post('login')
    async login(@Body() UserDTO: LoginDTO) {
        const user = await this.userService.findByLogin(UserDTO);
        const payload = {
            username: user.username,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

    @UseGuards(JwtAuthGuard)
    @Get("/onlyauth")
 
    async hiddenInformation(){
        return "Test JWT Guards";
    }
  
    @Get("/anyone")

    async publicInformation(){
        return  "Anyone can see this";
    }
}
