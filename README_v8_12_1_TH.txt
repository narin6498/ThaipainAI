ThaiPainAI v8.12.1 — AFTER AI Responsive Fix

สาเหตุที่หน้า Before/After ดูเหมือนไม่ตอบสนอง:
- มีการเรียก startPoseAfterOnExistingCamera() แต่เวอร์ชันก่อนหน้าไม่มีฟังก์ชันนี้จริง
- กล้องจึงขึ้น Camera ready แต่ AI Pose loop สำหรับ AFTER ไม่เริ่ม
- LIVE ROM และ AFTER LEFT/RIGHT จึงค้างที่ 0°

แก้ไข:
- เพิ่ม startPoseAfterOnExistingCamera() จริง
- reuse stream กล้องกับ MediaPipe PoseLandmarker
- เริ่ม pose loop ของ videoAfter โดยตรง
- แสดง AI Ready / Pose detected / No pose
- ปุ่มวัดมี countdown 8 วินาที
- แสดงสถานะการวัดชัดเจน
- กันการกดวัดซ้ำระหว่างกำลังวัด
- หากวัดไม่ครบซ้าย/ขวา จะไม่คำนวณด้วยค่าจำลอง
- ถ้าไม่มีค่าจริง ระบบขอให้วัดใหม่แทนการเติม fallback อัตโนมัติ

หมายเหตุ:
ค่า head-turn เป็น camera-estimated ROM proxy และต้อง validation ก่อนใช้ทางคลินิก
