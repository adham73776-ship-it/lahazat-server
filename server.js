const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// 👇 هذا مهم جداً
app.use(express.static(__dirname));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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
  console.log(`Server running on port ${PORT}`);
});