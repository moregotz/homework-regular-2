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

test('tel_4', () => {
    const telephoneNumber = '8(800)888-28-28';
    const tool = new TelephoneTool();
    expect(tool.cleaner(telephoneNumber)).toBe('+78008882828');
});

test('tel_5', () => {
    const telephoneNumber = null;
    const tool = new TelephoneTool();
    expect(() => tool.cleaner(telephoneNumber)).toThrow('Введите номер телефона');
});

test('tel_6', () => {
    const telephoneNumber = '+7(980)345-67-89';
    const tool = new TelephoneTool();
    expect(tool.cleaner(telephoneNumber)).toBe('+79803456789');
});

test('tel_7 ', () => {
    const telephoneNumber = '491234567890';
    const tool = new TelephoneTool();
    expect(tool.cleaner(telephoneNumber)).toBe('+491234567890');
});
