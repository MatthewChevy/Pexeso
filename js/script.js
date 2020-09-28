

const squares = [].slice.call( document.getElementsByClassName('squares') ), // htmlCollection squares to array
       mainWrapper = document.getElementsByClassName( 'main-wrapper '),
       blackScreen = document.getElementById('black-screen'),
       startButton = document.getElementById('start-button'),
       picForPexeso = [ 'url(../img/javascript.svg)', 'url(../img/python.svg)','url(../img/angular.svg)','url(../img/ruby.svg)','url(../img/react.svg)','url(../img/swift.svg)','url(../img/vue.svg)','url(../img/git.svg)'];
let openCard = [];

shuffle();
startButton.addEventListener( 'click', function(){
    
    blackScreen.style.display = 'none';
    startButton.style.display = 'none';
    
});
       
squares.forEach( square => { // foreach item from array 'squares' save like 'square'
square.addEventListener( 'click', function(){ // after click do
    
    openCard.push( this ); // after click push element in to the array
    
        const that = this, // simply way like save 'this' to variable
              pictureURL = picForPexeso[ that.classList[2].substr( 5 ) ]; // from squares take last number of class ( .pair-0/7 ) and this number use like index for get value in array
              
              if( that.classList.contains('openCard')){ // Close and Open card
                setTimeout(
                    that.classList.add('closeCard'), // if card is turned/open, after click close it
                    that.classList.remove('openCard'),
                    500);
            } else {
                setTimeout(  
                    that.classList.remove('closeCard'),
                    that.classList.add('openCard'), // turn card after click
                        500);
                    }

            function autoCloseRemove( openCard ){ 

                if( openCard.length === 2 ){ // max value which is possible because only 2 image can be opened at a time
    /*loop*/        openCard.forEach( openDude => {
                        if( openCard[0].classList[2] === openCard[1].classList[2]){ //if 2 pairs have same class
                            setTimeout( function () {
                                openDude.classList.add('opacity');
                            }, 2500);
                            setTimeout( function () {
                                openDude.style.visibility = 'hidden';
                            }, 3500);
                        } else {
                            setTimeout( function() { 
                                openDude.classList.add('closeCard'), // every opendude which is open, 
                                openDude.classList.remove('openCard'); // remove open class and add remove after 3s
                            }, 2500);
    
                            setTimeout( function () {
                                openDude.style.backgroundImage = 'none'; // remove backgroundImage
                            }, 3000);
                        }
                    });
                    openCard.length = 0; // clear array when function it's over
                };
            }; autoCloseRemove( openCard );


            function addPicture( pictureURL ){ 

                // if backgroundImage value is equal zero or none and if at the same time 'that' contains class opencard 
                if ( that.style.backgroundImage == 0 || 'none' && that.classList.contains('openCard') ){ 

                    setTimeout( function () {  
                        that.style.backgroundImage = pictureURL; // add backgroundImage
                    }, 500);
                };           
            }; addPicture( pictureURL );   

 
 
    });             
}); 

function shuffle() {
    var i;
    let randArr = [17];
    for (i =1; i < 17; i++){ 
        randomNumber = Math.floor(Math.random() * 10 - 2 ); //do pola naplni random cisla od 0 - 7 pre parove skupiny a zaroven kontroluje či tam už take nieje
        if(randomNumber < 0) {
            randomNumber *= -1;
        }
        let pairCount = 0;
        for(j=1; j < 17; j++){
            if (randArr[j] === randomNumber ){
                pairCount++;
            }
        }
        
        if(pairCount < 2){ //ak tam je menej ako 2x  tak ho priradi ak nie prebehne to znova
            randArr[i] = randomNumber;
        } else {
            i--;
        }  
    }
    
    for (i =1; i < 17; i++){
        var obj = document.getElementsByClassName("item-" + i);
        obj[0].className += ' pair-' + randArr[i];  
    }
}
    


/* BACKUP
     
squares.forEach( square => { // foreach item from array 'squares' save like 'square'
    square.addEventListener( 'click', function(){ // after click do
        
        const that = this, // simply way like save 'this' to variable
              pictureURL = picForPexeso[ that.classList[1].substr( 5 ) ]; // from squares take last number of class ( .pair-0/7 ) and this number use like index for get value in array
              
              
              if( that.classList.contains('openCard')){ // Close and Open card
                setTimeout(
                    that.classList.add('closeCard'), // if card is turned/open, after click close it
                    that.classList.remove('openCard'),
                    500);
            } else {
                setTimeout(  
                    that.classList.remove('closeCard'),
                    that.classList.add('openCard'), // turn card after click
                        500);
                    }
                    
            arrayOfOpenCard.push( this ); // after click push element in to the array

            function autoClose( arrayOfOpenCard ){ 

                if( arrayOfOpenCard.length === 2 ){ // max value which is possible because only 2 image can be opened at a time
                    arrayOfOpenCard.forEach( openDude => {
        
                        setTimeout( function() { 
                            openDude.classList.add('closeCard'), // every opendude which is open, 
                            openDude.classList.remove('openCard'); // remove open class and add remove after 3s
                        }, 2500);

                        setTimeout( function () {
                            openDude.style.backgroundImage = 'none'; // remove backgroundImage
                        }, 3000);
                });
                    arrayOfOpenCard = []; // clear array when function it's over
                };
            };

            function addPicture( pictureURL ){ 

                // if backgroundImage value is equal zero or none and if at the same time 'that' contains class opencard 
                if ( that.style.backgroundImage == 0 || 'none' && that.classList.contains('openCard') ){ 

                    setTimeout( function () {  
                        that.style.backgroundImage = pictureURL; // add backgroundImage
                    }, 500);
                };           
            };    

    // Acivate functions
        addPicture( pictureURL );
        autoClose( arrayOfOpenCard );    
    });             
}); 
*/