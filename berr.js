var backgroundFaded = false;
var clicks = 0;
var currCycle = 0;



window.onload = function(){
    console.log("Javascript Loaded");
    
    makeQuote("csgobutthole.com better");

    var audio = new Audio('berrsong.mp3');
    

    
    document.addEventListener("click", function(){

        fadeOutQuote();
        
      });

      setTimeout(function(){ if(backgroundFaded == false){fadeOutQuote();}}, 6000);

	  audio.play();
}

function fadeOutQuote(){
    backgroundFaded = true;
    var divQuote = document.getElementById("divFadeMe");
    divQuote.classList.remove("visible");
    divQuote.classList.add("hidden");
}

function makeQuote(query){
    console.log(query);
    var matrixquote =  "<blockquote><q>My life was better before I knew about csgobutthole.com they stole my money :( </q><cite>berr, again.</cite></blockquote>";	
    document.getElementById("divQuoteHere").innerHTML = matrixquote;
    let quote = document.querySelector("blockquote q"),
	quotewords = quote.innerText.split(" "),
	wordCount = quotewords.length;
	quote.innerHTML = "";
	var queryPlusPeriod = query+".";
	for (let i=0; i < wordCount; i++) {
		if(query.includes(quotewords[i]) || queryPlusPeriod.includes(quotewords[i])){
	  quote.innerHTML += '<span style="color:red">'+quotewords[i]+"</span>";
		}else{
	  quote.innerHTML += '<span style="color:white">'+quotewords[i]+"</span>";
	}

	  if (i < quotewords.length - 1) {
		quote.innerHTML += " ";
	  }
	}
	quotewords = document.querySelectorAll("blockquote q span");
    fadeWords(quotewords);
}

  function getRandom(min, max) {
	return Math.random() * (max - min) + min;
  }

  function fadeWords(quotewords) {
	 let firstDelay = 0;
	Array.prototype.forEach.call(quotewords, function(word) {
		firstDelay+=200;
	  let animate = word.animate([{
		opacity: 0,
		filter: "blur("+getRandom(2,5)+"px)"
	  }, {
		opacity: 1,
		filter: "blur(0px)"
	  }], 
	  { 
		duration: 1500,
		delay: getRandom(firstDelay,firstDelay+600),
		fill: "forwards"
	  } 
	 )
    })
   
  }