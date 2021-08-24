const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (fav) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (powers) => {

                console.log(`So ${name}, in short, the activity you like doing is ${activity}, and you listen to ${music}, while doing it. Your favourite meal is ${meal}, and you like eating it with ${fav}. Your fav sport is ${sport}. Finally, you're all about: ${powers}`);
                rl.close()
            });
          });
        });
      });
    });
  });
});
