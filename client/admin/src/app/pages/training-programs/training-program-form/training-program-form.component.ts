import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingProgram, TrainingProgramService } from '../../../services/training-program.service';
import { Department, DepartmentService } from '../../../services/department.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-training-program-form',
  templateUrl: './training-program-form.component.html',
  styleUrls: ['./training-program-form.component.css'],
  imports: [
    FormsModule,
  ]
})
export class TrainingProgramFormComponent implements OnInit {
  @Input({ required: true }) department!: Department
  @Input({ required: true }) isEditMode: boolean = false;

  trainingProgram: TrainingProgram = {
    id: 0,
    name: '',
    department: this.department,
    createdAt: new Date(),
    updatedAt: new Date(),
    isDeleted: false
  };
  departments: Department[] = [];

  constructor(
    private trainingProgramService: TrainingProgramService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = {
      name: this.trainingProgram.name,
      department: this.department
    };
    if (this.isEditMode) {
      this.trainingProgramService.updateTrainingProgram(this.trainingProgram.id, payload).subscribe({
        next: () => this.router.navigate(['/training-programs']),
        error: (err) => console.error('Error updating training program:', err)
      });
    } else {
      this.trainingProgramService.createTrainingProgram(payload).subscribe({
        next: () => this.router.navigate(['/training-programs']),
        error: (err) => console.error('Error creating training program:', err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/training-programs']);
  }
}
