//BASIC TYPESCRIPT TYPES
let anotherVariableOfUnkownType = 4
//anotherVariableOfUnkownType changed by program
let anyVarType: any = anotherVariableOfUnkownType
let booleanVarType: boolean = true
let numberVarType: number = 4  //has support for hex, binary, and octal
let stringVarType: string = "StringVariableValue"

//Array
let arrayVarType: Array<any> = ["string", 4, true]

//Enums
enum ColorEnumVarType {RED = 1, WHITE = 2, BLUE = 3}
let color: ColorEnumVarType = ColorEnumVarType.BLUE

//NULL and Undefined
let mightBeNothing: string | null | undefined

//VOID - opposite of any
let logger = (message:string):void => console.log(message)



let checkIfColorIsRed = (color: ColorEnumVarType):boolean => color === ColorEnumVarType.RED
