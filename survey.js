const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`That's a pretty dope name, ${answer}`);
  
  rl.question(`What's an activity you like doing?`, (answer) => {
    console.log(`Wow, ${answer} sounds like it's a lot of fun :)`);

    rl.question(`What do you listen to while doing that?`, (answer) => {
      console.log(`${answer} sounds super nifty, I'll have to give it a listen!`);

      rl.question(`Which meal is your favourite (eg. breakfast, second breakfast, lunch, etc.)`, (answer) => {
        console.log(`${answer} is pretty awesome, isn't it?`);

        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          console.log(`${answer}... sounds delicious! You're making me hungry.`);

          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            console.log(`Wow! ${answer} is pretty hardcore!`);

            rl.question(`What is your quest?`, (answer) => {
              console.log(`${answer} eh... Two more answers you need to cross over The Gorge of Eternal Peril...`);

              rl.question(`What is your favourite colour?`, (answer) => {
                console.log(`${answer}, really? One more question you need to anwser before you cross The Gorge of Eternal Peril...`);

                rl.question('What is the airspeed velocity of an unladen swallow?', (answer) => {
                  console.log(`${answer}? I don't know that! AAAAHHHHhhh!`);

                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});