import { TodoStatusEnum } from './../enums/todoStatus.enum';

import { v4 as uuidv4 } from 'uuid';
export class TodoModel{
    id : string;
    name:string;
    description:string;
    createdAt: Date;
    status: TodoStatusEnum;

    constructor( 
    name ='' ,
    description='',
    createdAt = new Date() , 
    status = TodoStatusEnum.actif)
    {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.status=status;
    }

    
}