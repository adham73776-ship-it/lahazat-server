const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// السماح بالاتصال من أي موقع (Netlify مثلاً)
app.use(cors());

// قراءة JSON من الطلبات
app.use(express.json());

// عرض ملفات HTML و CSS و JS
app.use(express.static(path.join(__dirname)));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// استقبال الطلبات
app.post("/api/orders", (req, res) => {
  const order = req.body;

  console.log("📦 طلب جديد:", order);

  // هنا مستقبلاً نربط قاعدة البيانات

  res.json({
    success: true,
    message: "تم استلام الطلب بنجاح ✅"
  });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});