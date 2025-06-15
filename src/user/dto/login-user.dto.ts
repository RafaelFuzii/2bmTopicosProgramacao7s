import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDTO {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
    
}