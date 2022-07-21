const Intern = require('../lib/Intern');


const name = 'Will';
const id = '5';
const email = 'will@iam.com';
const school = 'schoooool';
const intern = new Intern(name, id, email, school);

describe('Intern', () => {
    it('should inherit the attributes and methods of the employee class', () => {
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);

        expect(intern.getName()).toEqual(intern.name);
        expect(intern.getId()).toEqual(intern.id);
        expect(intern.getEmail()).toEqual(intern.email);
    })

    it('should have a school attribute', () => {
        expect(intern.school).toEqual(school);
    })

    describe('getSchool', () => {
        it('should return the school of the intern', () => {
            expect(intern.getSchool()).toEqual(intern.school);
        })
    })
})