# Тестовое задание QA

Данный репозиторий содержит тестовое задание для позиции QA. Все тесты находятся в файле `\tests\followToBasketTests.spec.ts`

Тесты могут выполняться в трех браузерах: Chrome, Firefox, Safari. Подключены три репортера: playwright html, playwright line и allure.

##Примеры селекторов и регулярных выражений
1. xpath в `\pages\MainPage.ts` в 12 строке:
```
readonly buyProductButton = this.page.locator('//button[contains(@class,"actionBuyProduct")]');
```
2. css селекторы `\pages\MainPage.ts` в строках с 13 и далее:
```
readonly firstPageButton = this.page.locator('a[data-page-number="1"]');
readonly secondPageButton = this.page.locator('a[data-page-number="2"]');
readonly secondPageIndexActive = this.page.locator('.page-item.active');
```
3. регулярное выражение `\pages\MainPage.ts` в строке 22:
```
const price = +((await this.productCardPrice.nth(indexOfProductCard).innerText())?.match(/\d*/)?.[0] || '');
```
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
