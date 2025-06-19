import dotenv from "dotenv";
import fs from "fs";

class ProtectedConsoleClass {
    constructor() {
        const envPath = this._getEnvPathFromArgs();
        if (fs.existsSync(envPath)) {
            dotenv.config({ path: envPath });
            this.logData(`⚠️ Environment variables ${envPath} loaded.`);
            logger.infoData(`⚠️ NODE_ENV: ${process.env.NODE_ENV}`);
        } else {
            this.warningData(`⚠️  Env file not found at ${envPath}. Falling back to default.`);
            dotenv.config();
        }
        this.forProd = (process.env.NODE_ENV === 'production')
    }

    _getEnvPathFromArgs() {
        const envArgPrefix = '--env=';
        const envArg = process.argv.find(arg => arg.startsWith(envArgPrefix));
        if (envArg) {
            const providedPath = envArg.slice(envArgPrefix.length);
            return providedPath;
        }
        return '.env';
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
