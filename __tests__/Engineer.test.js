const Engineer = require('../lib/Engineer');

test('creates an employee object', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');
        
        expect(employee.name).toEqual('Joe');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.github).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');

        expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');

        expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmail', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');

        expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');

        expect(employee.getRole()).toEqual('Engineer')
});

test('gets employee github username', () => {
    const employee = new Engineer('Joe', 1, 'joe@mail.com', 'joe@github.com');

    expect(employee.getGitHub()).toEqual(expect.any(String));
})