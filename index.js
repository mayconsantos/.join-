const puppeteer = require('puppeteer');
const fs = require('fs');

//Auto function
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pintos.com.br');
  //await page.screenshot({path: 'pintosltda.png'});
 
  // função que será executa no browser
  const imgList = await page.evaluate(() => {
    // pegar imagens de slideshow-banner
        const nodeList = document.querySelectorAll('.slideshow-banner .owl-item:not(.cloned) img');
    // transformar o Nodelist em array
        const imgArray = [...nodeList]
    // transformar os nodes (elementos html) em objetos JS
    var id = 0;
        const imgList = imgArray.map(({src}) => ({'id':id++,src}));
        //console.log(list)
    // colocar para fora da função
    return imgList;
  });  

  // gravar dados em um arquivo para buscas
    fs.writeFile('slideshow-banner-site-pintos.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('Ops! Reveja se não mudou algo ao pegar dados na função que executa no browser.');
        console.log('Tudo certo');
    });

  await browser.close();
})();