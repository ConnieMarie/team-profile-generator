//const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Joe');
        
        expect(employee.name).toBe('Joe');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Joe');

        expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Joe');

        expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmail', () => {
    const employee = new Employee('Joe');

        expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Joe');

        expect(employee.getRole()).toEqual('Employee')
});