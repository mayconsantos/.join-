# API Web Scripting

Buscar dados de site, redes sociais e etc... da empresa PINTOS Ltda.


## Funcionalidades:

- Banner de promoção da loja

## Ferramentas/Dependencias do projeto

- Puppeteer
    ``npm i puppeteer``

## Puppeteer Dica de depuração

Desative o modo headless - às vezes é útil ver o que o navegador está exibindo. Em vez de iniciar no modo headless, inicie uma versão completa do navegador usando headless: false:

const browser = await puppeteer.launch({headless: false});