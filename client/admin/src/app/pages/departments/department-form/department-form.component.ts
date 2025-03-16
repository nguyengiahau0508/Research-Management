import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, DepartmentService } from '../../../services/department.service';
import { FormsModule } from '@angular/forms';
import { TrainingProgramsComponent } from '../../training-programs/training-programs.component';
import { TrainingProgramFormComponent } from '../../training-programs/training-program-form/training-program-form.component';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css'],
  imports: [
    FormsModule,
    TrainingProgramsComponent,
    TrainingProgramFormComponent
  ]
})
export class DepartmentFormComponent implements OnInit {
  department: Department = { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false };
  isEditMode = false;
  isAddingTranningProgram: boolean = false

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.departmentService.getDepartmentById(+id).subscribe({
        next: (data) => this.department = data,
        error: (err) => console.error('Error loading department:', err)
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.departmentService.updateDepartment(this.department).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error('Error updating department:', err)
      });
    } else {
      this.departmentService.createDepartment(this.department).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error('Error creating department:', err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/departments']);
  }

  onAddingTranningProgram() {
    this.isAddingTranningProgram = !this.isAddingTranningProgram
  }
}
