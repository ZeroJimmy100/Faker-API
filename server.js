const express = require("express");
var faker = require('faker');
const app = express();

class User {
    constructor() {
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        
    }
} 
class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.comName = faker.company.companyName();
        this.comStreet = faker.address.streetAddress();
        this.comCity = faker.address.streetName();
        this.comState = faker.address.state();
        this.comZip = faker.address.zipCode();
        this.comCountry = faker.address.country();
    }
}
console.log(new User())
app.get("/api/users/new", (req, res) => {
    const users = [
        {id: new User().id,
        FirstName: new User().firstName,
        LastName: new User().lastName,
        PhoneNumber: new User().phoneNumber,
        Email: new User().email,
        Password: new User().password}
    ]
    return res.json({Generate_New_User: users});
})

const server = app.listen(8004, () => 
console.log(`Server is locked and loaded on port ${server.address().port}!`));

app.get("/api/companies/new", (req, res) => {
    const companies = [
        {id: new Company().id,
        Name: new Company().comName,
        Street: new Company().comStreet,
        City: new Company().comCity,
        State: new Company().comState,
        ZipCode: new Company().comZip,
        Country: new Company().comCountry}
    ]
    return res.json({Generate_New_Company: companies});
})
const server2 = app.listen(8006, () => 
console.log(`Server is locked and loaded on port ${server2.address().port}!`));

app.get("/api/user/company", (req, res) => {
    const companies = [
        {id: new Company().id,
        Name: new Company().comName,
        Street: new Company().comStreet,
        City: new Company().comCity,
        State: new Company().comState,
        ZipCode: new Company().comZip,
        Country: new Company().comCountry}
    ]
    const users = [
        {id: new User().id,
        FirstName: new User().firstName,
        LastName: new User().lastName,
        PhoneNumber: new User().phoneNumber,
        Email: new User().email,
        Password: new User().password}
    ]
    return res.json({Generate_New_User: users, Generate_New_Company: companies})
})

const server3 = app.listen(8008, () =>
console.log(`Server is locked and loaded on port ${server3.address().port}!`));