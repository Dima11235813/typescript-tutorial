
let myTypescriptTypedVariable: string = "This is a string"
//implicit typing
let myImplicitlyTypedTsVariable = "This is an implicitly typed string"
//explicit initialization with type
class MyClass{
  //classes have implicit constructors but you can create an explicit constructor
  constructor(public everyInstanceHasThis: string = "MyClass Public String"){
    //if class instantiated with let myClass = MyClass()
    console.log(this.everyInstanceHasThis) //MyClass Public String
    //if class instantiated with let myClass = MyClass("Override variable default")
    console.log(this.everyInstanceHasThis) //Override variable default
  }
  static StaticString: string = "This is referencable by MyClass.StaticString"
  //This is referencable by creating an instance of this class
  classString = `class instance string`
  //let myClass = MyClass()
  //console.log(myClass.classString) //class instance string
  static MyMethod(){
    console.log(MyClass.StaticString) //This is referencable by MyClass.StaticString
  }
}