import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DepartmentFormComponent } from './pages/departments/department-form/department-form.component';
import { TrainingProgramFormComponent } from './pages/training-programs/training-program-form/training-program-form.component';
import { StudentsComponent } from './pages/students/students.component';
import { ResearchTopicsComponent } from './pages/research-topics/research-topics.component';


export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent },

      { path: 'departments', component: DepartmentsComponent },
      { path: 'departments/add', component: DepartmentFormComponent },
      { path: 'departments/edit/:id', component: DepartmentFormComponent },

      { path: 'training-programs', component: TrainingProgramFormComponent },
      { path: 'training-programs/add', component: TrainingProgramFormComponent },
      { path: 'training-programs/edit/:id', component: TrainingProgramFormComponent },

      { path: 'students', component: StudentsComponent },

      { path: 'research-topics', component: ResearchTopicsComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
];
