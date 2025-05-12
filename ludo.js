let dice = document.querySelector(".dice");
let newNo;
let chance = 0 ;
let green1= document.querySelector(".green1");
let green2=document.querySelector(".green2");
let green3=document.querySelector(".green3");
let green4=document.querySelector(".green4");
let green1_val = 0;
let green2_val = 0;
let green3_val = 0;
let green4_val = 0;
// let img=document.createEement("img");
//   img.src="rock.png";
// let played = false;
let playedred = true;
let playedblue = true;
let playedyellow = true ;
let playedgreen = true ;
const moveGreen1 =()=>{
  if(!playedgreen){
    if(green1_val===0 && newNo===6) green1_val=1,playedgreen=true;
    else if(green1_val>0){
    green1_val +=newNo;
    if(green1_val>51){
      let extra = green1_val - 51;
      green1_val = 52 + extra ;
    }
    }
  console.log(green1_val);
  let div = document.querySelector(`.box${green1_val}`);
  div.append(green1);
  green1.classList.add("box");
  playedgreen=true;
  }
};
const moveGreen2 =()=>{
    if(!playedgreen){
      if(green2_val===0 && newNo===6) green2_val=1,playedgreen=true;
      else if(green2_val>0){
    green2_val +=newNo;
    if(green2_val>51){
      let extra = green2_val - 51;
      green2_val = 52 + extra ;
    }
      }
  let div = document.querySelector(`.box${green2_val}`);
  div.append(green2);
  green1.classList.add("box");
  playedgreen=true;
  }
};
const moveGreen3 =()=>{
    if(!playedgreen){
      if(green3_val===0 && newNo===6) green3_val=1,playedgreen=true;
      else if(green3_val>0){
    green3_val +=newNo;
    if(green3_val>51){
      let extra = green3_val - 51;
      green3_val = 52 + extra ;
    }
      }
  let div = document.querySelector(`.box${green3_val}`);
  div.append(green3);
  green1.classList.add("box");
  playedgreen=true;
  }
};
const moveGreen4 =()=>{
    if(!playedgreen){
      if(green4_val===0 && newNo===6) green4_val=1,playedgreen=true;
      else if(green4_val>0){
    green4_val +=newNo;
    if(green4_val>51){
      let extra = green4_val - 51;
      green4_val = 52 + extra ;
    }
      }
  let div = document.querySelector(`.box${green4_val}`);
  div.append(green4);
  green1.classList.add("box");
  playedgreen=true;
}
};
let yellow1= document.querySelector(".yellow1");
let yellow2=document.querySelector(".yellow2");
let yellow3=document.querySelector(".yellow3");
let yellow4=document.querySelector(".yellow4");
let yellow1_val = 0;
let yellow2_val = 0;
let yellow3_val = 0;
let yellow4_val = 0;
// let playedyellow = false;
const moveyellow1 =()=>{
  if(!playedyellow){
    if(yellow1_val===0 && newNo===6) yellow1_val=14,playedyellow=true;
    else if(yellow1_val>0){
  yellow1_val +=newNo;
  if(yellow1_val>52){
    let extra = yellow1_val - 52;
    yellow1_val = extra ;
  }
  if(yellow1_val>12 && yellow1_val < 14){
    let extra = yellow1_val - 12 ;
    yellow1_val = 58 + extra ;
  }
    }
  console.log(yellow1_val);
  let div = document.querySelector(`.box${yellow1_val}`);
  div.append(yellow1);
  yellow1.classList.add("box");
  playedyellow=true;
  }
};
const moveyellow2 =()=>{
    if(!playedyellow){
      if(yellow2_val===0 && newNo===6) yellow2_val=14,playedyellow=true;
      else if(yellow2_val>0){
    yellow2_val +=newNo;
    if(yellow2_val>52){
      let extra = yellow2_val - 52;
      yellow2_val = extra ;
    }
    if(yellow2_val>12 && yellow1_val < 14){
      let extra = yellow2_val - 12 ;
      yellow2_val = 58 + extra ;
    }
      }
  let div = document.querySelector(`.box${yellow2_val}`);
  div.append(yellow2);
  yellow1.classList.add("box");
  playedyellow=true;
  }
};
const moveyellow3 =()=>{
    if(!playedyellow){
      if(yellow3_val===0 && newNo===6) yellow3_val=14,playedyellow=true;
      else if(yellow3_val>0){
    yellow3_val +=newNo;
    if(yellow3_val>52){
      let extra = yellow3_val - 52;
      yellow3_val = extra ;
    }
    if(yellow3_val>12 && yellow1_val < 14){
      let extra = yellow3_val - 12 ;
      yellow3_val = 58 + extra ;
    }
      }
  let div = document.querySelector(`.box${yellow3_val}`);
  div.append(yellow3);
  yellow1.classList.add("box");
  playedyellow=true;
  }
};
const moveyellow4 =()=>{
    if(!playedyellow){
      if(yellow4_val===0 && newNo===6) yellow4_val=14,playedyellow=true;
      else if(yellow4_val>0){
    yellow4_val +=newNo;
    if(yellow4_val>52){
      let extra = yellow4_val - 52;
      yellow4_val = extra ;
    }
    if(yellow4_val>12 && yellow1_val < 14){
      let extra = yellow4_val - 12 ;
      yellow4_val = 58 + extra ;
    }
      }
  let div = document.querySelector(`.box${yellow4_val}`);
  div.append(yellow4);
  yellow1.classList.add("box");
  playedyellow=true;
}
};
let blue1= document.querySelector(".blue1");
let blue2=document.querySelector(".blue2");
let blue3=document.querySelector(".blue3");
let blue4=document.querySelector(".blue4");
let blue1_val = 0;
let blue2_val = 0;
let blue3_val = 0;
let blue4_val = 0;
const moveblue1 =()=>{
  if(!playedblue){
    if(blue1_val===0 && newNo===6) blue1_val=27,playedblue=true;
    else if(blue1_val>0){
  blue1_val +=newNo;
  if(blue1_val>52){
    let extra = blue1_val - 52;
    blue1_val = extra ;
  }
  if(blue1_val>25 && blue1_val < 27){
    let extra = blue1_val - 25 ;
    blue1_val = 63 + extra ;
  }
    }
  console.log(blue1_val);
  let div = document.querySelector(`.box${blue1_val}`);
  div.append(blue1);
  blue1.classList.add("box");
  playedblue=true;
  }
};
const moveblue2 =()=>{
    if(!playedblue){
      if(blue2_val===0 && newNo===6) blue2_val=27,playedblue=true;
      else if(blue2_val>0){
    blue2_val +=newNo;
    if(blue2_val>52){
      let extra = blue2_val - 52;
      blue2_val = extra ;
    }
    if(blue2_val>25 && blue1_val < 27){
      let extra = blue2_val - 25 ;
      blue2_val = 63 + extra ;
    }
      }
  let div = document.querySelector(`.box${blue2_val}`);
  div.append(blue2);
  blue1.classList.add("box");
  playedblue=true;
  }
};
const moveblue3 =()=>{
    if(!playedblue){
      if(blue3_val===0 && newNo===6) blue3_val=27,playedblue=true;
      else if(blue3_val>0){
    blue3_val +=newNo;
    if(blue3_val>52){
      let extra = blue3_val - 52;
      blue3_val = extra ;
    }
    if(blue3_val>25 && blue1_val < 27){
      let extra = blue3_val - 25 ;
      blue3_val = 63 + extra ;
    }
      }
  let div = document.querySelector(`.box${blue3_val}`);
  div.append(blue3);
  blue1.classList.add("box");
  playedblue=true;
  }
};
const moveblue4 =()=>{
    if(!playedblue){
      if(blue4_val===0 && newNo===6) blue4_val=27,playedblue=true;
      else if(blue4_val>0){
    blue4_val +=newNo;
    if(blue4_val>52){
      let extra = blue4_val - 52;
      blue4_val = extra ;
    }
    if(blue4_val>25 && blue1_val < 27){
      let extra = blue4_val - 25 ;
      blue4_val = 63 + extra ;
    }
      }
  let div = document.querySelector(`.box${blue4_val}`);
  div.append(blue4);
  blue1.classList.add("box");
  playedblue=true;
}
};
let red1= document.querySelector(".red1");
let red2=document.querySelector(".red2");
let red3=document.querySelector(".red3");
let red4=document.querySelector(".red4");
let red1_val = 0;
let red2_val = 0;
let red3_val = 0;
let red4_val = 0;
const movered1 =()=>{
  if(!playedred){
    if(red1_val === 0 && newNo === 6) red1_val=40,playedred=true;
    else if(red1_val > 0){
  red1_val += newNo;
  if(red1_val>52){
    let extra = red1_val - 52;
    red1_val = extra ;
  }
  if(red1_val>38 && red1_val < 40){
    let extra = red1_val - 38 ;
    red1_val = 71 + extra ;
  }
    }
  console.log(red1_val);
  let div = document.querySelector(`.box${red1_val}`);
  div.append(red1);
  red1.classList.add("box");
  playedred=true;
  }
};
const movered2 =()=>{
    if(!playedred){
      if(red2_val===0 && newNo===6) red2_val=40,playedred=true;
      else if(red2_val>0){
    red2_val +=newNo;
    if(red2_val>52){
      let extra = red2_val - 52;
      red2_val = extra ;
    }
    if(red2_val>38 && red1_val < 40){
      let extra = red2_val - 38 ;
      red2_val = 71 + extra ;
    }
      }
  let div = document.querySelector(`.box${red2_val}`);
  div.append(red2);
  red1.classList.add("box");
  playedred=true;
  }
};
const movered3 =()=>{
    if(!playedred){
      if(red3_val===0 && newNo===6) red3_val=40,playedred=true;
      else if(red3_val>0){
    red3_val +=newNo;
    if(red3_val>52){
      let extra = red3_val - 52;
      red3_val = extra ;
    }
    if(red3_val>38 && red1_val < 40){
      let extra = red3_val - 38 ;
      red3_val = 71 + extra ;
    }
      }
  let div = document.querySelector(`.box${red3_val}`);
  div.append(red3);
  red1.classList.add("box");
  playedred=true;
  }
};
const movered4 =()=>{
    if(!playedred){
      if(red4_val===0 && newNo===6) red4_val=40,playedred=true;
      else if(red4_val>0){
    red4_val +=newNo;
    if(red4_val>52){
      let extra = red4_val - 52;
      red4_val = extra ;
    }
    if(red4_val>38 && red1_val < 40){
      let extra = red4_val - 38 ;
      red4_val = 71 + extra ;
    }
      }
  let div = document.querySelector(`.box${red4_val}`);
  div.append(red4);
  red1.classList.add("box");
  playedred=true;
}
};
const playgame=()=>{
  if(chance === 0){
    playedgreen = false;
    dice.style.backgroundColor="green";
    if(green1 === 0 && green2 === 0 && green3 === 0 && green4 ===0 && newNo!==6)
      {
        chance++;
        
      }else{
  green1.addEventListener("click",moveGreen1);
  green2.addEventListener("click",moveGreen2);
  green3.addEventListener("click",moveGreen3);
  green4.addEventListener("click",moveGreen4);
  chance++;
  
      }
  }else if(chance===1){
 
     playedyellow = false ;


    dice.style.backgroundColor="yellow";
    if(yellow1 === 0 && yellow2 === 0 && yellow3 === 0 && yellow4 === 0 && newNo!==6){
      chance++;
      
    }else{
  yellow1.addEventListener("click",moveyellow1);
  yellow2.addEventListener("click",moveyellow2);
  yellow3.addEventListener("click",moveyellow3);
  yellow4.addEventListener("click",moveyellow4);
  chance++;
  
    }
  }
  else if(chance === 2){
  
  playedblue = false;
  

    dice.style.backgroundColor="blue";
    if(blue1 === 0 && blue2 === 0 && blue3 === 0 && blue4 === 0 && newNo!==6){
      chance++;
      
    }else{
    blue1.addEventListener("click",moveblue1);
  blue2.addEventListener("click",moveblue2);
  blue3.addEventListener("click",moveblue3);
  blue4.addEventListener("click",moveblue4);
  dice.style.backgroundColor="blue";
  chance++;
    }
  }else  if(chance ===3 ) {
   playedred = false ;

    dice.style.backgroundColor="red";
    if(red1 === 0 && red2 === 0 && red3 === 0 && red4 === 0 && newNo!==6){
      chance = 0;
      
    }else{
  red1.addEventListener("click",movered1);
  red2.addEventListener("click",movered2);
  red3.addEventListener("click",movered3);
  red4.addEventListener("click",movered4);
  dice.style.backgroundColor="red";
    chance=0;
    }
  }
};
const generateNo = ()=>{
  let no = Math.floor(Math.random()*6);
  dice.innerText = no +1;
  newNo = no +1 ;
  played=false;
  playgame();
};
dice.style.backgroundColor="green";
dice.addEventListener("click",generateNo);



//last changes played was changedwith played red,green,blue,yellow and in playgame fUNCTION VALUES WERE CHANFED