const registry = new FinalizationRegistry((heldValue) => {
    console.log(arguments);
});

function f1() {
    let closureValue = { a: 123 };
    registry.register(closureValue, "closureValue");

    return 1;
}


let m = f1();

// m(5);

// m = null;
