import { Component, OnInit } from '@angular/core';
import { Employee } from './vms';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-employees-open',
  templateUrl: './employees-open.component.html',
  styleUrls: ['./employees-open.component.css']
})
export class EmployeesOpenComponent implements OnInit {

  private employeesData: Employee[];
private selectedEmployee : Employee;

  constructor(private m: DataManagerService, private router : Router) { 
    this.employeesData = [];
  }

  //the sort function for last name
  private sortemps = function (a, b) {
    if (a.LastName < b.LastName) {
      return -1;
    }
    if (a.LastName > b.LastName) {
      return 1;
    }
    // If you also want to sort on another property,
    // add another code block that's similar to
    // the one above, and use the other property's name
    return 0;
  }
  
  ngOnInit() {
    this.m.employeeGetAllRaw().subscribe(data => this.employeesData  = data.sort(this.sortemps));
  }

}
