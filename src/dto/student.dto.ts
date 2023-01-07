import { IsBoolean, IsDefined, IsEmail, IsString } from "class-validator";

export class StudentDto{
    @IsString()
    @IsDefined()
    Id:'string'

    @IsString()
    @IsDefined()
    Name:'string'

    @IsString()
    @IsDefined()
    Age:'string'
    
    @IsString()
    @IsEmail()
    @IsDefined()
    email:'string';

    @IsBoolean()
    isActive:boolean;
}

