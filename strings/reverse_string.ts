const reverseString = (text: string): string => {
    let result = ''

    for(let i=text.length - 1; i>=0; i--){
        result += text.charAt(i)
    }
    return result
}

console.log(reverseString('hello'))