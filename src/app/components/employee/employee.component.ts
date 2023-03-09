import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input () employee: Employee | undefined
}
