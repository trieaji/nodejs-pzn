import winston from "winston";

test('create new logger with console transport', () => {

    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.silly('Hello Silly');
})