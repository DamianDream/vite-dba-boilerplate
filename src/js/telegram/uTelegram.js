const createUrl = (obj) => {

    // TESTING
    // const TELEGRAM_BOT_TOKEN = "6430685070:AAH_6l28rMGbrVTujz7Pzap1U10JUUZwhcE";
    // const TELEGRAM_CHAT_ID = "-1002128534604";

    let msg = '📣 Web Page 📣 New Message %0A';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (obj) {
        Object.entries(obj).forEach(item => {
            msg += `${capitalizeFirstLetter(item[0])}: ${item[1]} %0A`
        })
    } else {
        msg = "Error, no data found"
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${msg}&parse_mode=html`
    return url
}

const fetchTelegram = async (obj) => {
    //  Create text message from object and inject as url link
    createUrl(obj)

    try {
        const response = await fetch(createUrl(obj), {method: 'GET'})
        if(response.ok) {
            console.log("Success! Message was sended to Telegram channel.");
            return true
        } else {
            throw new Error(response.statusText)
        }
    } catch(error) {
        console.log('There was an error during execute function "fetchTelegram": ', error.message);
    }
}

export default fetchTelegram
