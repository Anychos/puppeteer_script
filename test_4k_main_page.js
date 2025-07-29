/*
    Этот скрипт открывает сайт в браузере Chrome с заданным разрешением экрана
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

    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 3000));

    await browser.close();  // Закрытие браузера
})();