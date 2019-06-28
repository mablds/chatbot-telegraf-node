const Telegraf = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply('Eae mano. Bom dia! \nTERMINA ESSE TCC, CARALHO!')
    console.log('PARÇA IS UP')
})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('EAE', (ctx) => ctx.reply('Eae Parça! Grande dia 👍'))
bot.hears('goiaba', (ctx) => ctx.reply('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK É BERG CARAI'))

bot.command('jogoforca', (ctx) => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const word = getRandomWords()
    const secretWord = word
    const wordInArray = secretWordToArray(secretWord)
    const letterFields = wordInArray.fill('_', i = 0, this.length)
    let playObj
    let erros = 0

    ctx.reply('Bem vindo ao jogo da forca do seu ParçaB0T\n\n' + getEmojisErrors(erros) + '\n' + getLetterFields(secretWord))
    bot.hears(abc, (ctx) => {
        console.log('Letra digitada: ' + ctx.match)
        if (verifIndex(wordInArray, ctx.match)) {
            playObj = msgs(erros, ctx.match, wordInArray, letterFields)
            ctx.reply(playObj.emojiError + '\n' + playObj.novoArr)
        } else {
            erros += 1
            playObj = msgs(erros, ctx.match, wordInArray, letterFields)
            ctx.reply(playObj.emojiError + '\n' + playObj.novoArr)
        }
    })
})

const msgs = (erros, letter, wordInArray, letterFields) => {
    const ind = verifIndex(wordInArray, letter)
    if (ind) {
        const arr = letterFields
        const newArr = arr.map((e, i) => ind.includes(i) ? letter : '_')
        return {
            emojiError: getEmojisErrors(erros),
            novoArr: newArr
        }
    } else {
        const newArr = letterFields
        return {
            emojiError: getEmojisErrors(erros),
            novoArr: newArr
        }
    }
}

const verifIndex = (wordInArray, letter) => {
    const verif = wordInArray.map((e, i) => e === letter ? i : null).filter(e => e !== null)
    if (verif.length > 0) {
        return verif
    } else {
        return false
    }
}

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
    //verificador
    //, "TESTANDO", "POKEMON", "BASQUETE", "FUTEBOL", "EMPREGO", "GEOGRAFIA"
    //seta a palavra automática
const getRandomWords = () => {
    const palavras = ["BANANA"]
    return palavras[Math.floor(Math.random() * palavras.length)]
}

//renderiza a quantidade de _ da palavra selecionada
const getLetterFields = (secretWord) => {
    return "_ ".repeat(secretWord.length)
}

//forma o array da palavra selecionada
const secretWordToArray = (secretWord) => {
    return secretWord.split('')
}

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.launch()