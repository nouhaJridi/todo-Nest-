import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoModel } from "./models/todo.model";
import { FirstPipe } from 'src/pipes/first.pipe';

@Controller('todo')
export class TodoController{

    
    constructor(private todoService : TodoService ){}

    @Get('')
    getListTodo() : TodoModel[] {
        return this.todoService.getListTodo() ;
    }

    @Get(':id')
    getTodoById(@Param('id' ) id : string) : TodoModel {
        return this.todoService.getToDoById(id);
    }

    @Post('')
    addTodo(@Body(FirstPipe) newTodo: CreateTodoDto) : TodoModel {
        return this.todoService.addTodo(newTodo);
    }

    @Delete(':id')
    deleteTodo( @Param('id') id ) : TodoModel[] {
        return this.todoService.deleteTodo(id);
    }

    @Put(':id')
    putTodo(@Body() newTodo: UpdateTodoDto ,
    @Param('id') id : string){
        return this.todoService.putTodo(newTodo,id);   
    }
}