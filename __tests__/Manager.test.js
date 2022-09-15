const Manager = require('../lib/Manager');

test('creates an employee object', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);
        
        expect(employee.name).toEqual('Joe');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('gets employee name', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);

        expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);

        expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmail', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);

        expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);

        expect(employee.getRole()).toEqual('Manager')
});

test('gets employee office number', () => {
    const employee = new Manager('Joe', 1, 'joe@mail.com', 31);

    expect(employee.getOfficeNumber()).toEqual(expect.any(Number));
}
)