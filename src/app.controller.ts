import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './database/entity/student.entity';
import { StudentDto } from './dto/student.dto';


@Controller('students')
export class AppController {
  constructor(private studentsService: AppService) {}

  @Get()
  async showAllUsers() {
    const users =  await this.studentsService.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Post()
  async createUsers(@Body() data:StudentDto ) {
     const user = await this.studentsService.createStudent(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get('/:Id')
  async readUser(@Param() id:StudentDto){
    const data =  await this.studentsService.getById(id.Id);
    return data
  }

  @Patch(':id')
  async uppdateUser(@Param('id')id:string, @Body() data:StudentDto):Promise<Student> {
    return await this.studentsService.updateStudent(id,data);
    }

  @Delete(':id')
  async deleteUser(@Param('id') id:string) {
    await this.studentsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}