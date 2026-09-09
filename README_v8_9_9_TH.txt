ThaiPainAI v8.9.9 — Mobile Camera + Full-Screen UX
- มือถือ/แท็บเล็ตใช้กล้องหลังเป็นตัวเลือกแรก (facingMode: environment)
- ถ้า exact environment เปิดไม่ได้ จะ fallback เป็น ideal environment แล้วจึง fallback video:true
- ขอสิทธิ์กล้องก่อนโหลด MediaPipe AI เพื่อให้ permission prompt ขึ้นทันทีบนมือถือ
- ถ้า AI โหลดไม่สำเร็จ กล้องยังคงเปิดได้และแสดงสถานะให้ทราบ
- AFTER Scan ใช้ระบบเปิดกล้องแบบเดียวกัน
- มือถือขยายแอพเต็มความกว้างหน้าจอ, card/ปุ่ม/ตัวอักษรใหญ่ขึ้น และกล้องสูงถึง ~68dvh
- คง Pain Map mobile single-view และ desktop 4-view จาก v8.9.8
