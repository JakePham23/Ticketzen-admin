import app from "./src/app.js";

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Xử lý khi nhận tín hiệu SIGINT để dừng server
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Exit server express');
    });
});