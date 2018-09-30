const signup = require('./index');
test('Test User signup to return success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    signup({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user Signup success!!!');
});

test('Test User signup to return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    signup({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user Signup success!!!');
});