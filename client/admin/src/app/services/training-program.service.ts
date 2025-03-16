import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Department } from './department.service';

export interface TrainingProgram {
  id: number;
  name: string;
  department: Department; // Quan hệ với Department
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramService {
  private apiUrl = `${environment.apiUrl}/traning-programs`; // URL backend NestJS

  constructor(private http: HttpClient) { }

  getTrainingPrograms(): Observable<TrainingProgram[]> {
    return this.http.get<TrainingProgram[]>(this.apiUrl);
  }

  getTrainingProgramById(id: number): Observable<TrainingProgram> {
    return this.http.get<TrainingProgram>(`${this.apiUrl}/${id}`);
  }

  getTrainingProgramByDepartmentId(departmentId: number): Observable<TrainingProgram[]> {
    return this.http.get<TrainingProgram[]>(`${this.apiUrl}/find-all-by-department/${departmentId}`);
  }

  createTrainingProgram(program: Partial<TrainingProgram>): Observable<TrainingProgram> {
    return this.http.post<TrainingProgram>(this.apiUrl, program);
  }

  updateTrainingProgram(id: number, program: Partial<TrainingProgram>): Observable<TrainingProgram> {
    return this.http.put<TrainingProgram>(`${this.apiUrl}/${id}`, program);
  }

  deleteTrainingProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
