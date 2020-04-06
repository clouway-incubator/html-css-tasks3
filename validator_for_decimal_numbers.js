function validate() {

    var input = document.getElementById('number');
    let number = regexNumbers(input.value);

    if (number) {
        alert("Checking the first part is correct, but using it alone would be wrong.If you have two parts - is true.");
    }
    else if (!number) {
        alert("False");
    }
    else if (input.value === '') {
        alert("False");
    }
}

function regexNumbers(number) {
    const regex = /^(-?\d{1,10}[.|,]\d{1,5}|-?\d{1,10})$/
    return regex.test(number);
}

function validatorNumbers() {
    let model = [
        ['1477410236.11111', true],
        ['20.78', true],
        ['200.15', true],
        ['500', false],
        ['700.0', true],
        ['-1000', true],
        ['-78.90', true],
        ['15569896984', false],
        ['12121458787.784589', false],
        ['12588787874,14574', false],
        ['6584.784569', false],
        ['7454,747486123', false],
        ['.11', false],
        ['1010.', false],
        [',4587', false],
        ['3654,', false],
        ['10,20,30', false],
        ['10.20.30', false],
        ['kojojj', false],
        ['hvhv.', false],
        ['.jbj', false],

    ];
    model.forEach((test) => {
        let result = regexNumbers(test[0]);
        expect(result).toBe(test[1], "expected regexNumbers('" + test[0] + "') to be " + test[1] + ", but was: " + result);
    });
}
