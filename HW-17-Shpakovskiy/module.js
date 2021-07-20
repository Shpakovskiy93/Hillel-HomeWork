
export function ntimes(str,times) {
    let str2 = str.repeat(times)
    getHistory('ntimes', str, str2)
    return str2
}

export function getPart(str) {
    let str2 = str.substr(0,str.length / 2)
    getHistory('getPart', str, str2)
    return str2
}

export function removeDuplicates(str) {
    let str2 = Array.from(new Set(str)).join('')
    getHistory('removeDuplicates', str, str2)
    return str2
}

export function reverse(str) {
    let str2 = str.split("").reverse().join("")
    getHistory('reverse', str, str2)
    return str2
}

export function getHistory (name, start, finish) {
    if(name && start && finish) {
        console.log(`name: ${name}, start: ${start}, finish: ${finish}`);
    }
}