import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, // Service để kiểm tra trạng thái đăng nhập
    private router: Router            // Router để điều hướng
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.authService.isLoggedIn())
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (this.authService.isLoggedIn()) {
      return true; // Cho phép truy cập route
    } else {
      // Nếu chưa đăng nhập, chuyển hướng về trang login
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: state.url } // Lưu URL để quay lại sau khi đăng nhập
      });
      return false; // Chặn truy cập route
    }
  }
}
