const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 👇 مهم جداً: نخدم مجلد public
app.use(express.static(path.join(__dirname, "public")));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API الطلبات
app.post("/api/orders", (req, res) => {
  console.log("طلب جديد:", req.body);

  res.json({
    success: true,
    message: "تم استلام الطلب"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});