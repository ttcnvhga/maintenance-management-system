# Maintenance Management System (Hệ thống Quản lý Sửa chữa)

Hệ thống quản lý và theo dõi nhật ký sửa chữa trang thiết bị cho các nhà ga đường sắt đô thị.

## Tính năng chính

* **Quản lý người dùng:** Phân quyền quản trị, người sửa chữa, người báo lỗi.
* **Báo lỗi thiết bị:** Ghi nhận lỗi, địa điểm, chuyên ngành, mô tả và hình ảnh.
* **Thống kê & Báo cáo:** Xem tổng quan lỗi theo ga, phòng ban, chuyên ngành theo thời gian tùy chọn.
* **Nhật ký sửa chữa:** Ghi lại quá trình khắc phục lỗi.

## Cấu trúc dự án

Dự án được chia thành hai phần chính:

* **`frontend/`**: Ứng dụng giao diện người dùng (UI) được xây dựng bằng React.js và Tailwind CSS.
* **`backend/`**: API server được xây dựng bằng Node.js và Express, chịu trách nhiệm xử lý logic nghiệp vụ và tương tác với cơ sở dữ liệu.

## Công nghệ sử dụng

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express
* **Database:** (Tạm thời) JSON file, sau này sẽ nâng cấp lên PostgreSQL
* **Deployment:** (Gợi ý) Vercel (Frontend), Render/Heroku (Backend)

## Hướng dẫn cài đặt và chạy cục bộ (Local Development)

### Yêu cầu

* Node.js (phiên bản 14 trở lên)
* npm hoặc yarn

### 1. Clone Repository

```bash
git clone [https://github.com/ttcnvhga/maintenance-management-system.git](https://github.com/ttcnvhga/maintenance-management-system.git)
cd maintenance-management-system
