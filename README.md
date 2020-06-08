Example Node + Splunk + Docker
======================

Neste exemplo, irei abordar um pequeno fragmento de observability, a geração de logs no Node.js e o envio via Winston para o Splunk, com sua devida configuração de forma automatizada subindo em um container Docker

O passo a passo está detalhado nesse artigo do [Medium](https://medium.com/@alsoares/log-de-aplica%C3%A7%C3%B5es-node-js-winston-splunk-docker-d9917d3c66b5)

### Local
Para execução local rodar:
```
    npm install
    npm start
    docker-compose up splunk
```

### Docker-compose
Para execução em container rodar:
```
    docker-compose up
```

### Testando

Link para executar [Api](http://localhost:5000/)
Link para executar [Splunk](http://localhost:8000/)
