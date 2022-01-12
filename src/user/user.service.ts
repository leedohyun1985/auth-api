import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    //return `This action returns all user`;
    return this.prisma.user.findMany({ where: {} });
  }

  findOne(id: number) {
    //return `This action returns a #${id} user`;
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id: id } });
  }
}
