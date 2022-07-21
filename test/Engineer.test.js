const Engineer = require('../lib/Engineer');


const name = 'Will';
const id = '5';
const email = 'will@iam.com';
const github = 'github.com';
const engineer = new Engineer(name, id, email, github);

describe('Engineer', () => {
    it('should inherit the attributes and methods of the employee class', () => {
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);

        expect(engineer.getName()).toEqual(engineer.name);
        expect(engineer.getId()).toEqual(engineer.id);
        expect(engineer.getEmail()).toEqual(engineer.email);
    })
})