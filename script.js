function carregarPessoa(arquivo){

fetch(arquivo)
.then(res => res.json())
.then(dados => {

document.getElementById("nome").innerText = dados.nome
document.getElementById("foto").src = dados.foto

document.getElementById("nascimento").innerText = dados.nascimento
document.getElementById("email").innerText = dados.email
document.getElementById("telefone").innerText = dados.telefone

document.getElementById("linkedin").href = dados.linkedin
document.getElementById("linkedin").innerText = dados.linkedin

document.getElementById("github").href = dados.github
document.getElementById("github").innerText = dados.github


// conhecimentos

let lista = document.getElementById("conhecimentos")
lista.innerHTML=""

dados.conhecimentos.forEach(c =>{

let li = document.createElement("li")
li.innerText = c

lista.appendChild(li)

})


// experiencias

let exp = document.getElementById("experiencias")
exp.innerHTML=""

dados.experiencias.forEach(e=>{

exp.innerHTML += `
<p>
<b>${e.cargo}</b> - ${e.empresa}<br>
${e.descricao}<br>
${e.inicio} - ${e.fim}
</p>
`

})


// formação

let form = document.getElementById("formacao")
form.innerHTML=""

dados.formacao.forEach(f=>{

form.innerHTML += `
<p>
<b>${f.curso}</b><br>
${f.instituicao}<br>
Conclusão: ${f.conclusao}
</p>
`

})

})

}