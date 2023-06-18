const faker = require("faker");
const { fi } = require("faker/lib/locales");
const fs = require("fs");

let data = "INSERT INTO student VALUES";
const numberOfRows = 100;

for(let i=1; i<= numberOfRows; i++){
    let firstName = faker.name.firstName();
    let lastName= faker.name.lastName();
    const startDate = new Date('1950-01-01');
    const endDate = new Date('2005-12-31');
    let birthDate= faker.date.between(startDate,endDate).toISOString().split('T')[0];
    let email = faker.internet.email();
    let phone= faker.helpers.replaceCreditCardSymbols('03[2-4]#{7}');
      
 data+= `\n(${i},'${firstName}','${lastName}', '${birthDate}' , '${email}', '${phone}')`;
 i+1 <numberOfRows ? data+=",":data+=";";
}

fs.writeFile('result.sql',data, (err)=>{
    if (err) {
        console.log(err);
    }
})