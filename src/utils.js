let isNumber = (val) => {
    let reg = /^\d+(\.\d+)?$/;
    return reg.test(val);
};

let isString = (val) => {
    let reg = /^[0-9a-zA-Z]+$/;
    return reg.test(val);
};

export default {
    'isNumber': isNumber,
    'isString': isString
}