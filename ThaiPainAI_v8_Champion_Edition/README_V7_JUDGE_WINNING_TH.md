# ThaiPain AI v7 — Judge Winning Edition

เพิ่มจาก v6/PWA:
- Judge Mode 45 วินาที
- Demo Case สำเร็จรูป 3 เคส
  1) Office Syndrome
  2) Shoulder Pain
  3) Safety Alert / Red Flag
- Consent & Privacy ก่อนเปิดกล้อง
- AI Data Quality / Confidence indicator
- Evidence Explanation: Why this result?
- Failure-safe Demo Mode
- Impact Dashboard พร้อมป้าย SIMULATED
- ยังคง QR + PWA install flow
- Android / iPhone ใช้งานได้ผ่าน HTTPS

## Flow วันประกวดที่แนะนำ
1. เปิดหน้า QR Install บนจอใหญ่
2. ให้กรรมการสแกน
3. กด Install / Add to Home Screen
4. เปิด ThaiPain AI
5. กด Judge Mode 45 sec เพื่อเล่า vision
6. กลับเข้าแอปและเลือก Demo Case: Office Syndrome
7. แสดง ThaiPain Score + Evidence Explanation
8. แสดง THAI SAFE
9. แสดง Before/After
10. จบด้วย Analytics และ Scale-up:
   ThaiPain AI → Thai MSK Platform → Thai Wellness Data Network → THAI MED AI

## Safety wording
ระบบเป็น AI-assisted clinical decision support prototype
ไม่ใช่เครื่องมือวินิจฉัยโรค
Head-turn / ROM เป็น 2D pose proxy
ThaiPain Score และ Posture Score เป็น innovation metrics ที่ต้อง validation

## Deploy
ใช้ GitHub Pages workflow ที่อยู่ใน `.github/workflows/deploy-pages.yml`
เมื่อ deploy สำเร็จ หน้า index จะสร้าง QR จาก URL จริงอัตโนมัติ
