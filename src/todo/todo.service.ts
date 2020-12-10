import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from './models/todo.model';

@Injectable()
export class TodoService {
    todoList: TodoModel[] = []  ;
    constructor(){
        const todoOne = new TodoModel('angular framework');
        const todoTwo = new TodoModel('Ds angular',);
        const todoThree = new TodoModel('Exam angular');
        this.todoList =[ todoOne, todoTwo, todoThree  ]
    }
    getListTodo() : TodoModel[] {
        return this.todoList ;
    }
    getToDoById(id : string){
    const todo = this.todoList.find( todo => todo.id === id)
    if (todo) return todo ;
    throw new NotFoundException(`le todo d' id${id}not found`);
    }
    addTodo(newTodo : CreateTodoDto){
        const {name, description} = newTodo ;
        const todo = new TodoModel(name , description);
        this.todoList.push(todo);
        return todo ;
    }
    deleteTodo(id :string){
        const todo = this.todoList.find(todo => todo.id === id);
        if (todo) {
        this.todoList.splice(this.todoList.indexOf(todo),1);
        return this.todoList ;
        }
        throw new NotFoundException(`le todo d' id${id}doesn't exist`);
    }
    putTodo(newTodo : UpdateTodoDto, id : string){
        const {name, description , status} = newTodo ;
        const todo = this.todoList.find(todo => todo.id === id);
        todo.name = name ? name : todo.name;
        todo.description = description ? description : todo.description;
        todo.status=status ? status: todo.status;
        return todo;
    }

}
