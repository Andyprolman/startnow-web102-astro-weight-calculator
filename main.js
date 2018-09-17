// Write your JavaScript code here!


var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];


//This is the function that takes out pluto
function removePluto(){
        var element = document.getElementById('planets');
        element.parentNode.removeChild(element);
        
        
        var body =  document.getElementsByTagName('body');
        var planetList = document.createElement('select');
        planetList.id = 'planets';
        body[0].appendChild(planetList);
        
    
    for (var i = 1; i < planets.length; i++) {
        var planetDropDown = document.getElementById('planets');
        var selectList = document.createElement('option');
        selectList.id = 'myOption';
        planetDropDown.appendChild(selectList);
    
        var option = document.createElement('option');
        option.value = planets[i][0];
        option.text = planets[i][0];
        selectList.appendChild(option);
    }

}
// function that adds pluto back
function addPluto(){

    var element = document.getElementById('planets');
        element.parentNode.removeChild(element);
        
        
        var body =  document.getElementsByTagName('body');
        var planetList = document.createElement('select');
        planetList.id = 'planets';
        body[0].appendChild(planetList);
        
    
    for (var i = 0; i < planets.length; i++) {
        var planetDropDown = document.getElementById('planets');
        var selectList = document.createElement('option');
        selectList.id = 'myOption';
        planetDropDown.appendChild(selectList);
    
        var option = document.createElement('option');
        option.value = planets[i][0];
        option.text = planets[i][0];
        selectList.appendChild(option);
    }


}





var checkBox = document.getElementById('checkbox');

function clickBox(){ 
    document.getElementById('checkbox').onclick = function(){
    if(checkBox.checked){
        removePluto();
    }
   else{
       addPluto();
   }
   }
}
clickBox();




function addPlanet(newPlanet, multipier){
    var newPlanet = document.getElementById('name').value;
    var multiplier = document.getElementById('multiplier').value;
    planets.push([newPlanet, multiplier]);

    var element = document.getElementById('planets');
        element.parentNode.removeChild(element);
        
        
        var body =  document.getElementsByTagName('body');
        var planetList = document.createElement('select');
        planetList.id = 'planets';
        body[0].appendChild(planetList);
        
    
    for (var i = 0; i < planets.length; i++) {
        var planetDropDown = document.getElementById('planets');
        var selectList = document.createElement('option');
        selectList.id = 'myOption';
        planetDropDown.appendChild(selectList);
    
        var option = document.createElement('option');
        option.value = planets[i][0];
        option.text = planets[i][0];
        selectList.appendChild(option);
    }
    return planets;

}

function addButton(){
    document.getElementById('add-button').onclick = function(){
        addPlanet();
        
    }
}

addButton();


//planets.reverse();
        var body = document.getElementsByTagName('body');
        var planetList = document.createElement('select');
        planetList.id = 'planets';
        body[0].appendChild(planetList);
  
for (var i = 0; i < planets.length; i++) {
    
    var planetDropDown = document.getElementById('planets');
    var selectList = document.createElement('option');
    selectList.id = 'myOption';
    planetDropDown.appendChild(selectList);

    var option = document.createElement("option");
    option.value = planets[i][0];
    option.text = planets[i][0];
    selectList.appendChild(option);

    
    
    

}
function calculateWeight(weight, planetName){
    for(var i = 0; i < planets.length; i++){
        if(planetName === planets[i][0]){

        var newWeight = weight * planets[i][1];
        
        return newWeight;
        }
    }
}


function handleClickEvent(e){
    var weight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var results = calculateWeight(weight, planetName);
    document.getElementById('output').innerHTML = `If you were on ${planetName}, you would weigh ${results}lbs!`;
    

}


function clickButton(){
   document.getElementById('calculate-button').onclick = function(){
       handleClickEvent()
   }
   
   

}


clickButton();




