(function diceGame() {
    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        var diceTotal;
        var diceRolls = 0;
        var dieNumOne;
        var dieNumTwo;

        var dice = {
            start: new Date(),
            rounds: [],
            roll: function roll() {
                var num = 0;
                num = Math.ceil(Math.random() * 6);
                return num;
            }
        }

        document.querySelector('.game-start').innerText;='Game Started '+ dice.start;

        document.querySelector('.dice aside:first-child').innerText = dice.roll();  // 5 3 1 6
        document.querySelector('.dice aside:last-child').innerText = dice.roll();

        dieNumOne=parseInt(document.querySelector('.dice aside:first-child').innerText);
        dieNumTwo=parseInt(document.querySelector('.dice aside:last-child').innerText);

        diceTotal = (dieNumOne+dieNumTwo)

        if (diceTotal === 7 || diceTotal === 11) {
            diceRolls++;
            document.querySelector('.result').innerText='Winner!';
        } else {
            diceRolls++;
            console.log('TRY AGAIN!');
        }

    });

})();
