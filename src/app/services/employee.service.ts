import { Injectable } from '@angular/core';
import { Employee, EmployeeData } from '../interfaces/employee';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://dummyjson.com/users?limit=12'

  getEmployees(): Observable<EmployeeData> {
    return this.http.get<EmployeeData>(this.apiUrl)
  }
}
