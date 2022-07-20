const Manager = require('../lib/Manager');


const name = 'Joe';
const id = '2';
const email = 'joe@email.com';
const officeNumber = '30';
const manager = new Manager(name, id, email, officeNumber);

describe('Manager', () => {
    it('should inherit the attributes and methods of Employee class', () => {
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);

        expect(manager.getName()).toEqual(manager.name);
        expect(manager.getId()).toEqual(manager.id);
        expect(manager.getEmail()).toEqual(manager.email);
    })

    it('should have an officeNumber attribute', () => {
        expect(manager.officeNumber).toEqual(officeNumber);
    })
})