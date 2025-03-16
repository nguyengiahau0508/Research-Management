import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Giả lập trạng thái đăng nhập (thay bằng logic thực tế của bạn)
  isLoggedIn(): boolean {
    // Ví dụ: Kiểm tra token trong localStorage
    return !!localStorage.getItem('authToken');
  }

  // Hàm đăng nhập (giả lập)
  login(username: string, password: string): boolean {
    // Thay bằng API call thực tế
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('authToken', 'sample-token');
      return true;
    }
    return false;
  }

  // Hàm đăng xuất
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
