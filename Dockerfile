# ---- Estágio 1: build ----
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN node ace build --ignore-ts-errors

# ---- Estágio 2: produção ----
FROM node:24-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/build ./build
RUN addgroup -S app && adduser -S app -G app \
 && mkdir -p /app/tmp && chown -R app:app /app
USER app
EXPOSE 3333
CMD ["sh", "-c", "node build/ace.js migration:run --force && node build/bin/server.js"]