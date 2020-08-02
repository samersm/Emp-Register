import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: string;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;

  constructor() { }

  ngOnInit(): void {
  }

}
