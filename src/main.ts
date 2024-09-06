import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as momgostore from 'connect-mongodb-session';

const option = {
  uri: 'mongodb+srv://kmozaire83:Mother2002,@cluster0.lgi03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  databaseName: 'user',
  collection: 'mySessions',
};
const MongoDBStore = momgostore(session);
const store = new MongoDBStore(option);

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      store: store,
    }),
  );

  await app.listen(3002);
}
bootstrap();
