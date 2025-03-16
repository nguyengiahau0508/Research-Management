import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';
import { Router } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  imports: [
    StudentFormComponent
  ]
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  selectedStudentId: string | null = null
  isOpenningStudentForm: boolean = false
  isViewPending: boolean = false

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isViewPending = false
    this.studentService.getStudents().subscribe({
      next: (data) => this.students = data.filter(s => !s.isDeleted),
      error: (err) => console.error('Error loading students:', err)
    });
  }

  addStudent(): void {
    this.isOpenningStudentForm = true
  }

  editStudent(id: string): void {
    this.isOpenningStudentForm = true
    this.selectedStudentId = id
  }

  deleteStudent(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => this.loadStudents(),
        error: (err) => console.error('Error deleting student:', err)
      });
    }
  }

  approveStudent(id: string) {
    if (confirm('Are you sure you want to approve this student?')) {
      this.studentService.approveStudent(id).subscribe({
        next: () => this.viewPendingStudents(),
        error: (err) => console.error('Error approving student:', err)
      });
    }
  }

  viewPendingStudents(): void {
    this.isViewPending = true
    this.studentService.getPendingStudents().subscribe({
      next: (data) => {
        this.students = data.filter(s => {
          return !s.isDeleted;
        });
      },
      error: (err) => {
        console.error('Error loading students:', err);
      }
    });
  }

  onStudentFormOpen() {
    this.isOpenningStudentForm = !this.isOpenningStudentForm
    this.selectedStudentId = null
  }
}
