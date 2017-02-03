module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    var faker = require("faker/locale/en_IND")
    return {
        people: _.times(10, function(n){
            return {
                id : n,
                name : faker.name.findName(),
                avatar : faker.internet.avatar(),
                email : faker.internet.email(),
                phoneNumber : faker.phone.phoneNumber(),
                company : faker.company.companyName(),
                jobTitle : faker.name.jobTitle(),
                jobArea : faker.name.jobArea(),
                jobDesc : faker.name.jobDescriptor(),
                address : faker.address.*()
            }
        })

    }

}