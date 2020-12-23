import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
 
// Create array
hobbies = [
  'dancing',
  'singing',
  'internet'
  ];
  constructor() { }
  // Create simple angular service method
  servicemethod(){
  return 'Its just a simple service method';
  }
  
}
