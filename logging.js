var winston = require('winston');
  require('winston-daily-rotate-file');

  var transport = new (winston.transports.DailyRotateFile)({
    filename: './log/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level:'verbose'
  });

//   transport.on('rotate', function(oldFilename, newFilename) {
//     // do something fun
//   });

  var logger = winston.createLogger({
    transports: [
      transport
    ]
  });

module.exports = logger;