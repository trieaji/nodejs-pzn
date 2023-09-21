import winston from "winston";
import TransportStream from "winston-transport";


test('create new logger with new transport', () => {

    class MyTransaport extends TransportStream {

        constructor(option) {
            super(option)
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next()
        }
    }

    const logger = winston.createLogger({
        level: 'verbose',
        transports: [
            new MyTransaport({})
        ]
    })

    logger.error('Hello Error');
    logger.warn('Hello Warn');
    logger.info('Hello Info');
    logger.http('Hello HTTP');
    logger.verbose('Hello Verbose');
    logger.debug('Hello Debug');
    logger.silly('Hello Silly');
    
})