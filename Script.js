//1.Write a person class to hold all the details

class person {
    constructor(Names,Ages,Bloodgroup,Address,Gender,contact) {
        this.Name=Names,
        this.Age=Ages,
        this.Bloodgroup=Bloodgroup,
        this.Address=Address,
        this.Gender=Gender,
        this.contact=contact
       }
}

let details = new person("Jack","20","B+","Chennai","male","+919292993939");
 console.log(details);

//2. write a class to calculate the Uber price.

let Uber = class {
    constructor(CarName,PriceperKM,KM,pickup,drop){
        this.CarName=CarName,
        this.PriceperKM=PriceperKM,
        this.KM=KM
        this.pickup=pickup,
        this.drop=drop  
    }
    get calculate() {
     let value = this.PriceperKM * this.KM
      return value
    }
    
}
const car1 = new Uber("Swift",16,10,"Coimbatore","trichy"); 
const car2 = new Uber("innova",20,10,"chennai","trichy");
console.log(car1);
console.log(car2);




// 3.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(MoviName, Studio, Rating) {
        this.Title = MoviName;
        this.Studio = Studio;
        this.Rating = !Rating ? "PG" : Rating
    }
    
    static getPg(getdata) {
        const finalResult = getdata.filter((result)  => {
            return result.Rating === "PG" && result
        })
        return finalResult
    } 
}

let Movie1 = new Movie("Casino Royale","Eon Productions");
let Movie2 = new Movie("Casino Royale","Eon Productions", "LG");
let Movie3 = new Movie("ff","Eon Productions", "LG");
let Movie4 = new Movie("pooja","vishal film factory", "LG");
let Movie5 = new Movie("savval","jinnah creation", "PG");

let result = [Movie1,Movie2,Movie3,Movie4,Movie5]; 

const FinalResult = Movie.getPg(result);
 console.log(FinalResult);
//4.circle:
class circle{
constructor (Radius,color,circumference,Area){
    this.Radius=Radius,
    this.color=color,
    this.circumference=circumference
    this.Area=Area
              }
      get Double() {
      let radius=  this.Radius * this.Radius
      return radius
       }   
      get sha(){
       let r= this.color
       return r
      }
    
      
}

let round = new circle(0.1,"RED","2 pi/r",5)
console.log(round);