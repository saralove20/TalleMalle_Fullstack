# 빌드 단계
FROM node:24.12.0-slim AS builder
WORKDIR /app

# 빌드 시점에 환경변수 주입 (Vite는 빌드 타임에 환경변수를 코드에 심음)
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

COPY package*.json ./

RUN npm install

COPY ./ ./
RUN npm run build

# 실행 단계
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]