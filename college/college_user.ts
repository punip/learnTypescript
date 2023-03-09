// generalized class
export default class CollegeUser {
    /*
    constructor(this) {
        // this-- 4006 (student object), 5007(Professor object),subclass object of CollegeUser
    }
    */
   name: string = '';
   gender: string = '';

   constructor(name?: string ,gender?: string) {
    // this- student,Professor
   if(name) {
    this.name = name;
   }

   if(gender) {
    this.gender = gender; 
   }


   }
   getDetails() {
   //this-- student,Professor, subclass of CollegeUser
   return `Name: ${this.name}\nGender: ${this.gender}`;
   }
}