(function diceGame() {
    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        // var x = 13;
        //              |--------------------------------x------------------------|
        var dieNumOne = document.querySelector('.dice aside:first-child').innerText;  // 3
        // document.querySelector('.dice aside:first-child').innerText = 42
        console.log(dieNumOne);

        var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;
        console.log(dieNumTwo);

        document.querySelector('.dice aside:first-child').innerText = dice.roll();  // 5 3 1 6
        document.querySelector('.dice aside:last-child').innerText = dice.roll();

    });

    var dice = {
        start: new Date(),
        rounds: [],
        roll: function roll() {
            var num = 0;
            num = Math.ceil(Math.random() * 6);
            console.log('I AM HERE');
            return num;
        }

        }

        console.log(dice.roll());



})();
