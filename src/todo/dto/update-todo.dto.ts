import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { TodoStatusEnum } from './../enums/todoStatus.enum';
export class UpdateTodoDto{

    @IsNotEmpty({
        message: "Vous devez specifier un nom"
    })
    @MinLength(3 , {
        message:"La taille de votre $property $value est courte,la taille minimale de $property est $constraint1"
    })
    @MaxLength(3)
    @IsOptional()
    name:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @IsOptional()
    description: string;

    @IsIn([
        TodoStatusEnum.actif,
        TodoStatusEnum.done,
        TodoStatusEnum.waiting,
    ], {
        message: `Le status est invalide`
    })
    @IsOptional()
    status: TodoStatusEnum;
}