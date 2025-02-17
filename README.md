## Запуск приложения с помощью Docker Compose

Этот проект использует Docker и Docker Compose для упрощения процесса развертывания. Следуйте инструкциям ниже, чтобы запустить приложение на своем локальном компьютере.

## Предварительные требования

Перед началом убедитесь, что у вас установлены следующие инструменты:

- [Docker](https://www.docker.com/get-started) (версия 27.5 или выше)
- [Docker Compose](https://docs.docker.com/compose/install/) (версия 2.32 или выше)

## Клонирование репозитория

Сначала клонируйте репозиторий на свой локальный компьютер:

```bash
  git clone https://github.com/RajabovIlyas/balance-manager.git
  cd balance-manager
  docker-compose up --build
```