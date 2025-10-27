# Portfolio v2

Project ini adalah website portfolio menggunakan **React**, **Tailwind CSS**, dan **Vite**.  
Sudah dikemas dengan **Docker** agar mudah dijalankan di berbagai lingkungan.

---

## Cara Jalankan

### 1. Tanpa Docker (Development)
```bash
npm install
npm run dev
```
Buka browser: http://localhost:5173

### 2. Dengan Docker (Production)
``` bash
docker build -t my-portfolio .
docker run -p 5173:5173 my-portfolio
```

Buka browser: http://localhost:5173
