const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b)
}

const parseArguments = (args) => {
    if (args.length != 4) throw new Error ('wrong number of arguments')
    
    const fisrtNumber = Number(args[2])
    const secondNumber = Number(args[3])
    if (!isNaN(fisrtNumber) && !isNaN(secondNumber)){
        return[
            fisrtNumber,
            secondNumber
        ]
    }
    
    throw new Error('Provided values were not numbers!')
    
}

const cleanArguments = parseArguments(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = (cleanArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is:`)