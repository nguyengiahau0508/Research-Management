import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Gender, Status, Student, StudentService } from '../../../services/student.service';
import { Department, DepartmentService } from '../../../services/department.service';
import { TrainingProgram, TrainingProgramService } from '../../../services/training-program.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  imports: [FormsModule]
})
export class StudentFormComponent implements OnInit {
  @Input() studentId: string | null = null
  @Output() onCancel = new EventEmitter<void>()

  student: Student = {
    id: '', fMName: '', lastname: '', gender: Gender.MALE, classId: '', phone: '', email: '', address: '',
    status: Status.PENDING, department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false }, traningProgram: {
      id: 0,
      name: '',
      department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false },
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false
    },
    createdAt: new Date(), updatedAt: new Date(), isDeleted: false
  };
  departments: Department[] = [];
  trainingPrograms: TrainingProgram[] = [];
  genders = Object.values(Gender);
  statuses = Object.values(Status);
  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private departmentService: DepartmentService,
    private trainingProgramService: TrainingProgramService,
  ) { }

  ngOnInit(): void {
    this.loadDepartments();
    if (this.studentId) {
      this.isEditMode = true;
      this.studentService.getStudentById(this.studentId).subscribe({
        next: (data) => {
          console.log(data)
          this.student = data
        },
        error: (err) => console.error('Error loading student:', err)
      });
    } else {
      this.student = {
        id: '', fMName: '', lastname: '', gender: Gender.MALE, classId: '', phone: '', email: '', address: '',
        status: Status.PENDING, department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false }, traningProgram: {
          id: 0,
          name: '',
          department: { id: 0, name: '', createdAt: new Date(), updatedAt: new Date(), isDeleted: false },
          createdAt: new Date(),
          updatedAt: new Date(),
          isDeleted: false
        },
        createdAt: new Date(), updatedAt: new Date(), isDeleted: false
      };
      this.departments = [];
      this.trainingPrograms = [];
      this.genders = Object.values(Gender);
      this.statuses = Object.values(Status);
      this.isEditMode = false;
    }
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data.filter(d => !d.isDeleted),
      error: (err) => console.error('Error loading departments:', err)
    });
  }

  loadTrainingPrograms(departmentId: number): void {
    this.trainingProgramService.getTrainingProgramByDepartmentId(departmentId).subscribe({
      next: (data) => this.trainingPrograms = data.filter(p => !p.isDeleted),
      error: (err) => console.error('Error loading training programs:', err)
    });
  }



  onSubmit(): void {
    const payload = {
      id: this.student.id,
      fMName: this.student.fMName,
      lastname: this.student.lastname,
      gender: this.student.gender,
      classId: this.student.classId,
      phone: this.student.phone,
      email: this.student.email,
      address: this.student.address,
      status: this.student.status,
      department: this.student.department,
      traningProgram: this.student.traningProgram
    };
    if (this.isEditMode) {
      this.studentService.updateStudent(payload).subscribe({});
    } else {
      this.studentService.createStudent(payload).subscribe({});
    }
    this.cancel()
  }

  cancel(): void {
    this.onCancel.emit()
  }
}
