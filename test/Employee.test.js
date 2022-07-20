const Employee = require('../lib/Employee');


const name = 'Bob';
const id = '12';
const email = 'fake@email.com';

describe('Employee', () => {
    it('should be created with a name, id, and email', () => {
        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    })

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual(employee.name);
        })
    })

    describe('getId', () => {
        it('should return the id of the employee', () => {
            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual(employee.id);
        })
    })
})