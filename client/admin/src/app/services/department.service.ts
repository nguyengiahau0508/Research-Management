import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Department {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  traningPrograms?: any[]; // Chỉ định kiểu cụ thể nếu cần
  students?: any[];
  lecturers?: any[];
  researchTopics?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = environment.apiUrl + '/departments'; // URL backend NestJS

  constructor(private http: HttpClient) { }

  // Lấy danh sách departments
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  // Lấy department theo ID
  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  // Thêm mới department
  createDepartment(department: Partial<Department>): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  // Cập nhật department
  updateDepartment(department: Partial<Department>): Observable<Department> {
    return this.http.patch<Department>(`${this.apiUrl}`, department);
  }

  // Xóa department (soft delete)
  deleteDepartment(department: Department): Observable<Department> {
    department.isDeleted = true
    return this.http.patch<Department>(`${this.apiUrl}`, department);
  }
}
