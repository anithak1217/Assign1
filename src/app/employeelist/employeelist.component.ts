import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: any[] = [
    {
    code: 'emp101', name: 'Ram', gender: 'Male',
    annualSalary: 5500, dateOfBirth: '25/6/1988',hobby:'dancing'
    },
    {
    code: 'emp102', name: 'reddy', gender: 'Male',
    annualSalary: 5700.95, dateOfBirth: '9/6/1982',hobby:'internet'
    },
    {
    code: 'emp103', name: 'Baby', gender: 'Female',
    annualSalary: 5900, dateOfBirth: '12/8/1979',hobby:'singing'
    },
    {
    code: 'emp104', name: 'Eshu', gender: 'Female',
    annualSalary: 6500.826, dateOfBirth: '14/10/1980',hobby:'dancing'
    },
    ];

    
      
  constructor() { }

  ngOnInit() {
  }

}
