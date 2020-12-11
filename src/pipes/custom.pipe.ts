import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
 if(metadata.type === 'body'){
    if(!value.skills){
        new BadRequestException;
    }
    let text = '';
    for (let i = 0; i < value.skills.length; i++) {
      text += value.skills[i].toUpperCase() + "-";
    }
    console.log(text);
    return text ;
  
  }
    return value;
  }
}