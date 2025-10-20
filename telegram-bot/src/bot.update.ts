import { Update, Start, Help, On, Hears, Ctx } from 'nestjs-telegraf';
import { Context, Markup } from 'telegraf';

@Update()
export class BotUpdate {
  @Start()
  async start(@Ctx() ctx: Context) {
    const welcomeMessage = `Welcome! I am Bot Scanner.

Please Click 'Buy Key' to Buy Key and Use the Software. 🔑

If You Already Have a Key, Please Click 'Download Tool' and Enter the Key to Download the Software to Your Computer. 🚀

Join the Telegram Channel to Update Information Below 👏👏👏

Contact Support If You Have Any Errors During Use: @DevOrbits`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Buy Key 🔑', 'buy_key')],
      [Markup.button.callback('Download SoftWare 📁', 'download_software')],
      [Markup.button.callback('Information ℹ️', 'information')],
      [Markup.button.callback('Contact 📞', 'contact')]
    ]);

    await ctx.reply(welcomeMessage, keyboard);
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    await ctx.reply('Available commands:\n/start - Start bot\n/help - Help info\n/hello - Say hi');
  }

  @Hears('hello')
  async sayHello(@Ctx() ctx: Context) {
    await ctx.reply('Hey there! 👋');
  }

  @On('callback_query')
  async onCallbackQuery(@Ctx() ctx: Context) {
    const callbackData = (ctx.callbackQuery as any)?.data;

    switch (callbackData) {
      case 'buy_key':
        await ctx.answerCbQuery();
        const buyKeyMessage = `🔑 BUY KEY SOFTWARE
===============
Select the Key You Want to Buy Below! We Have 4 Types of Software Keys.

Silver Key: 99$
Gold PC Key: 299$
Platinum PC Key: 699$
100 Key Platinum: 999$

===============
👇 Please Select the Key and Proceed to Payment.`;

        const buyKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('Click To Buy Key! 🏷️', 'proceed_payment')]
        ]);

        await ctx.reply(buyKeyMessage, buyKeyboard);
        break;
      case 'download_software':
        await ctx.answerCbQuery();
        await ctx.reply('Please enter your key to download the software:');
        break;
      case 'information':
        await ctx.answerCbQuery();
        await ctx.reply('Join our channel for updates: @DevOrbits\n\nFor support, contact: @DevOrbits');
        break;
      case 'contact':
        await ctx.answerCbQuery();
        await ctx.reply('Contact Support: @DevOrbits\n\nWe are here to help you with any issues!');
        break;
      case 'proceed_payment':
        await ctx.answerCbQuery();
        await ctx.reply('Please contact @DevOrbits to proceed with payment and key purchase.');
        break;
    }
  }

  @On('text')
  async onMessage(@Ctx() ctx: Context) {
    const text = ctx.message?.['text']?.toLowerCase();

    if (text.includes('weather')) {
      await ctx.reply('☀️ The weather is beautiful today!');
    } else {
      await ctx.reply('I\'m not sure what you mean. Try typing "hello" or "weather" 😊');
    }
  }
}
