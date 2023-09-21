import winston from "winston";

test('create new logger with console transport', () => {

    const logger = winston.createLogger({
        level: "silly",
        // format: winston.format.json(), //default format bawaan nya
        format: winston.format.simple(),
        // format: winston.format.logstash(), //format tersendiri untuk logging
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.silly('Hello Silly');
})


//kalau ingin membuat format sendiri
test('logging with printf format', () => {

    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(), //default format bawaan nya
        format: winston.format.simple(),
        // format: winston.format.logstash(), //format tersendiri untuk logging
        format: winston.format.printf(log => {
            // return JSON.stringify(log) //untuk menampilkan log bentuk json
            return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info('Hello Info');
})