import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearchTopic, ResearchTopicService } from '../../services/research-topic.service';
import { CurrencyPipe } from '@angular/common';
import { ResearchTopicFormComponent } from './research-topic-form/research-topic-form.component';

@Component({
  selector: 'app-research-topics',
  templateUrl: './research-topics.component.html',
  styleUrls: ['./research-topics.component.css'],
  imports: [
    CurrencyPipe,
    ResearchTopicFormComponent
  ]
})
export class ResearchTopicsComponent implements OnInit {
  researchTopics: ResearchTopic[] = [];
  isFormOpenning: boolean = false
  selectedResearchTopic: ResearchTopic | null = null

  constructor(private researchTopicService: ResearchTopicService, private router: Router) { }

  ngOnInit(): void {
    this.loadResearchTopics();
  }

  loadResearchTopics(): void {
    this.researchTopicService.getResearchTopics().subscribe({
      next: (data) => {
        this.researchTopics = data.filter(t => !t.isDeleted)
      },
      error: (err) => console.error('Error loading research topics:', err)
    });
  }

  addResearchTopic(): void {
    this.isFormOpenning = true
  }

  editResearchTopic(researchTopic: ResearchTopic): void {
    this.isFormOpenning = true
    this.selectedResearchTopic = researchTopic
  }

  approvedResearchTopic(id: number): void {
    this.researchTopicService.approvedFacultyResourseTopic(id).subscribe({
      next: () => {
        this.loadResearchTopics()
      },
      error: (err) => console.error('Error approving research topic:', err)
    });
  }


  onCloseForm() {
    this.isFormOpenning = false
    this.selectedResearchTopic = null
  }

  deleteResearchTopic(id: number): void {
    if (confirm('Are you sure you want to delete this research topic?')) {
      this.researchTopicService.deleteResearchTopic(id).subscribe({
        next: () => this.loadResearchTopics(),
        error: (err) => console.error('Error deleting research topic:', err)
      });
    }
  }
}
