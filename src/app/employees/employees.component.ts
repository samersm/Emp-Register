import { EmployeeService } from './../services/employee.service';
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
  message: string;

  constructor(public employeeservice: EmployeeService) { }

  CreateRecord() {
    let Record = {};
    Record['Name'] = this.employeeName;
    Record['Age'] = this.employeeAge;
    Record['Address'] = this.employeeAddress;

    this.employeeservice.create_Newemployee(Record).then(res => {
      this.employeeName = '';
      this.employeeAge = undefined;
      this.employeeAddress = '';
      console.log(res);
      this.message = 'Registered a New Employee';
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
