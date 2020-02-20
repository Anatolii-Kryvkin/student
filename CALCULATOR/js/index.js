let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    decimals = document.getElementById('decimal'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    minus = document.getElementById('c'),
    MemoryCurrentNumber = '0',
    MemoryNewNumber = false,
    MemoryPendionOperation = '';

for (let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent)
    }) 
}

for (let i=0; i<operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
    }) 
}

for (let i=0; i<clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id)
    });
}



decimals.addEventListener('click', decimal);

minus.addEventListener('click', minusPlus);

resultBtn.addEventListener('click', result);


function numberPress (number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        }
    };    
}

function operation(op) {
     let localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendionOperation === '+') {
            MemoryCurrentNumber  += parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '-') {
            MemoryCurrentNumber  -= parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '*') {
            MemoryCurrentNumber  *= parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);  
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }

        display.value = MemoryCurrentNumber;
        MemoryPendionOperation = op;
    }
}

function clear(id) {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryNewNumber = 0;
    MemoryPendingOperation = '';
}

function decimal() {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory ='0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }

        display.value = localDecimalMemory;
    }
}

function minusPlus() {
    let localMinusMemory = display.value;

    if ((localMinusMemory === '0') || (localMinusMemory = ' ')) {
        localMinusMemory = '-';
        MemoryNewNumber = false;
    } 
        display.value = localMinusMemory;
}
