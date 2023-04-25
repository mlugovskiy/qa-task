# Тестовое задание QA

Данный репозиторий содержит тестовое задание для позиции QA. Все тесты находятся в файле `qa-task\tests\followToBasketTests.spec.ts`

Тесты по умолчанию выполняются в трех браузерах: Chromium, Firefox, Webkit. Подключены три репортера: playwright html, playwright line и allure.

## Установка

Для установки необходимо выполнить следующие шаги:

1. Установка пакетов:
```
npm install
```

2. Установка браузеров playwright:
```
npx playwright install
```


## Запуск тестов

Для запуска всех тестов во всех браузерах, используйте следующую команду:
```
npx playwright test
```

Для запуска тестов только в браузере Chromium, используйте следующую команду:
```
npx playwright test landing-page.ts --project=chromium`
```


## Просмотр Allure отчета

Для просмотра Allure отчета выполните следующие действия:

1. Сгенерируйте отчет allure:
```
npx allure generate ./allure-results --clean
```

2. Откройте отчет:
```
npx allure open ./allure-report
```