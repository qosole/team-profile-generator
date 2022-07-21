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

    it('should have a github attribute', () => {
        expect(engineer.github).toEqual(github);
    })

    describe('getGithub', () => {
        it('should return the github of the engineer', () => {
            expect(engineer.getGithub()).toEqual(engineer.github);
        })
    })
})