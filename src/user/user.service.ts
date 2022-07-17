import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    await this.checkUserExists(email);

    await this.saveUser(name, email, password);
  }

  saveUser(name: string, email: string, password: string) {
    // TODO: DB 연동 후 구현
    return;
  }

  checkUserExists(email: string) {
    // TODO: DB 연동 후 구현
    return false;
  }

  login(loginUserDto: LoginUserDto) {
    // TODO:
    // 1. email, password를 가진 유저가 있는지 확인하고 없으면 에러
    // 2. 있다면 JWT 발급
    throw new Error('Method not implemented.');
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
