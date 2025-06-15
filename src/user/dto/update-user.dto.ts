import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly username?: string;

  @IsString()
  @IsOptional() 
  @MinLength(6)
  readonly password?: string;

  @IsString()
  @IsOptional() 
  readonly role?: string;
}