import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  gethobbies(){
    return[
    'dancing',
    'singing',
    'internet'
    ];
  }
  
}
