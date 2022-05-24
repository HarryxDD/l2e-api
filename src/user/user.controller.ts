import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./model/user";
import { UserService } from "./user.service";

@Controller('user')
export class UsersController {
    constructor(private userService: UserService) {}

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Patch(':id') 
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        // Have not encrypt the password yet
        return this.userService.updateUser(id, updateUserDto);
    }
}