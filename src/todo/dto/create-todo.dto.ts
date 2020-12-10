import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {

    @IsNotEmpty({
        message: "Vous devez specifier un nom"
    })
    @MinLength(3 , {
        message:"La taille de votre $property $value est courte,la taille minimale de $property est $constraint1"
    })
    @MaxLength(3)
    name:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;
}