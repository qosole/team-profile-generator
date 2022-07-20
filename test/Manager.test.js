const Manager = require('../lib/Manager');


const name = 'Joe';
const id = '2';
const email = 'joe@email.com';
const manager = new Manager(name, id, email);

describe('Manager', () => {
    it('should inherit the attribues of Employee class', () => {
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
    })
})