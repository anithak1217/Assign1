import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { HobbiesService } from '../hobbies.service';

@Component({
  selector: 'app-emp',
  template: `
  <p>hi {{data}}</p>
  <li *ngFor="let h of hobbies">
  <b> {{h}} </b>
  </li>
  `,
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public hobbies=[];
  constructor(private _es:HobbiesService){}
  

  ngOnInit() {
    this.hobbies=this._es.gethobbies();
  }

}
