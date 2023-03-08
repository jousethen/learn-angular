import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent {
  constructor(private employeeService: EmployeeService) { }
  employees: Employee[] = []

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      console.log(this.employees)
    })
  }


}
