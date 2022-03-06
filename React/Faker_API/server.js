const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser= () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        phoneNumber : faker.phone.phoneNumber(),
        email : faker.internet.email(),
        password : faker.internet.password()
    } 
    return newFake
}

const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        address: {
            _id: faker.datatype.uuid(),
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country() 
        }
    }
    return newCompany
}

app.get("/api/user/new", (req, res) => {
    const user = createUser();
    res.json(user);
});
app.get('/api/company/new', (req, res) =>{
    const company = createCompany();
    res.json(company);
})
app.get('/api/company', (req, res) =>{
    const user = createUser();
    const company = createCompany();
    const responseObject = {
        user : user,
        company : company
    }
    res.json(responseObject);

})

app.listen( port, () => console.log(`Listening on port: ${port}`) );