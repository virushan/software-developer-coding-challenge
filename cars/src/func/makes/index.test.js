const makes = require('./index');
test('Test list all car makes return success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    makes({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user login success!!!');
});

test('Test list all car makes return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    makes({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('user login success!!!');
});