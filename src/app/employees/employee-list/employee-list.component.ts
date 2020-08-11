import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './../../services/employee.model';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];
  constructor(public service: EmployeeService, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      });
    });
  }

  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
}
