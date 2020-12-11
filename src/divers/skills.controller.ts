import { Body, Controller, Post } from "@nestjs/common";
import { CustomPipe } from "src/pipes/custom.pipe";

@Controller('skills')
export class SkillsController{

    
    constructor(){}


    @Post('')
    checkPipe(@Body(CustomPipe) skills: string[])  {
        
        
    }

  
}