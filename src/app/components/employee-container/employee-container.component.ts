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
      this.employees = employees.users.map((u: Employee) => {
        return { firstName: u.firstName, lastName: u.lastName, email: u.email, image: u.image, company: u.company, id: u.id }
      });
    })
  }


}
