//source 
//https://stackoverflow.com/questions/12827266/get-and-set-in-typescript

class foo {
    private _bar: boolean = false;
    get bar(): boolean {
        return this._bar;
    }
    set bar(value: boolean) {
        this._bar = value;
    }
}

interface passedParamType{
    firstVar: number
}

interface returnType{
    firstVar: number
    secondVar: string
}

var myFunc = function(passedObject: passedParamType) : returnType{
    return Object.assign({}, {...passedObject, secondVar: "valueForSecondVar"})
}

