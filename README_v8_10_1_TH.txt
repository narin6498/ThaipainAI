ThaiPainAI v8.10.1
CAMERA
- ขอ video:true ก่อน เพื่อให้ permission prompt ขึ้นก่อนและเปิด device labels
- หลังได้รับสิทธิ์จึง enumerateDevices() แล้วเลือกกล้องหลังจาก deviceId จริง
- ถ้าเลือกกล้องหลังไม่ได้ ใช้ stream แรก/facingMode fallback
- ตรวจจับ LINE/Facebook/Instagram/embedded browser และมีปุ่ม “เปิดใน Chrome”
- แสดง Camera diagnostics และ error name/message ในแอพ

PAIN AREA
- ปรับตำแหน่งใหม่ตามภาพคน clean จริง
- ลดวง desktop เหลือ ~16 px แต่พื้นที่กดยังใหญ่แบบโปร่งใส
