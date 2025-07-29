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
    await page.goto('https://a101-shop-front-merch-4k.ktsdev.ru/?platform=stand', { waitUntil: 'networkidle2' });  // Открытие сайта с параметром ожидания

    await new Promise(resolve => setTimeout(resolve, 3000));  // Ожидание 3 секунды

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\= > div.rI9Jk8q43D8\\= > div > div > div:nth-child(1) > div > article:nth-child(3) > a');

    await new Promise(resolve => setTimeout(resolve, 3000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot.png', fullPage: true });

    await new Promise(resolve => setTimeout(resolve, 3000));

    await browser.close();  // Закрытие браузера
})();