import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, hobbies: string): any {
    if(hobbies === 'dancing'){
    return "good hobbie is :"+value;
    }
    else
    {
    return "bad hobbie is: "+value;
    }
    }
    

}
