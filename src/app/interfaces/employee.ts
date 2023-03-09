export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  department: string;
}

export interface EmployeeData {
  limit: number;
  skip: number;
  total: number;
  users: Employee[];
}
