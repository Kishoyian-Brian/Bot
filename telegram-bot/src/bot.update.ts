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
      [Markup.button.callback('🔍 RUN APP', 'seed_finder')],
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
        await ctx.answerCbQuery('🔍 Loading pricing information...');
        
        const buyKeyMessage = `🔑 **BUY KEY SOFTWARE** 🔑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Select the Key You Want to Buy Below!**
We Have 4 Types of Software Keys Available.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥈 **Silver Key** - $99
• Basic features
• 1 month support
• Standard updates

🥇 **Gold PC Key** - $299
• Advanced features
• 3 months support
• Priority updates

💎 **Platinum PC Key** - $699
• Premium features
• 6 months support
• VIP updates

👑 **100 Key Platinum** - $999
• Enterprise features
• 12 months support
• Custom solutions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👇 **Please Select the Key and Proceed to Payment.**`;

        const buyKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('🥈 Silver Key - $99', 'buy_silver')],
          [Markup.button.callback('🥇 Gold Key - $299', 'buy_gold')],
          [Markup.button.callback('💎 Platinum Key - $699', 'buy_platinum')],
          [Markup.button.callback('👑 100 Key Platinum - $999', 'buy_100_platinum')],
          [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')]
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
      // Key selection handlers
      case 'buy_silver':
        await ctx.answerCbQuery('🥈 Processing Silver Key...');
        
        const cryptoMessage = `🥈 **Silver Key Selected** 🥈
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Price:** $99

💳 **Choose Payment Method:**`;

        const cryptoKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('₿ Bitcoin (BTC)', 'pay_btc_silver')],
          [Markup.button.callback('Ξ Ethereum (ETH)', 'pay_eth_silver')],
          [Markup.button.callback('💎 TON', 'pay_ton_silver')],
          [Markup.button.callback('💵 USDT (TRC20)', 'pay_usdt_silver')],
          [Markup.button.callback('🪙 Dogecoin (DOGE)', 'pay_doge_silver')],
          [Markup.button.callback('🔙 Back to Keys', 'buy_key')]
        ]);

        await ctx.reply(cryptoMessage, cryptoKeyboard);
        break;

      case 'buy_gold':
        await ctx.answerCbQuery('🥇 Processing Gold Key...');
        
        const goldCryptoMessage = `🥇 **Gold Key Selected** 🥇
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Price:** $299

💳 **Choose Payment Method:**`;

        const goldCryptoKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('₿ Bitcoin (BTC)', 'pay_btc_gold')],
          [Markup.button.callback('Ξ Ethereum (ETH)', 'pay_eth_gold')],
          [Markup.button.callback('💎 TON', 'pay_ton_gold')],
          [Markup.button.callback('💵 USDT (TRC20)', 'pay_usdt_gold')],
          [Markup.button.callback('🪙 Dogecoin (DOGE)', 'pay_doge_gold')],
          [Markup.button.callback('🔙 Back to Keys', 'buy_key')]
        ]);

        await ctx.reply(goldCryptoMessage, goldCryptoKeyboard);
        break;

      case 'buy_platinum':
        await ctx.answerCbQuery('💎 Processing Platinum Key...');
        
        const platinumCryptoMessage = `💎 **Platinum Key Selected** 💎
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Price:** $699

💳 **Choose Payment Method:**`;

        const platinumCryptoKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('₿ Bitcoin (BTC)', 'pay_btc_platinum')],
          [Markup.button.callback('Ξ Ethereum (ETH)', 'pay_eth_platinum')],
          [Markup.button.callback('💎 TON', 'pay_ton_platinum')],
          [Markup.button.callback('💵 USDT (TRC20)', 'pay_usdt_platinum')],
          [Markup.button.callback('🪙 Dogecoin (DOGE)', 'pay_doge_platinum')],
          [Markup.button.callback('🔙 Back to Keys', 'buy_key')]
        ]);

        await ctx.reply(platinumCryptoMessage, platinumCryptoKeyboard);
        break;

      case 'buy_100_platinum':
        await ctx.answerCbQuery('👑 Processing 100 Key Platinum...');
        
        const platinum100CryptoMessage = `👑 **100 Key Platinum Selected** 👑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Price:** $999

💳 **Choose Payment Method:**`;

        const platinum100CryptoKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('₿ Bitcoin (BTC)', 'pay_btc_100_platinum')],
          [Markup.button.callback('Ξ Ethereum (ETH)', 'pay_eth_100_platinum')],
          [Markup.button.callback('💎 TON', 'pay_ton_100_platinum')],
          [Markup.button.callback('💵 USDT (TRC20)', 'pay_usdt_100_platinum')],
          [Markup.button.callback('🪙 Dogecoin (DOGE)', 'pay_doge_100_platinum')],
          [Markup.button.callback('🔙 Back to Keys', 'buy_key')]
        ]);

        await ctx.reply(platinum100CryptoMessage, platinum100CryptoKeyboard);
        break;

      // Bitcoin payments
      case 'pay_btc_silver':
        await ctx.answerCbQuery('₿ Processing Bitcoin payment...');
        
        const btcAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
        const btcMessage = `₿ **Bitcoin Payment for Silver Key** ₿
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Amount:** $99

🏦 **Send Bitcoin to:**
\`${btcAddress}\`

📋 **Click to copy address**

📞 **After payment, send proof to @DevOrbits**

⏰ **Payment expires in 24 hours**`;

        const btcKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('📋 Copy Address', 'copy_btc_silver')],
          [Markup.button.callback('🔙 Back to Payment', 'buy_silver')]
        ]);

        await ctx.reply(btcMessage, btcKeyboard);
        break;

      case 'pay_eth_silver':
        await ctx.answerCbQuery('Ξ Processing Ethereum payment...');
        
        const ethAddress = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';
        const ethMessage = `Ξ **Ethereum Payment for Silver Key** Ξ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Amount:** $99

🏦 **Send Ethereum to:**
\`${ethAddress}\`

📋 **Click to copy address**

📞 **After payment, send proof to @DevOrbits**

⏰ **Payment expires in 24 hours**`;

        const ethKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('📋 Copy Address', 'copy_eth_silver')],
          [Markup.button.callback('🔙 Back to Payment', 'buy_silver')]
        ]);

        await ctx.reply(ethMessage, ethKeyboard);
        break;

      case 'pay_ton_silver':
        await ctx.answerCbQuery('💎 Processing TON payment...');
        
        const tonAddress = 'EQD0vdSA_NedR9uvbg89D0DGr2CQXoPzEq1iipcv6Vt5-7tO';
        const tonMessage = `💎 **TON Payment for Silver Key** 💎
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Amount:** $99

🏦 **Send TON to:**
\`${tonAddress}\`

📋 **Click to copy address**

📞 **After payment, send proof to @DevOrbits**

⏰ **Payment expires in 24 hours**`;

        const tonKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('📋 Copy Address', 'copy_ton_silver')],
          [Markup.button.callback('🔙 Back to Payment', 'buy_silver')]
        ]);

        await ctx.reply(tonMessage, tonKeyboard);
        break;

      case 'pay_usdt_silver':
        await ctx.answerCbQuery('💵 Processing USDT payment...');
        
        const usdtAddress = 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE';
        const usdtMessage = `💵 **USDT Payment for Silver Key** 💵
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Amount:** $99

🏦 **Send USDT (TRC20) to:**
\`${usdtAddress}\`

📋 **Click to copy address**

📞 **After payment, send proof to @DevOrbits**

⏰ **Payment expires in 24 hours**`;

        const usdtKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('📋 Copy Address', 'copy_usdt_silver')],
          [Markup.button.callback('🔙 Back to Payment', 'buy_silver')]
        ]);

        await ctx.reply(usdtMessage, usdtKeyboard);
        break;

      case 'pay_doge_silver':
        await ctx.answerCbQuery('🪙 Processing Dogecoin payment...');
        
        const dogeAddress = 'D7Y55vWi8iTauniWWp4WbqTguy1D4bh3mQ';
        const dogeMessage = `🪙 **Dogecoin Payment for Silver Key** 🪙
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 **Amount:** $99

🏦 **Send Dogecoin to:**
\`${dogeAddress}\`

📋 **Click to copy address**

📞 **After payment, send proof to @DevOrbits**

⏰ **Payment expires in 24 hours**`;

        const dogeKeyboard = Markup.inlineKeyboard([
          [Markup.button.callback('📋 Copy Address', 'copy_doge_silver')],
          [Markup.button.callback('🔙 Back to Payment', 'buy_silver')]
        ]);

        await ctx.reply(dogeMessage, dogeKeyboard);
        break;

      // Copy address handlers
      case 'copy_btc_silver':
        await ctx.answerCbQuery('📋 Address copied to clipboard!');
        break;
      case 'copy_eth_silver':
        await ctx.answerCbQuery('📋 Address copied to clipboard!');
        break;
      case 'copy_ton_silver':
        await ctx.answerCbQuery('📋 Address copied to clipboard!');
        break;
      case 'copy_usdt_silver':
        await ctx.answerCbQuery('📋 Address copied to clipboard!');
        break;
      case 'copy_doge_silver':
        await ctx.answerCbQuery('📋 Address copied to clipboard!');
        break;
      case 'seed_finder':
        await ctx.answerCbQuery('🔍 Opening Seed Finder...');
        
        const seedFinderUrl = process.env.SEED_FINDER_URL || '';
        
        // Create a web app button that opens the tool directly in Telegram
        const seedFinderKeyboard = Markup.inlineKeyboard([
          [Markup.button.webApp('🔍 RUN APP', seedFinderUrl)],
          [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')]
        ]);

        const seedFinderMessage = `🔍 **AI WALLET FINDER** 🔍
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 **Advanced Heuristic Scanner**
🔐 **Private Access Tool**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ **IMPORTANT SECURITY NOTICE:**
• Use responsibly
• Unauthorized access is prohibited
• Keep your findings secure
• Do not share sensitive information

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 **Click the button below to launch the tool:**`;

        await ctx.reply(seedFinderMessage, seedFinderKeyboard);
        break;
      case 'back_to_menu':
        await ctx.answerCbQuery('🔙 Returning to main menu...');
        await this.start(ctx);
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
