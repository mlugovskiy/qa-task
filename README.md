# Тестовое задание QA

Данный репозиторий содержит тестовое задание для позиции QA. Все тесты находятся в файле `qa-task\tests\followToBasketTests.spec.ts`

Тесты могут выполняться в трех браузерах: Chrome, Firefox, Safari. Подключены три репортера: playwright html, playwright line и allure.

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

Для запуска тестов в браузере Chrome, используйте следующую команду:
```
npx playwright test --project=chromium
```

Для запуска тестов в браузере Firefox, используйте следующую команду:
```
npx playwright test --project=firefox
```

Для запуска тестов в браузере Safari, используйте следующую команду:
```
npx playwright test --project=webkit
```

Для запуска всех тестов во всех браузерах, используйте следующую команду:
```
npx playwright test
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
