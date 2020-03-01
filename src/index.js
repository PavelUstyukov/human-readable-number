module.exports = function toReadable(number) {
    const base = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (base[number]) return base[number]

    let numbersArray = number.toString().split('').map(i => Number(i))

    let formTenToTwenty = Number('' + numbersArray[numbersArray.length - 2] + numbersArray[numbersArray.length - 1])

    let tenth

    if (formTenToTwenty != 0 && base[formTenToTwenty]) {
        tenth = base[formTenToTwenty]
    } else {
        tenth = `${numbersArray[numbersArray.length - 2] != 0 ? base[numbersArray[numbersArray.length - 2] * 10] + ' ' : ''}${numbersArray[numbersArray.length - 1] != 0 ? base[numbersArray[numbersArray.length - 1]] : ''}`

    }


    if (numbersArray.length > 2) {
        let hundreds = `${base[numbersArray[0]]} hundred ${tenth}`
        return hundreds.trim()
    }

    return tenth.trim()

}
