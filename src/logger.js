import {createLogger, transports, format} from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports: [
       new transports.Console(),
       new transports.File({ filename: 'logs/app.log' })
    ]
});

export default logger;