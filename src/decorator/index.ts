interface Logger {
  log(msg: string): void;
}

class DLogger implements Logger {
  log(msg: string): void {
    console.log(`DLog: ${msg}`);
  }
}

/**
 * @description The instance of the logging component created using the DLogger class
 * is the object to be decorated. Let’s define an abstract log decorator class,
 * which internally holds a reference to a specific decorated object:
 */
abstract class LoggerDecorator implements Logger {
  constructor(public logger: Logger) {}
  abstract log(msg: string): void;
}

/**
 * @description With the abstract LoggerDecorator class, we implement decorators with different functions.
 */

// A decorator that converts messages to lowercase
class LowercaseDecorator extends LoggerDecorator {
  constructor(public logger: Logger) {
    super(logger);
  }

  log(msg: string): void {
    const formattedText = msg.toLowerCase();
    this.logger.log(formattedText);
  }
}

// A decorator that adds an asterisk to the message
class AsteriskDecorator extends LoggerDecorator {
  constructor(public logger: Logger) {
    super(logger);
  }
  log(msg: string): void {
    const formattedText = " ****** " + msg + " ****** ";
    this.logger.log(formattedText);
  }
}

const logger = new DLogger();
export const decoratedLogger = new AsteriskDecorator(
  new LowercaseDecorator(logger)
);
