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

    await new Promise(resolve => setTimeout(resolve, 5000));  // Ожидание 3 секунды
    // Клик по полю ввода. Используется CSS селектор
    await page.click('#main-scroll > div > div.rI9Jk8q43D8\\= > div > div > div:nth-child(1) > div > article:nth-child(1)');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.ZyUrC-qMMLg\\= > div > div > button.OQmO2jtf5sk\\=.KCRL4ufBhOI\\=.eyMkwclB09Q\\=.uvj-8BWgn40\\=.AaTv-0stjg4\\=.qiLyHE5yesE\\=');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_add_to_cart_product.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.ZyUrC-qMMLg\\= > div > button');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\= > div.bElX2h-X9oE\\= > button');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_full_product_cart.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));



    await browser.close();  // Закрытие браузера
})();