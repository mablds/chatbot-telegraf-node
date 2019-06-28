const Telegraf = require('telegraf')

const bot = new Telegraf('437875461:AAFdeuHarKFQQZyHOxJJ-NNdHgo37eI1ScE')
bot.start((ctx) => {
    ctx.reply('Eae mano. Bom dia! \nTERMINA ESSE TCC, CARALHO!')
    console.log('PARÇA IS UP')
})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('hi', (ctx) => {
    ctx.reply('Hey you!')
})

bot.command('jogoforca', (ctx) => {
    const secretWord = getRandomWords()
    let erros = 0
    ctx.reply('Bem vindo ao jogo da forca do seu ParçaB0T\n\n' + getEmojisErrors(erros) + '\n' + getLetterFields(secretWord))

})

//renderiza o personagem com base na quantidade de erros
const getEmojisErrors = (erros) => {
    switch (erros) {
        case 0:
            return "    Tentativas: 3\n\n"
        case 1:
            return "    Tentativas: 2\n\n /\\ \n"
        case 2:
            return "    Tentativas: 1\n /|\\ \n /\\ \n"
        case 3:
            return " \u{1F604}    Tentativas: 0\n /|\\ \n  /\\ \n "
    }
}

//renderiza a quantidade de _ da palavra selecionada
const getLetterFields = (secretWord) => {
    return "_ ".repeat(secretWord.length)
}

//forma o array da palavra selecionada
const secretWordToArray = (secretWord) => {
    return secretWord.split('')
}


//seta a palavra automática
const getRandomWords = () => {
    const palavras = ["banana", "celular", "pokemon", "geografia", "paralelepipedo"]
    return palavras[Math.floor(Math.random() * palavras.length)]
}

bot.launch()