const { exception } = require('console');
var fs = require('fs');

function isEven(number) {
    var lib = new isEvenLib(number);
    return lib.isEven();
}   

class isEvenLib {
    constructor(value){
        this.value = value;
        var rawFileData = fs.readFileSync('./number-list.json', 'utf8');
        this.numberList = JSON.parse(rawFileData);
        this.maxNumber = 1000000;
    }

    isEven(){
        var decidedMethod =   Math.floor( Math.random() * 2 + 1 );
        
        switch(decidedMethod){
            case 1: 
                return typeof value === 'number' ? this.#isEvenByInteger() : this.#isEvenByString();
            case 2:
                return this.#isEvenByBogo()
        }
    }

    #isEvenByInteger(){
        return this.numberList[this.value].isEven;
    }

    #isEvenByString(){
        return this.numberList.filter(number => number.numberText.includes(this.value))[0].isEven;
    }

    #isEvenByBogo(){
        let found = null;
        let type = typeof this.value;
        console.log('bogo\'d')
        do {
            let random = Math.floor( Math.random() * this.maxNumber );

            if(type === 'number')
                found = random === this.value ? this.numberList[random] : null;
            else if (type === 'string'){
                let elementIncludes = this.numberList[random].numberText.includes(this.value);
                found = elementIncludes ? this.numberList[random] : null;
            }
            
        } while (found === null)

        return found.isEven;
    }
}

module.exports = isEven;
