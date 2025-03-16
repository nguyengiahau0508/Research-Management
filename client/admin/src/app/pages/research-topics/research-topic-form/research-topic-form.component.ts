import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResearchTopic, ResearchTopicService } from '../../../services/research-topic.service';
import { Department, DepartmentService } from '../../../services/department.service';
import { ResearchField, ResearchFieldService } from '../../../services/research-field.service';
import { Lecturer, LecturerService } from '../../../services/lecturer.service';
import { Gender, Status } from '../../../services/student.service';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-research-topic-form',
  templateUrl: './research-topic-form.component.html',
  styleUrls: ['./research-topic-form.component.css'],
  imports: [FormsModule, NgxEditorModule]
})
export class ResearchTopicFormComponent implements OnInit, OnDestroy {
  editorNecessity = new Editor();
  editorMainContent = new Editor();
  editorProductsResults = new Editor();
  editorResearchCapacity = new Editor();


  @Output() onCancel = new EventEmitter<void>()
  @Input() researchTopic: ResearchTopic = {
    id: 0, name: '', department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false }, researchField: {
      id: 0,
      name: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
    },
    status: Status.PENDING
    ,
    lecturer: {
      id: '',
      fMName: '',
      lastname: '',
      gender: Gender.MALE,
      phone: '',
      email: '',
      address: '',
      status: '', // Giả sử Status enum đã có
      department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false },
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
    }, isDocumentPrepared: false, necessity: '',
    mainContent: '', productsResults: '', funding: 0, durationMonths: 0, researchCapacity: '',
    createdAt: new Date(), updatedAt: new Date(), isDeleted: false
  };
  departments: Department[] = [];
  researchFields: ResearchField[] = [];
  lecturers: Lecturer[] = [];
  isEditMode = false;

  constructor(
    private researchTopicService: ResearchTopicService,
    private departmentService: DepartmentService,
    private researchFieldService: ResearchFieldService,
    private lecturerService: LecturerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editorNecessity = new Editor();
    this.editorMainContent = new Editor();
    this.editorProductsResults = new Editor();
    this.editorResearchCapacity = new Editor();

    this.loadDepartments();
    this.loadResearchFields();
    this.loadLecturers();
    if (this.researchTopic) {
      this.isEditMode = true;
    }

  }

  ngOnDestroy(): void {
    this.editorNecessity.destroy()
    this.editorMainContent.destroy()
    this.editorProductsResults.destroy()
    this.editorResearchCapacity.destroy()
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data.filter(d => !d.isDeleted),
      error: (err) => console.error('Error loading departments:', err)
    });
  }

  loadResearchFields(): void {
    this.researchFieldService.getResearchFields().subscribe({
      next: (data) => {
        this.researchFields = data.filter(f => !f.isDeleted)
      },
      error: (err) => console.error('Error loading research fields:', err)
    });
  }

  loadLecturers(): void {
    this.lecturerService.getLecturers().subscribe({
      next: (data) => this.lecturers = data.filter(l => !l.isDeleted),
      error: (err) => console.error('Error loading lecturers:', err)
    });
  }

  onSubmit(): void {
    const payload = {
      name: this.researchTopic.name,
      department: this.researchTopic.department,
      researchField: this.researchTopic.researchField,
      lecturer: this.researchTopic.lecturer,
      isDocumentPrepared: this.researchTopic.isDocumentPrepared,
      necessity: this.researchTopic.necessity,
      mainContent: this.researchTopic.mainContent,
      productsResults: this.researchTopic.productsResults,
      funding: this.researchTopic.funding,
      durationMonths: this.researchTopic.durationMonths,
      researchCapacity: this.researchTopic.researchCapacity
    };
    if (this.isEditMode) {
      this.researchTopicService.updateResearchTopic(this.researchTopic.id, payload).subscribe({
        next: () => this.router.navigate(['/research-topics']),
        error: (err) => console.error('Error updating research topic:', err)
      });
    } else {
      this.researchTopicService.createResearchTopic(payload).subscribe({
        next: () => this.router.navigate(['/research-topics']),
        error: (err) => console.error('Error creating research topic:', err)
      });
    }
  }

  cancel(): void {
    this.onCancel.emit()
  }
}
