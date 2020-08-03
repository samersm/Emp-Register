import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: any;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message: string;

  constructor(public employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.get_Allemployee().subscribe(data => {
      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address']
        };
      })
      console.log(this.employee);
    });
  }

  CreateRecord() {
    let Record = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['address'] = this.employeeAddress;

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

  EditRecord(Record) {
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editaddress = Record.address;
  }

  Updaterecord(recorddata) {
    let record = {};
    record['name'] = recorddata.editname;
    record['age'] = recorddata.editage;
    record['address'] = recorddata.editaddress;
    this.employeeservice.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id) {
    this.employeeservice.delete_employee(record_id);
  }

}
