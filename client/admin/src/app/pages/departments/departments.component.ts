import { Component, OnInit } from '@angular/core';
import { DepartmentService, Department } from '../../services/department.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  imports: [
    DatePipe
  ]
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data.filter(d => !d.isDeleted);
      },
      error: (err) => console.error('Error loading departments:', err)
    });
  }

  addDepartment(): void {
    this.router.navigate(['/departments/add']);
  }

  editDepartment(id: number): void {
    this.router.navigate(['/departments/edit', id]);
  }

  deleteDepartment(department: Department): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(department).subscribe({
        next: () => {
          this.loadDepartments()
        },
        error: (err) => console.error('Error deleting department:', err)
      });
    }
  }
}
