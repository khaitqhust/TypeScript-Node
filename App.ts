import * as express from 'express';
// Creates and configures an ExpressJS web server
class App {
    // Ref to Express instance
    public express: express.Application;
    // Run configuration methods on the Express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware
    private middleware(): void {

    }

    // Configure APT endpoints
    private routes():void {
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

export default new App().express;