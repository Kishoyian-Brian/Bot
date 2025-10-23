import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotUpdate } from './bot.update';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN || '',
      launchOptions: {
        webhook: {
          domain: process.env.RENDER_EXTERNAL_URL || process.env.WEBHOOK_URL || '',
          hookPath: '/webhook',
        },
      },
    }),
  ],
  providers: [BotUpdate],
})
export class AppModule {}
