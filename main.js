let generate=document.querySelector('body .genera');
generate.addEventListener('click', function(){
    let nome=document.getElementById("name").value;
    let km=document.getElementById("km").value;
    let Feta=document.getElementById("eta").value;
    //Controllo ////////////////////////////////////
    if(km<0){
        alert("I chilometri sono negativi");
        document.location.reload();
    }
    if(km==0||km==""||nome==""){
        alert("Ti mancano dei dati");
        document.location.reload();
    }
    /////////////////////////////////////
    let prezzo= km * 0.27;
    switch (Feta){
        case 'Minorenne':
            prezzo-=((prezzo/100)*17);
            document.getElementById("type").innerHTML='Biglietto Scontato';
        break;
        case 'Over_65':
            prezzo-=((prezzo/100)*33);
            document.getElementById("type").innerHTML='Biglietto Scontato';
        break;
        case 'Maggiorenne':
            document.getElementById("type").innerHTML='Biglietto Standard';
        break;
        default:
            alert("non hai scelta la fascia d'eta");
            document.location.reload();
    }
    document.getElementById("username").innerHTML=nome;
    document.getElementById("prezzo").innerHTML=`${prezzo.toFixed(2)} &euro;`;
    document.getElementById("Carrozza").innerHTML=Math.floor((Math.random() * 10)+1);;
    document.getElementById("Rand_code").innerHTML=Math.floor((Math.random() * 100000)+10000);
})

let annulla=document.querySelector('body .annulla');
annulla.addEventListener('click', function(){
    document.getElementById("name").value= "";
    document.getElementById("km").value= "";
    document.getElementById("eta").value= "Select";
    document.getElementById("username").innerHTML="";
    document.getElementById("prezzo").innerHTML="";
    document.getElementById("Carrozza").innerHTML="";
    document.getElementById("Rand_code").innerHTML="";
    document.getElementById("type").innerHTML="";
})
