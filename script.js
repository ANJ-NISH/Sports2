let scores={player1:0,player2:0,player3:0,player4:0};

function OpeningCeremony(scores,Race100M)
{
    console.log("Welcome to the Annual Sports Day Event. We have four top players competing against each other");
    Race100M(scores, LongJump);
}

function Race100M(scores, LongJump)
{
    console.log("Start of 100M Race event");
    setTimeout(()=>{

        let t1=parseFloat((Math.random()*1+9).toFixed(2));
        let t2=parseFloat((Math.random()*1+9).toFixed(2));
        let t3=parseFloat((Math.random()*1+9).toFixed(2));
        let t4=parseFloat((Math.random()*1+9).toFixed(2));

        let sarr=[{player: "player1",time: t1},{player:"player2",time: t2},{player:"player3",time: t3},{player:"player4", time:t4}];
        sarr.sort((a,b)=> a.time-b.time);

        for(let i=0;i<4;i++)
        {
            if(i===0)
            {
              let player=sarr[i].player;
              scores[player]=200;
            }
            if(i===1)
            {
              let player=sarr[i].player;
              scores[player]=150;
            }
            if(i==2)
            {
                let player=sarr[i].player;
                scores[player]=100;
            }
            if(i===3)
            {
                let player=sarr[i].player;
                scores[player]=50;
            }
        }

        console.log("Scores after 100M race: ",scores);

        LongJump(scores, HighJump);

    },3000);
}


function LongJump(scores, HighJump)
{
  console.log("Start of Long Jump Event");
  setTimeout(()=>{
   
    let colors=['red','blue','yellow','green'];
    let colorscore={'red':200,'blue':150,'yellow':100,'green':50};

    let color1= colors[Math.floor(Math.random()*4)];
    let p1score=colorscore[color1];
    
    colors=colors.filter((ele)=> ele!==color1)

    let color2= colors[Math.floor(Math.random()*3)];
    let p2score=colorscore[color2];

    colors=colors.filter((ele)=> ele!==color2)

    let color3= colors[Math.floor(Math.random()*2)];
    let p3score=colorscore[color3];

    colors=colors.filter((ele)=> ele!==color3)
    
    let p4score=colorscore[colors[0]];
    scores.player1+=p1score;
    scores.player2+=p2score;
    scores.player3+=p3score;
    scores.player4+=p4score;

    console.log("Scores after Long Jump: ",scores);

    HighJump(scores, AwardCeremony);
  },2000);
}

function HighJump(scores, AwardCeremony)
{
    console.log("Start of High Jump event");
    let colorarr=['red','blue','green','yellow'];

    let highestscorecolor=colorarr[Math.floor(Math.random()*4)];

    let colorguess= prompt("Player1 enter your choice for color with highest score among red,green,blue,yellow:");

    while(colorguess!=='red' && colorguess!=='blue' && colorguess!=='green' && colorguess!=='yellow')
    {
        colorguess= prompt("Player1 choose among red,green,blue,yellow:");
    }

    if(colorguess===highestscorecolor)
    {
        scores.player1+=100;
    }

    colorguess= prompt("Player2 enter your choice for color with highest score among red,green,blue,yellow:");

    while(colorguess!=='red' && colorguess!=='blue' && colorguess!=='green' && colorguess!=='yellow')
        {
            colorguess= prompt("Player2 choose among red,green,blue,yellow:");
        }

    if(colorguess===highestscorecolor)
    {
        scores.player2+=100;
    }
    colorguess= prompt("Player3 enter your choice for color with highest score among red,green,blue,yellow:");

    while(colorguess!=='red' && colorguess!=='blue' && colorguess!=='green' && colorguess!=='yellow')
        {
            colorguess= prompt("Player3 choose among red,green,blue,yellow:");
        }

    if(colorguess===highestscorecolor)
    {
        scores.player3+=100;
    }

    colorguess= prompt("Player4 enter your choice for color with highest score among red,green,blue,yellow:");

    while(colorguess!=='red' && colorguess!=='blue' && colorguess!=='green' && colorguess!=='yellow')
        {
            colorguess= prompt("Player4 choose among red,green,blue,yellow:");
        }

    if(colorguess===highestscorecolor)
    {
        scores.player4+=100;
    }
    console.log("Scores after High Jump: ",scores);

    AwardCeremony(scores);
}

function AwardCeremony(scores)
{
  console.log("Scores at the end of the competition:", scores);

  let arr=[{player:"player1",score:scores.player1}, {player:"player2",score:scores.player2}, {player:"player3",score:scores.player3},{player:"player4",score:scores.player4}];

  arr.sort((a,b)=> a.score-b.score);

  console.log(`1st position goes to ${arr[3].player}, 2nd position goes to ${arr[2].player}, 3rd position goes to ${arr[1].player} and 4th position goes to ${arr[0].player}`);

  alert(`Winner of the competition is ${arr[3].player}`);

  alert("That's the end of the sports day. Thank You all");
}

OpeningCeremony(scores,Race100M);