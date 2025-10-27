# 1. Base image Node.js
FROM node:20-alpine

# 2. Set working directory di container
WORKDIR /app

# 3. Copy file package.json dan package-lock.json
COPY package*.json ./

# 4. Install dependency
RUN npm install

# 5. Copy semua source code ke container
COPY . .

# 6. Build project React+Vite+Tailwind
RUN npm run build

# 7. Expose port default Vite
EXPOSE 5173

# 8. Jalankan server Vite production
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]
