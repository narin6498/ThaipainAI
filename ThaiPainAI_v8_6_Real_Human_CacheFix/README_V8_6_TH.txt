ThaiPain AI v8.6 — Real Human Pain Map + Cache Fix

แก้ปัญหา:
1) หน้าจอยังแสดงรูปการ์ตูนจากเวอร์ชันเก่า
2) Browser/PWA cache และ Service Worker เก่าค้าง
3) index.html เดิมยังเปิด app.html?v=8.3-clean

สิ่งที่แก้:
- เปลี่ยนลิงก์เป็น app.html?v=8.6-realhuman
- human_back.png ใช้ cache-busting ?v=8.6-realhuman
- เพิ่ม sw.js ใหม่ ลบ cache เก่าอัตโนมัติ
- ใช้ network-first สำหรับ app.html/index.html/human_back.png

วิธี deploy:
- อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ทับไฟล์เดิมใน GitHub repository
- Commit changes
- รอ GitHub Pages/Actions ขึ้นสถานะสำเร็จ
- เปิด URL ใหม่ด้วย ?v=8.6-realhuman หรือรีเฟรช 1-2 ครั้ง
- ถ้ายังเห็นภาพเก่า ให้ลบ Site data ของโดเมน GitHub Pages แล้วเปิดใหม่
