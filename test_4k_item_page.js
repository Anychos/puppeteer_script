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
    await page.goto('https://a101-shop-front-specstorea-359.ktsdev.ru/?platform=stand', { waitUntil: 'networkidle2' });  // Открытие сайта с параметром ожидания

    await new Promise(resolve => setTimeout(resolve, 5000));  // Ожидание 3 секунды
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_catalog.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\= > div.bElX2h-X9oE\\= > div > button:nth-child(1)');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_sort_menu.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div:nth-child(3) > div > div.GhxakRDroQA\\=.-WfC5FmobkM\\=.NUJlXB8V3vE\\= > button');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\= > div.bElX2h-X9oE\\= > div > button:nth-child(2)');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_filter_menu.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    await page.click('#root > div:nth-child(3) > div > div.GhxakRDroQA\\=.-WfC5FmobkM\\=.GCNljVv-K98\\= > button');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#main-scroll > div > div.rI9Jk8q43D8\\= > div > div > div:nth-child(1) > div > article:nth-child(1)');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_product_card.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.ZyUrC-qMMLg\\= > div > div > button.OQmO2jtf5sk\\=.MA7FzqzX9xg\\=.eyMkwclB09Q\\=.uvj-8BWgn40\\=._5TIpyud6I34\\=.AaTv-0stjg4\\=.qiLyHE5yesE\\=');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_make_order.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div.eRdLFkQ6t3M\\= > div > div > div.X3RIOxB4Hfw\\=.hnvkvWHmDgE\\=.JwuYSr-6W7I\\= > div > div:nth-child(4) > div');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_map.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Клик по полю ввода. Используется CSS селектор
    await page.click('#root > div:nth-child(3) > div.qQAeyTKG3nc\\= > div.BeEM96aK9X8\\=._7AIb7Av-2yo\\=._98OZ2AcB34s\\= > div > div.TS06ZCjWiuw\\= > button:nth-child(1)');

    await new Promise(resolve => setTimeout(resolve, 5000));
    // Скриншот
    await page.screenshot({ path: 'delayed-screenshot_map_pvz.png', fullPage: true });  // path для каждого скриншота нужно менять имя, иначе не будет сохранять

    await new Promise(resolve => setTimeout(resolve, 5000));

    await browser.close();  // Закрытие браузера
})();