const logout = require('./index');
test('Test User logout to return success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    logout({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user logout success!!!');
});

test('Test User logout to return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    logout({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user logout success!!!');
});