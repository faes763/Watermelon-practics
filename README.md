# Проект на Next.js

## Docker

Для запуска проекта с использованием Docker:

```bash
docker compose up --build
```

---

## Установка пакетов

Вы можете установить зависимости, используя любой из следующих пакетных менеджеров:

```bash
# npm
npm install

# или yarn
yarn add

# или pnpm
pnpm install

# или bun
bun install
```

---

## Запуск сервера для деплоя

Чтобы запустить сервер после сборки, выполните следующие команды в зависимости от используемого менеджера пакетов:

```bash
# npm
npm run build
npm start

# или yarn
yarn build
yarn start

# или pnpm
pnpm run build
pnpm start

# или bun
bun run build
bun run start
```

Дополнительные материалы по деплою: [Deploy на Linux с Nginx](https://dev.to/j3rry320/deploy-your-nextjs-app-like-a-pro-a-step-by-step-guide-using-nginx-pm2-certbot-and-git-on-your-linux-server-3286)

---

## Запуск сервера для разработки

Для запуска development-сервера используйте следующие команды:

```bash
# npm
npm run dev

# или yarn
yarn dev

# или pnpm
pnpm dev

# или bun
bun dev
```

---

## Инструкция по добавлению GitHub Actions workflow для CI/CD

Для автоматизации сборки и деплоя вашего проекта с использованием GitHub Actions, выполните следующие шаги:

1. **Создайте файл workflow**:
   В корне вашего проекта создайте папку `.github/workflows/`, если она ещё не существует. Затем создайте файл с именем `build.yml`.

2. **Добавьте следующий код в файл `build.yml`**:



```yaml
name: Build and Deploy Project

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs: 
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Bun environment
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: 'latest'

      - name: Install dependencies
        run: bun install

      - name: Build project
        run: bun run build
        
  deploy:
    needs: [build]
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Deploy to server via SSH
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd ~/app/frontend/CTemplace-next
            bun install
            bun run build
            pm2 delete frontend || true
            pm2 start bun --name frontend -- start

```

3. **Настройка секретов GitHub**:
   В разделе настроек вашего репозитория на GitHub добавьте необходимые секреты:
   - `SSH_HOST`: IP-адрес вашего сервера.
   - `SSH_USERNAME`: имя пользователя для подключения по SSH.
   - `SSH_PRIVATE_KEY`: приватный SSH-ключ для деплоя.

4. **Запуск workflow**:
   После создания или изменения файла workflow он автоматически запустится при каждом пуше в ветку `main`. Вы также можете запустить его вручную через интерфейс GitHub.

---