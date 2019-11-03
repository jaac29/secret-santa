window.onload = function()
{
	drawList();
};

var give = ['Tony','Jorge','Esperanza','David','Dalia','Argenis','Alex',];
var receive = give.concat();
var peopleWrap = document.getElementById('peopleWrap');
var people = document.getElementById('people');
var choose = document.getElementById('choose');
var result = document.getElementById('result');
var close = document.getElementById('close');
var exceptions = document.getElementById('exceptions');

var jorHates = 'Decorations, socks, scarfs, beanies, gloves';
var davHates = 'tools, wallmart clothes, boxers, socks';
var aleHates = 'clothing';
var tonHates = 'games';
var argHates = 'rings';
var dalHates = 'feathers';
var espHates = 'pants';

function drawList()
{
	people.innerHTML = '<option value="">Who are you?</option>';
	for (var i = give.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = give[i];
		people.appendChild(option);
	}
}

function selectPerson(person) 
{
	var name = give[person];
	var nameIndex = receive.indexOf(name);
	
	if(nameIndex >= 0) 
	{
		receive.splice(nameIndex, 1);
	}
	var recipient = Math.floor((Math.random() * receive.length));
	var recipientName = receive[recipient];
	
	receive.splice(recipient, 1);
	give.splice(person, 1);

	if(nameIndex >= 0)
	{
		receive.push(name);
	}
	result.innerHTML = "<h2>" + name + ", you&rsquo;ve got " + recipientName + "!</h2>";
  if(recipientName == "Alex")
    {
      exceptions.innerHTML = recipientName + " hates " + aleHates;
    }
  else if(recipientName == "Argenis")
    {
      exceptions.innerHTML = recipientName + " hates " + argHates;
    }
  else if(recipientName == "Dalia")
    {
      exceptions.innerHTML = recipientName + " hates " + dalHates;
    }
  else if(recipientName == "David")
    {
      exceptions.innerHTML = recipientName + " hates " + davHates;
    }
  else if(recipientName == "Esperanza")
    {
      exceptions.innerHTML = recipientName + " hates " + espHates;
    }
  else if(recipientName == "Jorge")
    {
      exceptions.innerHTML = recipientName + " hates " + jorHates;
    }
  else {
    exceptions.innerHTML = recipientName + " hates " + tonHates;
  }
  
	close.innerHTML = "<h3>💥 Destroy this message. 💥</h3>";
	if(give.length > 0)
	{
		drawList();
	}
}

choose.onclick = function()
{
	if(people.value)
	{
		selectPerson(people.value);
	}
};

close.onclick = function()
{
	result.innerHTML = "";
  exceptions.innerHTML = "";
	close.innerHTML = "";
  if(give.length == 0){
 peopleWrap.parentNode.removeChild(peopleWrap);
		choose.parentNode.removeChild(choose);
		result.innerHTML = "<h2>All done!</h2>";
		close.innerHTML = "";
	}
};