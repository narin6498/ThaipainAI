ThaiPainAI v8.10.0
1) Mobile Camera
- แยกการเปิดกล้องออกจาก MediaPipe module
- ปุ่มเปิดกล้องทำงานด้วย classic JavaScript ก่อน จึงยังเปิดกล้องได้แม้ CDN/MediaPipe โหลดช้า
- มือถือขอกล้องหลัง environment ก่อน และมี fallback
- เมื่อกล้องเปิดแล้ว MediaPipe จะต่อเข้ากับ stream เดิมเพื่อทำ AI Body Scan/ROM

2) Pain Area Desktop
- ปรับพิกัดใหม่ตามภาพ clean 500x1400 จริง
- ปรับคอ บ่า หน้าอก/หลัง ศอก สะโพก เข่า ข้อเท้า
- ลดวงบน desktop ให้สมดุล แต่พื้นที่กดยังใหญ่แบบโปร่งใส
