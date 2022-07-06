const url = "http://localhost:8080/api/";
const header =  {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  }


async function sendFiles(){
  const files = document.getElementById("files").files;
  
  for (let file of files){
    let formData = new FormData();
    formData.append("file",file);
  
    header.body = formData; 
  
    const res = await fetch(url+"fileUpload",header);
    printTxts();
  }
  
}

async function printTxts(){
  const lista = document.getElementById("lista");
  lista.innerHTML="";
  const res = await fetch(url+"getAllFiles");
  const txts = await res.json();
  txts.forEach(txt => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href",url+"apiCall/"+txt);
    a.innerHTML = txt;
    li.appendChild(a);
    lista.appendChild(li);
  }
  );
}



printTxts();