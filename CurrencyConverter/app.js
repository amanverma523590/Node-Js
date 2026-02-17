
import readline from 'readline'
import https from 'https'
import chalk from 'chalk'

const apiKey = "cfbeaeac6e4bb8faf8384a5b;"
const url =  `https://v6.exchangerate-api.com/v6/cfbeaeac6e4bb8faf8384a5b/latest/USD`;

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const convertCurency = (amount,rate) =>{
    return (amount * rate).toFixed(2);
}

https.get(url,(response)=>{
    let data = "";
    response.on('data',(chunk)=>{
        data += chunk;
    })

    response.on('end',()=>{
        const rates = JSON.parse(data).conversion_rates;  //api ke andar hai property conversion_rate
        rl.question(chalk.red('Enter The Amount in Usd: '),(amount)=>{
            rl.question(chalk.blueBright('Enter the Target Currency (eg: inr ,use, npr): '),(currency)=>{
                const rate = rates[currency.toUpperCase()] ;
                if(rate){
                    console.log(chalk.yellow(`${amount} USD is approx ${convertCurency(amount,rate)} ${currency} `))
                }else{
                    console.log(`Invalid Currency code`)
                }
                rl.close();
            })
        })
    })
})
