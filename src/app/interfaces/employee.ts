export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: Company;
}

export interface EmployeeData {
  limit: number;
  skip: number;
  total: number;
  users: Employee[];
}

interface Company {
  title: string;
}
