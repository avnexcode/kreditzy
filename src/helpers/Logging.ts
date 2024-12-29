export default class Logging {
    public static log = (args: unknown) => this.info(args);

    public static info = (args: unknown) =>
        console.log(`🚀 - [${new Date().toLocaleString()}] [INFO]`, args);

    public static success = (args: unknown) =>
        console.log(`🚀 - [${new Date().toLocaleString()}] [SUCCESS]`, args);

    public static warning = (args: unknown) =>
        console.log(`🚀 - [${new Date().toLocaleString()}] [WARN]`, args);

    public static error = (args: unknown) =>
        console.log(`🚀 - [${new Date().toLocaleString()}] [ERROR]`, args);
}
