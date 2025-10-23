import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Validate required environment variables
  if (!process.env.BOT_TOKEN) {
    console.error('❌ BOT_TOKEN is required! Please set it in your .env file');
    console.error('💡 Get your bot token from @BotFather on Telegram');
    process.exit(1);
  }

  const app = await NestFactory.create(AppModule);
  
  // Enable graceful shutdown
  app.enableShutdownHooks();
  
  const port = process.env.PORT ?? 3000;
  const webhookUrl = process.env.RENDER_EXTERNAL_URL || process.env.WEBHOOK_URL;
  
  console.log('🤖 Telegram Bot is starting...');
  console.log('✅ Bot token configured');
  console.log(`🌐 Webhook URL: ${webhookUrl}/webhook`);
  console.log(`🚀 Server listening on port ${port}`);
  console.log('🚀 Bot is ready to receive messages!');
  
  await app.listen(port);
}
bootstrap();
