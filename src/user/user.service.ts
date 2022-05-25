import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO } from 'src/auth/login.dto';
import { Payload } from 'src/types/payload';
import { User } from './model/user';
import { RegisterDTO } from './register.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<User>,
    ) {}

    async create(RegisterDTO: RegisterDTO) {
        const { username } = RegisterDTO; // the equivalent of const username == RegisterDTO.username
        const user = await this.userModel.findOne({ username });
        if (user) {
            throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(RegisterDTO);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }

    async findByPayload(payload: Payload) {
        const { username } = payload;
        return await this.userModel.findOne({ username });
    }

    async findByLogin(UserDTO: LoginDTO) {
        const { username, password } = UserDTO;
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new NotFoundException('User does not exists');
        }
        if (await bcrypt.compare(password, user.password)) {
            return this.sanitizeUser(user)
        } else {
            throw new UnauthorizedException('Wrong password');
        }
    }

    async getUserById(userId: string) {
        return this.userModel.findOne({ userId })
    }

    async getUsers() {
        return this.userModel.find({})
    }

    async updateUser(userId: string, updateUserDTO: UpdateUserDto) {
        return this.userModel.findOneAndUpdate({ userId }, updateUserDTO); // have not encrypt the password yet
    }

    sanitizeUser(user: User) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
}
