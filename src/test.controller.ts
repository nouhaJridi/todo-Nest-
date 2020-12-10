import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('test')
export class TestController {


    @Get('')
    get(): string{
        return'get';
    }

    @Post('')
    post(): string{
        return'post';
    }

    @Delete('')
    delete(): string{
        return'delete';
    }

    @Put('')
    put(): string{
        return'put';
    }

    @Patch('')
    patch(): string{
        return'patch';
    }

}