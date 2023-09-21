import winston from "winston";

async function callAsync() {
    return Promise.reject('Ups laksa salah')
}

const logger = winston.createLogger({
    level: 'info',
    // handleExceptions: true, //untuk handel exception yang spesifik
    // handleRejections: true, //untuk handel exception yang spesifik
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true, //untuk handel exception yang spesifik
            handleRejections: true, //untuk handel exception yang spesifik
            filename: 'exception.log'
        })
    ]
})


callAsync()