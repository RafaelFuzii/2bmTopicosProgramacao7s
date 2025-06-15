import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from 'src/auth/role.enum';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsString()
    readonly role: Role;
    
}