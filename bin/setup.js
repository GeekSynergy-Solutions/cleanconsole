#!/usr/bin/env node

import protectedConsoleClass from '../package/protected_console_class.js';

const logger = new protectedConsoleClass.ProtectedConsoleClass();

logger.logData("Environment variables loaded.");
logger.infoData("NODE_ENV: " + process.env.NODE_ENV);
logger.debugData("Custom setup complete.");
