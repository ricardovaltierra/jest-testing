export function capitalize(str){
    if (typeof str != 'string'){
        return str;
    }
    let str2 = "";
    let firstLetter = true;
    let i = 0;
    str = str.toLowerCase();
    while (i < str.length) {
        if (str[i].match(/[a-z]/i) && firstLetter) {
            str2 += str[i].toUpperCase();
            firstLetter = false;
        } else {
            str2 += str[i]
        }
    }
    return str2;
}