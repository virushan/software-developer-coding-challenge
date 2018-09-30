const models = require('./index');
test('Test list all models success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    models({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('list all models success!!');
});

test('Test list all models return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    models({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('list all models success!!');
});