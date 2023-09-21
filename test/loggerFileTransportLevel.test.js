import winston, { warn } from "winston";

test('create new logger with console & file transport', () => {

    const logger = winston.createLogger({
        level: 'info',
        transports: [
            // new winston.transports.Console({
            //     level:'error'
            // }),
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            }),
            new winston.transports.File({
                level:'warn',
                filename: 'applicationWarn.log'
            })
        ]
    })

    logger.info('Hello Tomioka');
    logger.info('Hello Tomioka');
    logger.warn('Hello Zenitsu');
})