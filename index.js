const winston = require('winston');
const express = require('express');
const SplunkStreamEvent = require("winston-splunk-httplogger");

var splunkSettings = {
    token: 'ded037c6-f038-4a5d-a3e1-d35927da8835',
    source: 'http:example-node-splunk-docker',
    index: 'default',
    host: 'splunk'
};

const logger = winston.createLogger({
    transports : [
        new winston.transports.Console(),
        new SplunkStreamEvent({
            splunk: splunkSettings
        })
    ]
});

const server = express();

server.listen(5000, () => {
    console.log('App running');
});

server.get('/', (req, res) => {

    const date = new Date();
    
    logger.info(`new request: ${date}`);

    res.json();

});
