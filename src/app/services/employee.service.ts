import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployees(): Observable<Employee[]> {
    const employees = of([{ id: 1, firstName: "Jouse", lastName: "t", image: "test", email: "email@gmail.com", department: "Twitter HQ" }])
    return employees;
  }
}
