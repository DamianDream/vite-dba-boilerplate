
// Deep Link example (telegram bot)
// const str = '/start -name-Test_Name-phone-0501234567-telegram-test_telegram_username'

function createObjectFromString(str) {

    // Replace "/start" with an empty string
    const resultString = str.replace('/start', '').trim();

    // Define the pattern to match "-text-"
    const pattern = /-[^-]+-/g;

    // Use the match function to find all matches
    const matches = resultString.match(pattern).map(str => str.replace(/-/g, ''));
    console.log(matches);

    // Filter out the matches from the original string
    const nonMatches = resultString.split(pattern).filter(Boolean);
    console.log(nonMatches);

    const result = {}
    //  create object from matches and noMatches arrays
    matches.forEach((item, i) => {
        switch(item) {
            case 'name': 
                result[item] = nonMatches[i].split("_").join(" ").toString()
                break;
            case 'telegram': 
                result[item] = `@${nonMatches[i]}`
                break;
            default:
                result[item] = nonMatches[i]
            }
    })

    return result;
}

