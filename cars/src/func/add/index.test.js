const add = require('./index');
test('Test add car to db return success', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    add({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('New car added to db success!!!');
});

test('Test add car to db return fail', () => {
    const json = jest.fn();
    const res = {
      json,
    };
    add({}, res);
    expect(json.mock.calls).toHaveLength(1);
    expect(json.mock.calls[0][0]).toHaveProperty('msg');
    expect(json.mock.calls[0][0].msg).toBe('New car added to db success!!!');
});