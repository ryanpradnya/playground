const cheerio = require('cheerio');
const request = require('request');

const url = 'https://www.bankmega.com/promolainnya.php';

request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        let subcatpromo = [];
        let subcaturl = [];
        $('#subcatpromo').find('img').each((i, el) => {
            let subcatId = $(el).attr('id');
            subcatpromo.push(subcatId);
        });
        console.log(subcatpromo);

        let maxPageTitle = $('.tablepaging').find('a').last().attr('title');
        let maxPage = parseInt(maxPageTitle.split(' ')[3], 10);
        let numberOfPage = [];
        for (let i = 2; i <= maxPage; i++) {
            numberOfPage.push(i);
        }
        console.log('maxPage: ', maxPage);
        console.log('numberOfPage: ', numberOfPage);

        let text = $('#contentpromolain2').find('script').html()
        let reg = /promolainnya.php(.*?)"/g;
        let regresult;
        while ((regresult = reg.exec(text)) != null) {
            if (/product=0&subcat=/.test(regresult[1])) {
                subcaturl.push(url + regresult[1]);

            }
        }
        console.log(subcaturl);

    } else if (error) {
        console.log(error);
    }
});