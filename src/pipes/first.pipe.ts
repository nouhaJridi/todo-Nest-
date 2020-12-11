import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FirstPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
 /* if(metadata.type === 'body'){
    return {
      data : value
    }
  }*/
    return value;
  }
}
