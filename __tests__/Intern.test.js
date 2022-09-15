const Intern = require('../lib/Intern');

test('creates an employee object', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');
        
        expect(employee.name).toEqual('Joe');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.school).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');

        expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');

        expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmail', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');

        expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');

        expect(employee.getRole()).toEqual('Intern')
});

test('gets employee school', () => {
    const employee = new Intern('Joe', 1, 'joe@mail.com', 'utsa');

    expect(employee.getSchool()).toEqual(expect.any(String));
}
)