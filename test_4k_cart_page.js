/*
    Этот скрипт открывает сайт в браузере Chrome с заданным разрешением экрана,
    переходит в карточку товара по клику
    и делает скриншот страницы
 */

const puppeteer = require('puppeteer');  // Импорт Puppeteer

(async () => {  // Функция инициализации браузера
    const browser = await puppeteer.launch({
        headless: false,  // Запуск браузера с UI
        defaultViewport: {  // Кастомные настройки разрешения экрана
            width: 2160,
            height: 3840,
            deviceScaleFactor: 2  // Pixel Ratio
        },
        args: ['--window-size=2160,3840']
    });

    const page = await browser.newPage();  // Запуск браузера
    await page.goto('https://a101-shop-front-specstorea-355.ktsdev.ru/?platform=stand', { waitUntil: 'networkidle2' });  // Открытие сайта с параметром ожидания

    await new Promise(resolve => setTimeout(resolve, 5000));  // Ожидание для стабильности

    // Клик по кнопке корзины. Используется CSS селектор (скопировал прямо из dom, не писал сам)
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\= > div.bElX2h-X9oE\\= > button');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_product_cart.png', fullPage: true });  // path для каждого скриншота нужно менять имя или удалять старые, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    await browser.close();  // Закрытие браузера
})();