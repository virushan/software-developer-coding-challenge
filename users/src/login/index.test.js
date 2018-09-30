const login = require('./index');
test('Test User Login to return success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    login({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user login success!!!');
});

test('Test User Login to return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    login({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user login success!!!');
});