
import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { TrainingProgram, TrainingProgramService } from '../../services/training-program.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Department } from '../../services/department.service';

@Component({
  selector: 'app-training-programs',
  imports: [DatePipe],
  templateUrl: './training-programs.component.html',
  styleUrl: './training-programs.component.css'
})
export class TrainingProgramsComponent implements OnChanges {
  trainingPrograms: TrainingProgram[] = [];

  @Input({ required: true }) department!: Department;
  @Output() add = new EventEmitter<void>();

  constructor(private trainingProgramService: TrainingProgramService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['department'] && changes['department'].currentValue) {
      this.loadTrainingPrograms();
    }
  }

  loadTrainingPrograms(): void {
    if (!this.department || !this.department.id) {
      return;
    }

    this.trainingProgramService.getTrainingProgramByDepartmentId(this.department.id).subscribe({
      next: (data) => {
        this.trainingPrograms = data.filter(p => !p.isDeleted);
      },
      error: (err) => {
        console.error('Error loading training programs:', err);
      }
    });
  }

  addTrainingProgram(): void {
    this.add.emit();
  }

  editTrainingProgram(id: number): void {
    this.router.navigate(['/training-programs/edit', id]);
  }

  deleteTrainingProgram(id: number): void {
    if (confirm('Are you sure you want to delete this training program?')) {
      this.trainingProgramService.deleteTrainingProgram(id).subscribe({
        next: () => this.loadTrainingPrograms(),
        error: (err) => console.error('Error deleting training program:', err)
      });
    }
  }
}

