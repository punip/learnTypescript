import CollegeUser from "./college_user";
export default class Student extends CollegeUser  {
    // instance attributes

    private _roll: number = 0;
    private _marks: number = 0;

    //static attributes
    static count: number = 0;

    constructor(name: string, gender: string, roll?: number, marks?: number) {
        super(name ,gender)
        // putting guards
    

       if(roll) {
        this.roll = roll;
       }
       // internally
       // student/set/roll(...)

       if(marks) {
        this.marks = marks;
       }
        // this.address = 'india'; // error 
        Student.count++;
    }
    //instance methods
    getDetails() { 
        return `${super.getDetails()}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
    
    }

    //static methods 
    static newInstance(name: string,gender :string,roll: number,marks: number) : Student {
        return new Student (name ,gender ,roll ,marks ) ;
    }
        
    set roll(roll:number) {
        if(roll>0) {
            this._roll = roll;
        }else {
            throw console.error('Rollno cannot 0 or less than 0 ');
        }
    }
    get roll() {
        return this._roll;
    }
    set marks(marks: number) {
        if(marks>0)
         {
            this._marks = marks;
        }
        else {
            
            throw console.error('Marks cannot be less than 0  ');
        }
    }  
    get marks() {
        return this._marks;
    }
        
    }



    


