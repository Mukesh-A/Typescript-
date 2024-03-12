//data type

let a:string;
let nambo:number = 232
let check:boolean;
let me:any;
let surname: string | number;
a="sam"

//function 
const func = (n: number, m: number): number=>{
    console.log(n,m);
    return n*m;
}

// array
const arr:number[]= [12,24,36,48];

// array string

const arr2:Array<string> = []
const arr3:Array<string | number> = [230,"hey"]

const arr4:Array<string> = ["A","B"];

arr4.forEach(i=>{
    
})

//tuple we can define which type for each value
const arr5:[number,number,number] = [23,33.3,3]


//object
type Obj = {
    height: number;
    weight:number;
    gender:boolean
};

const obj:Obj={
    height:345,
    weight:23,
    gender:true
}
 




