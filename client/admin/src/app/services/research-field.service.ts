import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ResearchField {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ResearchFieldService {
  private apiUrl = environment.apiUrl + '/research-fields';

  constructor(private http: HttpClient) { }

  getResearchFields(): Observable<ResearchField[]> {
    return this.http.get<ResearchField[]>(this.apiUrl);
  }
}
