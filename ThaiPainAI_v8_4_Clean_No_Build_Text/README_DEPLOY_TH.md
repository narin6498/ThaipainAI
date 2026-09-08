# ThaiPain AI — QR + PWA Ready

ชุดนี้ออกแบบให้ใช้วันประกวดแบบ:
กรรมการสแกน QR → เปิด ThaiPain AI → ติดตั้งเป็นแอปบนหน้าจอมือถือ

## วิธีที่เร็วที่สุด: GitHub Pages
1. สร้าง GitHub repository ใหม่ เช่น `thaipain-ai`
2. อัปโหลดไฟล์ทั้งหมดใน ZIP นี้ไปที่ root ของ repository
3. ที่ GitHub ไป Settings > Pages
4. Source เลือก `GitHub Actions`
5. ไป Actions แล้วรอ workflow `Deploy ThaiPain AI PWA to GitHub Pages` สำเร็จ
6. เปิด URL ของ GitHub Pages
7. หน้าแรกจะแสดง QR ที่ชี้ไปยัง `app.html` ของ URL จริงอัตโนมัติ
8. เปิดหน้าแรกบนคอม/แท็บเล็ต แล้วให้กรรมการสแกน QR

## Android
- Chrome จะแสดงปุ่ม Install เมื่อ PWA พร้อม
- หรือ ⋮ > Install app / Add to Home screen

## iPhone / iPad
- เปิดด้วย Safari
- Share > Add to Home Screen

## สำคัญ
- PWA เหมาะกับกรรมการมากกว่า APK sideload เพราะไม่ต้องเปิด "Install unknown apps"
- UI หลักและ service worker ทำงานได้เหมือนแอป
- AI Camera ใช้ MediaPipe ที่ยังโหลดจากอินเทอร์เน็ต
- กล้องต้องใช้งานจาก HTTPS ซึ่ง GitHub Pages รองรับ
- หน้า index.html สร้าง QR จาก URL จริงอัตโนมัติ จึงไม่ต้องแก้ QR หลัง deploy

## ไฟล์
- index.html = หน้า Install + QR
- app.html = ThaiPain AI v6
- manifest.webmanifest = PWA manifest
- sw.js = service worker
- icon-192.png / icon-512.png = app icons
- .github/workflows/deploy-pages.yml = deploy GitHub Pages อัตโนมัติ
