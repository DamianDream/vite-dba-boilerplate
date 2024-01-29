// Telegram Chat-Bot URL for deeplink
// const telegramBotUrl = "https://t.me/[TELEGRAM_BOT_NAME]";

// Example of final url => 'https://t.me/[TELEGRAM_BOT_NAME]?start=-name-Test_Name-phone-0501234567-telegram-test_telegram_username'

//  Create data (string) to inject as deep link for telegram url link
//  Expect object with keys and values=string || number
const createDeepLinkString = (obj) => {
     let str = "?start="

     if (Object.keys.length > 1) {

        //  sanitize form data via providing underscore to string data 
        const sanitizedObject = Object.entries(obj).map(([key, value]) => [key, value.replaceAll(' ', '_')])

        Object.entries(sanitizedObject).forEach(([key, value]) => {
            let val = value
    
            //  in telegram case remove '@'  symbol to valid url link 
            if (key === 'telegram') {
                val = value.replace(/@/g, '');
            } 
    
            str += `-${key}-${val}`
        })

     } else {
        str += "Error_during_create_deep_link_message"
     }

    return str
}
// output example => '/start -name-Test_Name-phone-0501234567-telegram-test_telegram_username'
