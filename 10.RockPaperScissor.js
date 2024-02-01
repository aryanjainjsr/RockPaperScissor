
let compmove='';
let score = JSON.parse(localStorage.getItem('score'));

updatescoreele();

function updatescoreele(){
    document.querySelector('.js-score').innerHTML = (`Wins: ${score.win}. Loses: ${score.loses}.Ties : ${score.tie}`);
}

if(score===null){
    score={
        win:0,
        loses:0,
        tie:0
    }
}

function rand(){
    const randomno=Math.random();
    if(randomno>=0 && randomno<=1/3)
    {
        compmove='Rock';
    }
    else if(randomno>1/3 && randomno<2/3)
    {
        compmove='Paper';
    }
    else
    {
        compmove= 'Scissor';
    }
}

function playgame(playermove){
    rand();
    let result='';

    if(playermove==='Rock'){
        if(compmove==='Rock')
        {
            result='Tie';
        }
        else if (compmove==='Paper')
        {
            result='You Lose';
        }
        else if(compmove==='Scissor')
        {
            result='You Win';
        }
        console.log(result);
    }

    else if(playermove==='Paper'){
        if(compmove==='Paper')
        {
            result='Tie';
        }
        else if (compmove==='Scissor')
        {
            result='You Lose';
        }
        else if(compmove==='Rock')
        {
            result='You Win';
        }
    }

    else if (playermove==='Scissor'){
        // rand();
        console.log(compmove);

        // let result='';
        if(compmove==='Scissor')
        {
            result='Tie';
        }
        else if (compmove==='Rock')
        {
            result='You Lose';
        }
        else if(compmove==='Paper')
        {
            result='You Win';
        }
        console.log(result);
    }
    if(result==='You Win'){
        score.win+=1;
    }
    else if (result==='You Lose'){
        score.loses+=1;
    }
    else if(result==='Tie'){
        score.tie+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

   updatescoreele();

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-move').innerHTML = (`You 
        <img src="${playermove}-emoji.png" class="move-icon" alt="">
        <img src="${compmove}-emoji.png" class="move-icon" alt="">
        Comp.`);

//             alert(`You picked ${playermove} .Computer picked ${compmove}.${result}
// Wins: ${score.win}. Loses: ${score.loses}.Ties : ${score.tie}`);
}