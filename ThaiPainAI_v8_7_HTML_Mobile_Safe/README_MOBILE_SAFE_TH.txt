ThaiPain AI v8.7 — HTML Mobile Safe

ยังเป็น HTML/PWA แบบเดิม

แก้เพิ่มสำหรับกรณี:
- iPad เปิดได้ แต่ Android/mobile เปิดไม่ได้หรือหน้าขาว
- MediaPipe/CDN โหลดช้าหรือล้มเหลว
- external JS library ทำให้หน้าเว็บรอโหลด
- มือถือมี viewport/layout แคบ

หลักการใหม่:
1. หน้าแอปโหลดก่อนเสมอ
2. MediaPipe โหลดเฉพาะเมื่อกดเปิด AI Body Scan
3. ถ้า MediaPipe โหลดไม่ได้ กล้องยังเปิดได้ใน Camera Fallback Mode
4. QR/PDF libraries ไม่บล็อกการเปิดหน้าเว็บ
5. Mobile CSS บังคับให้ทุก card/grid กว้างไม่เกินหน้าจอ

วิธีอัปเดต GitHub Pages:
- อัปโหลดไฟล์ทั้งหมดทับ repo เดิม
- Commit
- รอ Actions Deploy
- บนมือถือเปิด URL ใหม่ด้วย Chrome
- หากยังมีหน้าเก่า: Chrome > Site settings > Delete data / Clear & reset
- ทดสอบใน Incognito เพื่อแยกปัญหา cache

ถ้าหน้าเว็บเปิดได้แต่กล้องไม่ได้:
Android Settings > Apps > Chrome > Permissions > Camera > Allow
