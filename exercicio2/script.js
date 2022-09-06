let idade = prompt("Qua a sua idade?")
let ensino = prompt("Fez o ensino médio?")
let faculdade = prompt("Faz outra faculdade?")

if(idade >= 18){
    console.log("você é maior de idade")
}else{
	console.log("você é menor de idade")
};

if(ensino === "sim"){
    console.log("você fez o ensino médio")
}else{
    console.log("você não fez o ensino médio")
};

if(faculdade === "sim"){
    console.log("você faz outra faculdade")
}else{
    console.log("você não faz outra faculdade")
};
