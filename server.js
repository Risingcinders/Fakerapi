const express = require("express");
const faker = require("faker");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

const user = faker.name.findName();
const company = faker.company.companyName();

// req is short for request
// res is short for response

app.get("/api/users/new", (req, res) => {
    res.json({ beth : new User })
});

app.get("/api/company/new", (req, res) => {
    res.json({ beth : new Company })
});

app.get("/api/users/company", (req, res) => {
    res.json({ beth : new Company, user : new User })
});



const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
