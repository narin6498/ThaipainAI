ThaiPainAI v8.7.1 Hard Fix — Real Human

สาเหตุที่ยังเห็นหุ่นเดิม: ZIP v8.7 ก่อนหน้ามีโฟลเดอร์ซ้อน และ index.html ยังมี Service Worker registration ของ v8.6 ซ้ำอยู่ ทำให้ GitHub Pages/PWA มีโอกาสเปิดไฟล์เก่า

วิธีอัปโหลดที่ถูกต้อง:
1. แตก ZIP นี้
2. เข้าโฟลเดอร์ ThaiPainAI_v8_7_1_HardFix_RealHuman
3. อัปโหลด "ไฟล์ด้านใน" ทั้งหมดไปที่ ROOT ของ GitHub repo (ระดับเดียวกับ index.html เดิม) ห้ามอัปโหลดทั้งโฟลเดอร์เป็นโฟลเดอร์ย่อย
4. ต้องเห็น index.html, app.html, human_back_clean.png, sw.js, manifest.webmanifest อยู่หน้าแรกของ repo
5. Commit และรอ GitHub Actions/Pages deploy สำเร็จ
6. ทดสอบ URL โดยตรง: /app.html?v=8.7.1-hardfix
7. ถ้าเปิดจากไอคอน PWA เดิมแล้วยังเก่า ให้ถอนการติดตั้งไอคอนเดิมแล้วเปิดเว็บและ Add to Home Screen ใหม่หนึ่งครั้ง
