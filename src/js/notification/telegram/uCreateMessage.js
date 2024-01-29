export const createMessageForTelegram = (obj) => {
    let str = '📣 New Message form Web Page 📣 %0A';

    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let key in obj) {

        const name = capitalizeFirstLetter(key)
        const value = obj[key]

        str += `${name}: ${value} %0A`
    }
    return str
}
