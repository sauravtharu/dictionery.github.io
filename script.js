// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
let loader = document.querySelector(".loader");
search.addEventListener("click", () => {
	if(userSearch.value <= 0){
		alert("Search Something")
	}
	else{
		definition.innerText = ""
		meaning.innerText = ""
		example.innerText = ""
		fetchData()
	}
})
async function fetchData(){
	let data = `https://api.dictionaryapi.dev/api/v2/entries/en/${userSearch.value}`;
	loader.setAttribute("id", "loading");
	let data1 = await fetch(data);
	let data2 = await data1.json()
	loader.removeAttribute("id", "loading");
	try{
		
		definition.innerText = data2[0].meanings[0].definitions[1].definition;
	}
	catch(e){
		
		definition.innerText = "Sorry Definition not found"
	}

	try{meaning.innerText = data2[0].meanings[0].definitions[0].definition;}
	catch(e){meaning.innerText = "Meaning Not Found"}

	try{example.innerText = data2[0].meanings[0].definitions[1].example;}
	catch(e){example.innerText = "Example Not Found"}
	console.log(data2)
}