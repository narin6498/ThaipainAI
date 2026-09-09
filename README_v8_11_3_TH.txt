ThaiPainAI v8.11.3 — ROM Skeleton Lines Fix

แก้ปัญหา:
- หน้า AI Joint ROM Assessment มีจุด landmark แต่ไม่มีเส้นเชื่อม

วิธีแก้:
- ไม่พึ่ง DrawingUtils.drawConnectors() ในหน้า ROM
- วาดเส้น skeleton ด้วย Canvas API โดยตรง
- ใช้ชุดคู่ landmark ของ MediaPipe Pose สำหรับใบหน้า ไหล่ แขน ลำตัว สะโพก ขา และเท้า
- วาดเส้นก่อนและวาดจุดทับด้านบน
- เพิ่ม z-index ของ canvas ให้สูงกว่า video ชัดเจน
- ขนาดเส้นและจุดปรับตามความกว้าง canvas อัตโนมัติ
