class Logger {
    constructor() {
        this.PREFIX = "VUE_PROJECT =>"
    }

    info(message, context) {
        console.log(this.PREFIX, message, context);
    }

    exception(message, context) {
        console.info(this.PREFIX, message, context);
    }

    error(message, context) {
        console.error(this.PREFIX, message, context);
    }

    warn(message, context) {
        console.warn(this.PREFIX, message, context);
    }

    debug(message, context) {
        console.debug(this.PREFIX, message, context);
    }
}

export default new Logger();
