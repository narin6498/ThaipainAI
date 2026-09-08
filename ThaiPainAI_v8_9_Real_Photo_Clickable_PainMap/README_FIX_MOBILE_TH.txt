ThaiPain AI v8.8 Mobile Recovery

แก้สำหรับอาการ iPad เปิดได้ แต่มือถือเปิดไม่ได้:
- index.html ไม่พึ่ง JavaScript redirect
- app.html มี viewport สำหรับมือถือ
- บังคับไม่ให้ layout ล้นความกว้าง
- Service Worker เปลี่ยนเป็น network-first สำหรับหน้า HTML
- ลบ cache เก่าของ PWA เมื่อ activate
- optional CDN error ไม่ควรทำให้หน้าเว็บหลักหาย
- start_url ของ PWA ชี้เข้า app.html โดยตรง

ติดตั้ง:
1) แตก ZIP
2) อัปโหลดไฟล์ทั้งหมดทับ repository เดิม
3) Commit changes
4) รอ GitHub Pages/Actions deploy เสร็จ
5) บนมือถือ: Chrome > Settings > Site settings > All sites > เว็บไซต์ ThaiPain AI > Clear & reset
6) ปิด Chrome แล้วเปิดใหม่
7) ทดสอบ URL ใน Incognito ก่อน
8) ถ้าเว็บเปิดแต่กล้องไม่ได้ ให้เปิด Camera permission ของ Chrome

หมายเหตุ:
ถ้า URL หลักเปิดไม่ได้แม้ใน Incognito แต่ iPad เปิดได้ ให้ทดสอบมือถือด้วย Wi-Fi และ Mobile Data สลับกัน เพื่อแยกปัญหา DNS/network ออกจากตัวแอป
