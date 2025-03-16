import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from './student.service'; // Giả sử Gender enum đã có
import { Department } from './department.service';
import { environment } from '../../../environments/environment';

export interface Lecturer {
  id: string;
  fMName: string;
  lastname: string;
  gender: Gender;
  phone: string;
  email: string;
  address: string;
  status: string; // Giả sử Status enum đã có
  department: Department;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private apiUrl = environment.apiUrl + '/lecturers';

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.apiUrl);
  }
}
