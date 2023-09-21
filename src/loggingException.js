import winston from "winston";


const logger = winston.createLogger({
    level: 'info',
    // handleExceptions: true, //untuk handel exception yang spesifik
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true, //untuk handel exception yang spesifik
            filename: 'exception.log'
        })
    ]
})




hello()