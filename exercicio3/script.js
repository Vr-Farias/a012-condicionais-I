let qualNac = prompt("Qual a sua nacionalidade?").toLowerCase();
let nacionalidade = {
    nac1: "brasileira",
    nac2: "argentina",
    nac3: "uruguaia",
    nac4: "chilena",
    nac5: "colombiana"
};

if(nacionalidade.nac1 === qualNac){
    console.log("Encontrada")
}else if(nacionalidade.nac2 === qualNac){
    console.log("Encontrada")
}else if(nacionalidade.nac3 === qualNac){
    console.log("Encontrada")
}else if(nacionalidade.nac4 === qualNac){
    console.log("Encontrada")
}else if(nacionalidade.nac5 === qualNac){
    console.log("Encontrada")
}else{
    console.log("Não encontrada")
};
