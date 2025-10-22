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
  
  console.log('🤖 Telegram Bot is starting...');
  console.log('✅ Bot token configured');
  console.log('🚀 Bot is ready to receive messages!');
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
