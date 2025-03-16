import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Department } from './department.service';
import { TrainingProgram } from './training-program.service';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export interface Student {
  id: string;
  fMName: string;
  lastname: string;
  gender: Gender;
  classId: string;
  phone: string;
  email: string;
  address: string;
  status: Status;
  department: Department;
  traningProgram: TrainingProgram;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `${environment.apiUrl}/students`; // URL backend NestJS

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl, { withCredentials: true });
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  createStudent(student: Partial<Student>): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, {
      withCredentials: true
    });
  }

  updateStudent(student: Partial<Student>): Observable<Student> {
    return this.http.patch<Student>(`${this.apiUrl}/`, student, { withCredentials: true });
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPendingStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/status/pending`, { withCredentials: true });
  }

  approveStudent(id: string): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/${id}/approve`, {}, { withCredentials: true });
  }
}
