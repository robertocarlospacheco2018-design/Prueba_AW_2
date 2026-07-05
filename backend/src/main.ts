async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // <--- ESTA LÍNEA SOLUCIONA ERRORES DE CONEXIÓN
  await app.listen(3000);
}
bootstrap();