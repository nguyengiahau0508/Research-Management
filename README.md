# QL-NCKH - He thong Quan ly Nghien cuu Khoa hoc

Du an xay dung he thong quan ly hoat dong nghien cuu khoa hoc voi mo hinh fullstack, tach thanh nhieu ung dung theo vai tro nguoi dung.

## 1) Tong quan kien truc

He thong gom 4 thanh phan chinh:

- `client/admin`: giao dien cho quan tri vien (Admin).
- `client/student`: giao dien cho sinh vien.
- `client/lecture`: giao dien cho giang vien.
- `server`: REST API backend, xac thuc, xu ly nghiep vu, ket noi CSDL.

Kieu trien khai: monorepo (nhieu project con trong cung workspace).

## 2) Cong nghe su dung

### Frontend

- Angular 19
- Angular Material + CDK
- RxJS
- ngx-cookie-service
- TypeScript

Moi vai tro co mot SPA rieng:

- Admin: mac dinh chay cong `4200`
- Student: thong thuong chay cong `4300`
- Lecturer: mac dinh chay cong `4400`

### Backend

- NestJS 10
- TypeORM
- MariaDB/MySQL (`mysql2`)
- JWT + Passport
- Google OAuth2 (`passport-google-oauth20`)
- Joi / class-validator / class-transformer
- Swagger (tai lieu API)
- Mailer (Nodemailer + Handlebars template)

### Tich hop ben ngoai

- Google OAuth2 dang nhap
- Google Drive API (quan ly file)
- MoMo Payment (module tich hop thanh toan)

## 3) Chuc nang chinh cua he thong

Du vao cau truc module backend, he thong ho tro cac nhom chuc nang sau:

### Xac thuc va phan quyen

- Dang nhap bang Google cho nhieu vai tro: Admin, Student, Lecturer.
- Tao cookie JWT sau dang nhap.
- Kiem tra trang thai dang nhap, lay profile, dang xuat.
- Dang ky sinh vien moi (co trang thai cho duyet `PENDING`).

### Quan ly nguoi dung va ho so

- Quan ly tai khoan/he thong vai tro (`users`, `admins`, `students`, `lecturers`).
- Quan ly thong tin ca nhan va lien he (`personal-info`, `contact-info`).
- Quan ly hoc van, chung chi, ky nang ngoai ngu (`education`, `certification`, `language-skills`).

### Quan ly nghien cuu khoa hoc

- Linh vuc nghien cuu (`research-fields`)
- Nhom nghien cuu (`research-groups`)
- Thanh vien nghien cuu (`research-members`)
- De tai/chu de nghien cuu (`research-projects`, `research-topics`)
- Nghien cuu cap khoa va cap truong (`faculty-level-research`, `school-level-research`)

### Quan ly ket qua va hoat dong hoc thuat

- Cong bo khoa hoc (`publications`)
- Huong dan khoa hoc (`mentorship`)
- Giai thuong, thanh tich (`awards`, `achievement`)
- Ung dung thuc tien, hoat dong ngoai truong (`paractical-applications`, `external-activities`)

### Quan tri danh muc va he thong

- Khoa/bo mon (`departments`)
- Chuong trinh dao tao (`traning-programs`)
- Dot dang ky (`registration-periods`)
- Quan ly tep tai lieu (`files`)

## 4) Bien moi truong quan trong (backend)

Can cau hinh cac bien moi truong chinh sau cho `server`:

- `PORT`, `HOST`
- `MARIADB_HOST`, `MARIADB_PORT`, `MARIADB_USERNAME`, `MARIADB_PASSWORD`, `MARIADB_NAME`
- `JWT_SECRET`, `JWT_ACCESS_TOKEN_EXPIRES_IN`, `JWT_REFRESH_TOKEN_EXPIRES_IN`
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`
- `GMAIL_USER`, `GMAIL_PASS`
- `MOMO_ACCESS_KEY`, `MOMO_SECRET_KEY`, `MOMO_PARTNER_CODE`, `MOMO_REDIRECT_URL`, `MOMO_IPN_URL`

## 5) Huong dan chay nhanh local

### Buoc 1: Cai dependencies

Tu thu muc goc workspace, cai tung project:

```bash
npm --prefix server install
npm --prefix client/admin install
npm --prefix client/student install
npm --prefix client/lecture install
```

### Buoc 2: Khoi dong backend

```bash
npm --prefix server run start:dev
```

Mac dinh backend chay tai: `http://localhost:3000`

Swagger API: `http://localhost:3000/api`

### Buoc 3: Khoi dong frontend theo vai tro

```bash
npm --prefix client/admin run start
npm --prefix client/student run dev
npm --prefix client/lecture run start
```

## 6) Cau truc thu muc rut gon

```text
source/
	client/
		admin/
		student/
		lecture/
	server/
```

## 7) Ghi chu

- Du an dang theo huong domain module, mo rong chuc nang moi kha de dang trong thu muc `server/src/modules`.
- Co su dung view template (`hbs`) cho mot so luong xac thuc/thong bao phia server.
