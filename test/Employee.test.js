const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should be created with a name, id, and email', () => {
        const name = 'Bob';
        const id = '12';
        const email = 'fake@email.com';

        const employee = new Employee(name, id, email);
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    })
})