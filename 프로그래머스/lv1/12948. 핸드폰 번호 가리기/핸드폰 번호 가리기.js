function solution(phone_number) {
    phone_number = [...phone_number]
    phone_number.splice(0, phone_number.length-4, '*'.repeat(phone_number.length-4));
    return phone_number.join('');
}