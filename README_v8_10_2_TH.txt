ThaiPainAI v8.10.2 — Camera Recovery Pro

สิ่งที่เปลี่ยน:
1. ปุ่มเปิดกล้องใช้ classic JavaScript เพียงเส้นทางเดียว ไม่พึ่ง MediaPipe ตอนขอ permission
2. ขอ permission จากการกดปุ่มโดยตรง (user gesture)
3. เปิด environment camera ก่อน และ fallback video:true ถ้ามือถือไม่รองรับ facingMode
4. หลัง permission จึง enumerateDevices และเลือก deviceId กล้องหลังจริง
5. ต่อ AI/MediaPipe หลังภาพกล้องขึ้นแล้วเท่านั้น
6. เพิ่มปุ่มสลับกล้อง
7. เพิ่ม camera-test.html สำหรับแยกทดสอบ browser/permission ออกจากตัว AI
8. แสดง error ชัดเจน เช่น NotAllowedError / NotFoundError / NotReadableError

ถ้า camera-test.html ยังเปิดไม่ได้ แปลว่าปัญหาอยู่ที่ browser/permission/OS ไม่ใช่ MediaPipe หรือ ThaiPainAI
