const fs = require('fs')
const { get } = require('http')


const getInput = () => {
const input = fs.readFileSync('./input.txt');
const passports = String(input).split("\n\n");
let invalid = 0;
let valid = 0;
let validPassports = 0;


// all required fields===============================
//passports.length

for (let i = 0 ; i < passports.length; i++){
 if (passports[i].includes('hgt') && passports[i].includes('byr') && passports[i].includes('iyr') && passports[i].includes('eyr') && passports[i].includes('hcl') && passports[i].includes('ecl') && passports[i].includes('pid') && passports[i].includes('cid')){
    let passportElements = passports[i];
    let field = passportElements.replace(/\n/g, ' ').split(' ');
    
        for (let j = 0; j < field.length ; j++){

           //byr 
            if ( field[j].includes('byr')){
                let element = field[j].split(':'); 
                 
                  if (element[1].length === 4 && parseInt(element[1])>= 1920 &&  parseInt(element[1]) <= 2002){
                    valid ++;
                  }else{
                      invalid++;
                  }
                    
            }

            //iyr
            if ( field[j].includes('iyr')){
                let element = field[j].split(':');   
                  if (element[1].length === 4 && parseInt(element[1])>= 2010 &&  parseInt(element[1]) <= 2020){
                      valid ++;
                  }else{
                      invalid++;
                  }
                    
            }

            //eyr
            if ( field[j].includes('eyr')){
            let element = field[j].split(':');   
                if (element[1].length === 4 && parseInt(element[1])>= 2020 &&  parseInt(element[1]) <= 2030){
                    valid ++;
                }else{
                    invalid++;
                }
                
            }

            //hgt
            if ( field[j].includes('hgt')){
            let element = field[j].split(':');   
                if (element[1].includes('cm') && parseInt(element[1])>= 150 &&  parseInt(element[1]) <= 193 || element[1].includes('in') && parseInt(element[1])>= 59 && parseInt(element[1]) <= 76){
                    valid ++;
                }else{
                    invalid++;
                }
                
            }

            //hcl
            if ( field[j].includes('hcl')){
                let element = field[j].split(':');   
               
                    if (element[1].length === 7 ){
                        let valueHcl = element[1].split('#');
                        // console.log(valueHcl[1].split('')[0].charCodeAt());
                        let counter = 0;
                         valueHcl[1].split('').forEach(letter =>{
                             let character = letter.charCodeAt();
                                if ((character >= '48' && character <= '57') || (character >= '97' && character <= '122')  )  {
                                    counter++;
                                }                  
                            });
                            console.log(counter);
                        if (counter === 6){
                            valid++;
                        }    
                    }else{
                        invalid++;
                    }
                    
            }

            //ecl
            if ( field[j].includes('ecl')){
                let element = field[j].split(':');   
                    if (element[1] ==='amb' || element[1] ==='blu' || element[1] ==='brn' || element[1] ==='gry' || element[1] ==='grn' || element[1] ==='hzl' ||element[1] ==='oth'){
                        valid ++;
                    }else{
                        invalid++;
                    }
                    
            }


            //pid 

            if ( field[j].includes('pid')){
                let element = field[j].split(':');   
                    if (element[1].indexOf(0) ==='0' && element[1].length === 9 ){
                        valid ++;
                    }else{
                        invalid++;
                    }
                    
            }

            
        }
        console.log(valid);
            if(valid===7){
                validPassports++;
            }
         

        
     

   

 
 }else if ( !passports[i].includes('cid') && (passports[i].includes('ecl')||passports[i].includes('pid'))||passports[i].includes('eyr')|passports[i].includes('hcl')||passports[i].includes('byr')||passports[i].includes('iyr')||passports[i].includes('pid')){
    let passportElements = passports[i];
    let field = passportElements.replace(/\n/g, ' ').split(' ');
    console.log(field);
    console.log(typeof field);
    for (let j = 0; j < field.length ; j++){

           //byr 
            if ( field[j].includes('byr')){
                let element = field[j].split(':'); 
                console.log(element[1]);  
                  if (element[1].length === 4 && parseInt(element[1])>= 1920 &&  parseInt(element[1]) <= 2002){
                    valid ++;
                  }else{
                      invalid++;
                  }
                    
            }

            //iyr
            if ( field[j].includes('iyr')){
                let element = field[j].split(':');   
                  if (element[1].length === 4 && parseInt(element[1])>= 2010 &&  parseInt(element[1]) <= 2020){
                      valid ++;
                  }else{
                      invalid++;
                  }
                    
            }

            //eyr
            if ( field[j].includes('eyr')){
            let element = field[j].split(':');   
                if (element[1].length === 4 && parseInt(element[1])>= 2020 &&  parseInt(element[1]) <= 2030){
                    valid ++;
                }else{
                    invalid++;
                }
                
            }

            //hgt
            if ( field[j].includes('hgt')){
            let element = field[j].split(':');   
                if (element[1].includes('cm') && parseInt(element[1])>= 150 &&  parseInt(element[1]) <= 193 || element[1].includes('in') && parseInt(element[1])>= 59 && parseInt(element[1]) <= 76){
                    valid ++;
                }else{
                    invalid++;
                }
                
            }

            //hcl
            if ( field[j].includes('hcl')){
                let element = field[j].split(':');   
                    if (element[1].length === 7 ){
                        let valueHcl = element[1].split('#');
                        
                        let counter = 0;
                         valueHcl[1].split('').forEach(letter =>{
                             let character = letter.charCodeAt();
                                if ((character >= '48' && character <= '57') || (character >= '97' && character <= '122')  )  {
                                    counter++;
                                }                  
                            });
                        if (counter === 6){
                            valid++;
                        }    
                    }else{
                        invalid++;
                    }
                    
            }


            //ecl
            if ( field[j].includes('ecl')){
                let element = field[j].split(':');   
                    if (element[1] ==='amb' || element[1] ==='blu' || element[1] ==='brn' || element[1] ==='gry' || element[1] ==='grn' || element[1] ==='hzl' ||element[1] ==='oth'){
                        valid ++;
                    }else{
                        invalid++;
                    }
                    
            }

        //pid 

        if ( field[j].includes('pid')){
            let element = field[j].split(':');   
                if (element[1].indexOf(0) ==='0' && element[1].length === 9 ){
                    valid ++;
                }else{
                    invalid++;
                }
                
        }
        
        
    }
    console.log(valid);
    if(valid === 7){
          validPassports++;
    }

        

      
     

    
}


 
} 

console.log(validPassports);
return validPassports;
}


   
getInput()

