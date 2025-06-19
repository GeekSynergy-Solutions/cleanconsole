import dotenv from "dotenv";
import path from "path";

class ProtectedConsoleClass {
    constructor() {
        const envPath = this._getEnvPathFromArgs();
        dotenv.config({ path: envPath });
        this.forProd = (process.env.NODE_ENV === 'production')
    }

    _getEnvPathFromArgs() {
        const envArgPrefix = '--env=';
        const envArg = process.argv.find(arg => arg.startsWith(envArgPrefix));
        if (envArg) {
            const providedPath = envArg.slice(envArgPrefix.length);
            return path.resolve(providedPath);
        }
        return path.resolve('.env');
    }

    logData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if (!forProd || stillDisplayData) {
            console.log(data);
        }
    }

    warningData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if (!forProd || stillDisplayData) {
            console.warn(data);
        }
    }

    infoData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if (!forProd || stillDisplayData) {
            console.info(data);
        }
    }

    debugData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if (!forProd || stillDisplayData) {
            console.debug(data);
        }
    }
}

export default { ProtectedConsoleClass }
