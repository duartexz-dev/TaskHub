function confirmar() {

    let nome = document.getElementById("Nome").value
    let idade = Number(document.getElementById("idade").value)
    let btn = document.getElementById("btn")

    if (nome && idade >= 18 && idade <= 60) {

        btn.style.visibility = "visible"
        alert("Dados Confirmados !!")

    } else if (!nome || !idade) {

        alert("Preenche seus Dados Completos PORFAVOR!")

    } else if (idade >= 60) {

        alert("Coloque seus Dados Verdadeiros Por favor")

    } else if (idade < 18) {

        alert("Dados Confirmados coleguinha!")

    } else {

        alert("Dados Inválidos!!!!")

    }

}