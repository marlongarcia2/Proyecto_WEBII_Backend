import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

// DTO para POST /auth/register.
// Si quieres pedir más datos al registrarse, agrégalos aquí y en AuthService.register().
export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(2)
  name!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  // Datos adicionales para el contexto de la barbería.
  @IsString()
  phone!: string;

  @IsDateString()
  birthDate!: string;

  @IsOptional()
  @IsString()
  preferredBarber?: string;
}