import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './database/entity/student.entity';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Student) private userRepository:Repository<Student>){

  }

  async getAll():Promise<Student[]>{
    return await this.userRepository.find() 
  }

  async getById(id):Promise<Student>{
    try{
      return await this.userRepository.findOneOrFail({
        where:{Id:id},
      })
      //return user
    }catch(error){
      throw error
    }
  }

    async createStudent(name:Student):Promise<Student>{
      return await this.userRepository.save(name)
      //return newStudent
    }

    async updateStudent(id:string,data:StudentDto):Promise<Student>{
      let found_id=await this.userRepository.findOneBy({Id:id,})
      if(!found_id){
        throw new HttpException(`Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,)
      }

      found_id={
       ...found_id,...data,
       //updated_at:new Date()
      }
      return await this.userRepository.save(found_id)
      //return await this.userRepository.findOne({ id });
    }

    async destroy(id:string) {
      await this.userRepository.delete( id );
      return { deleted: true };
    }
}
