class TelephoneTool {
  cleaner(tel) {
    this.tel = tel;

    if (!this.tel) throw new Error('Введите номер телефона');

    let telClean = String(this.tel).replace(/[\s()+-]/g, '');
    telClean = telClean.replace(/^8/, '7');

    if (/^\d{11}$/.test(telClean)) {
      return `+${telClean}`;
    }

    telClean = telClean.replace(/^\+/, '');

    if (/^\d{8,15}$/.test(telClean)) {
      return `+${telClean}`;
    }

    throw new Error('Неправильный формат номера телефона');
  }
}

export default TelephoneTool;
