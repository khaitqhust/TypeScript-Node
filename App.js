"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Creates and configures an ExpressJS web server
class App {
    // Run configuration methods on the Express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware
    middleware() {
    }
    // Configure APT endpoints
    routes() {
        /*
         * This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints
         */
        let router = express.Router();
        // Placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World - Im TypeScript'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
