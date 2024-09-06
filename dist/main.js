"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const session = require("express-session");
const momgostore = require("connect-mongodb-session");
const option = {
    uri: 'mongodb+srv://kmozaire83:Mother2002,@cluster0.lgi03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    databaseName: 'user',
    collection: 'mySessions',
};
const MongoDBStore = momgostore(session);
const store = new MongoDBStore(option);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    }));
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map