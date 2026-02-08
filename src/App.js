import React, { useState } from 'react';

const GA_LIST = ["Cát Linh", "La Thành", "Thái Hà", "Láng", "Thượng Đình", "Vành đai 3", "Phùng Khoang", "Văn Quán", "Hà Đông", "La Khê", "Văn Khê", "Yên Nghĩa"];

const CHUYEN_NGANH = {
  "Sửa chữa thiết bị nhà ga": ["AFC", "CCTV", "Điện chiếu sáng", "PCCC", "Điều hòa", "Thang máy, thang cuốn", "Thiết bị vệ sinh", "Bình nóng lạnh", "Nước sinh hoạt"],
  "Thông tin liên lạc": ["Bộ đàm", "Mạng nội bộ"],
  "Tín hiệu": ["Thiết bị đường ray", "Hệ thống điều khiển"],
  "Công trình, cơ sở hạ tầng": ["Mái nhà ga", "Nền nhà ga", "Cầu thang"]
};

export default function RepairReport() {
  const [formData, setFormData] = useState({
    ga: '', department: '', category: '', description: '', image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi đi:", formData);
    alert("Đã gửi báo cáo lỗi thành công!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">BÁO LỖI THIẾT BỊ</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Chọn Ga */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Địa điểm (Ga)</label>
            <select className="w-full border p-2 rounded mt-1" onChange={(e) => setFormData({...formData, ga: e.target.value})}>
              <option value="">-- Chọn Ga --</option>
              {GA_LIST.map(ga => <option key={ga} value={ga}>{ga}</option>)}
            </select>
          </div>

          {/* Chọn Chuyên ngành */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
            <select className="w-full border p-2 rounded mt-1" onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option value="">-- Chọn thiết bị --</option>
              {Object.keys(CHUYEN_NGANH).map(dept => (
                <optgroup key={dept} label={dept}>
                  {CHUYEN_NGANH[dept].map(item => <option key={item} value={item}>{item}</option>)}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Mô tả lỗi & Dropdown lỗi cũ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mô tả lỗi</label>
            <input 
              list="old-errors" 
              className="w-full border p-2 rounded mt-1" 
              placeholder="Nhập lỗi hoặc chọn lỗi cũ..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            <datalist id="old-errors">
              <option value="Hỏng đầu đọc thẻ AFC" />
              <option value="Camera mất tín hiệu" />
              <option value="Thang cuốn kẹt cảm biến" />
            </datalist>
          </div>

          {/* Upload ảnh */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Hình ảnh hiện trường</label>
            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            GỬI THÔNG BÁO LỖI
          </button>
        </form>
      </div>
    </div>
  );
}
