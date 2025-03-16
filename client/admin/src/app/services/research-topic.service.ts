import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Department } from './department.service';
import { Lecturer } from './lecturer.service';
import { ResearchField } from './research-field.service';
import { Status } from './student.service';

export interface ResearchTopic {
  id: number;
  name: string;
  department: Department;
  researchField: ResearchField;
  lecturer: Lecturer;
  isDocumentPrepared: boolean;
  necessity: string;
  mainContent: string;
  productsResults: string;
  funding: number;
  durationMonths: number;
  researchCapacity: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  researchMembers?: { id: number; user: { id: number; role: string } }[];
  status: Status
}

@Injectable({
  providedIn: 'root'
})
export class ResearchTopicService {
  private apiUrl = `${environment.apiUrl}/research-topics`; // URL backend NestJS

  constructor(private http: HttpClient) { }

  getResearchTopics(): Observable<ResearchTopic[]> {
    return this.http.get<ResearchTopic[]>(this.apiUrl, { withCredentials: true });
  }

  getResearchTopicById(id: number): Observable<ResearchTopic> {
    return this.http.get<ResearchTopic>(`${this.apiUrl}/${id}`);
  }

  createResearchTopic(topic: Partial<ResearchTopic>): Observable<ResearchTopic> {
    return this.http.post<ResearchTopic>(this.apiUrl, topic);
  }

  updateResearchTopic(id: number, topic: Partial<ResearchTopic>): Observable<ResearchTopic> {
    return this.http.put<ResearchTopic>(`${this.apiUrl}/${id}`, topic);
  }

  deleteResearchTopic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  approvedFacultyResourseTopic(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/approved/${id}`, {}, { withCredentials: true })
  }
}
