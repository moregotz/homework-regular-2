import TelephoneTool from '../src/index.js';

test('tel_1', () => {
    const telephoneNumber = 88005553535;
    const tool = new TelephoneTool();
    const result = tool.cleaner(telephoneNumber);
    expect(result).toBe('+78005553535');
})

test('tel_2', () => {
    const telephoneNumber = 64211234567;
    const tool = new TelephoneTool();
    const result = tool.cleaner(telephoneNumber);
    expect(result).toBe('+64211234567');
})

test('tel_3', () => {
    const telephoneNumber = 38763;
    const tool = new TelephoneTool();
    expect(() => tool.cleaner(telephoneNumber)).toThrow('Неправильный формат номера телефона');
});
