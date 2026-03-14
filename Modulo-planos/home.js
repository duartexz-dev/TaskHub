function ocultar() {
    let cardOcult = document.getElementById("cardOcultar")
    cardOcult.style.display = "none"
}
function Abrir() {
    let cardOcult = document.getElementById("cardOcultar")
    cardOcult.style.display = "grid"
}




function confirmtask() {

    let list = document.getElementById("lista-tasks")
    let name = document.getElementById("taskName").value
    let dia = document.getElementById("taskDay").value
    let hora = document.getElementById("taskHour").value

    let ids = [

        { task: "AleatoryName", id: ids.lenght + 1 }

    ]



    if (name && dia && hora) {

        list.innerHTML += `         <span class="task-name">
                                    ${name} 
                                </span>

                                     <span class="task-name">
                              Dia:  ${dia} 
                                </span>

                                      <span class="task-name">
                              Horário:  ${hora} 
                                </span>

                                <div class="task-actions">

                                    <button class="task-done">
                                        ✅
                                    </button>

                                    <button class="task-undone">
                                        ❌
                                    </button>

                                </div>

                            </div>

                            <br> <br>
`


    }



    //Biblioteca IF/ELSE com CHATGPT//

    if (dia == "segunda-feira" && hora == "04:00") {
        document.getElementById("seg-04").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "04:00") {
        document.getElementById("ter-04").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "04:00") {
        document.getElementById("qua-04").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "04:00") {
        document.getElementById("qui-04").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "04:00") {
        document.getElementById("sex-04").innerHTML = name
    }
    else if (dia == "sábado" && hora == "04:00") {
        document.getElementById("sab-04").innerHTML = name
    }
    else if (dia == "domingo" && hora == "04:00") {
        document.getElementById("dom-04").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "05:00") {
        document.getElementById("seg-05").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "05:00") {
        document.getElementById("ter-05").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "05:00") {
        document.getElementById("qua-05").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "05:00") {
        document.getElementById("qui-05").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "05:00") {
        document.getElementById("sex-05").innerHTML = name
    }
    else if (dia == "sábado" && hora == "05:00") {
        document.getElementById("sab-05").innerHTML = name
    }
    else if (dia == "domingo" && hora == "05:00") {
        document.getElementById("dom-05").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "06:00") {
        document.getElementById("seg-06").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "06:00") {
        document.getElementById("ter-06").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "06:00") {
        document.getElementById("qua-06").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "06:00") {
        document.getElementById("qui-06").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "06:00") {
        document.getElementById("sex-06").innerHTML = name
    }
    else if (dia == "sábado" && hora == "06:00") {
        document.getElementById("sab-06").innerHTML = name
    }
    else if (dia == "domingo" && hora == "06:00") {
        document.getElementById("dom-06").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "07:00") {
        document.getElementById("seg-07").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "07:00") {
        document.getElementById("ter-07").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "07:00") {
        document.getElementById("qua-07").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "07:00") {
        document.getElementById("qui-07").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "07:00") {
        document.getElementById("sex-07").innerHTML = name
    }
    else if (dia == "sábado" && hora == "07:00") {
        document.getElementById("sab-07").innerHTML = name
    }
    else if (dia == "domingo" && hora == "07:00") {
        document.getElementById("dom-07").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "08:00") {
        document.getElementById("seg-08").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "08:00") {
        document.getElementById("ter-08").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "08:00") {
        document.getElementById("qua-08").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "08:00") {
        document.getElementById("qui-08").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "08:00") {
        document.getElementById("sex-08").innerHTML = name
    }
    else if (dia == "sábado" && hora == "08:00") {
        document.getElementById("sab-08").innerHTML = name
    }
    else if (dia == "domingo" && hora == "08:00") {
        document.getElementById("dom-08").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "09:00") {
        document.getElementById("seg-09").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "09:00") {
        document.getElementById("ter-09").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "09:00") {
        document.getElementById("qua-09").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "09:00") {
        document.getElementById("qui-09").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "09:00") {
        document.getElementById("sex-09").innerHTML = name
    }
    else if (dia == "sábado" && hora == "09:00") {
        document.getElementById("sab-09").innerHTML = name
    }
    else if (dia == "domingo" && hora == "09:00") {
        document.getElementById("dom-09").innerHTML = name
    }
    else if (dia == "segunda-feira" && hora == "10:00") {
        document.getElementById("seg-10").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "10:00") {
        document.getElementById("ter-10").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "10:00") {
        document.getElementById("qua-10").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "10:00") {
        document.getElementById("qui-10").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "10:00") {
        document.getElementById("sex-10").innerHTML = name
    }
    else if (dia == "sábado" && hora == "10:00") {
        document.getElementById("sab-10").innerHTML = name
    }
    else if (dia == "domingo" && hora == "10:00") {
        document.getElementById("dom-10").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "11:00") {
        document.getElementById("seg-11").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "11:00") {
        document.getElementById("ter-11").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "11:00") {
        document.getElementById("qua-11").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "11:00") {
        document.getElementById("qui-11").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "11:00") {
        document.getElementById("sex-11").innerHTML = name
    }
    else if (dia == "sábado" && hora == "11:00") {
        document.getElementById("sab-11").innerHTML = name
    }
    else if (dia == "domingo" && hora == "11:00") {
        document.getElementById("dom-11").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "12:00") {
        document.getElementById("seg-12").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "12:00") {
        document.getElementById("ter-12").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "12:00") {
        document.getElementById("qua-12").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "12:00") {
        document.getElementById("qui-12").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "12:00") {
        document.getElementById("sex-12").innerHTML = name
    }
    else if (dia == "sábado" && hora == "12:00") {
        document.getElementById("sab-12").innerHTML = name
    }
    else if (dia == "domingo" && hora == "12:00") {
        document.getElementById("dom-12").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "13:00") {
        document.getElementById("seg-13").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "13:00") {
        document.getElementById("ter-13").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "13:00") {
        document.getElementById("qua-13").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "13:00") {
        document.getElementById("qui-13").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "13:00") {
        document.getElementById("sex-13").innerHTML = name
    }
    else if (dia == "sábado" && hora == "13:00") {
        document.getElementById("sab-13").innerHTML = name
    }
    else if (dia == "domingo" && hora == "13:00") {
        document.getElementById("dom-13").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "14:00") {
        document.getElementById("seg-14").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "14:00") {
        document.getElementById("ter-14").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "14:00") {
        document.getElementById("qua-14").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "14:00") {
        document.getElementById("qui-14").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "14:00") {
        document.getElementById("sex-14").innerHTML = name
    }
    else if (dia == "sábado" && hora == "14:00") {
        document.getElementById("sab-14").innerHTML = name
    }
    else if (dia == "domingo" && hora == "14:00") {
        document.getElementById("dom-14").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "15:00") {
        document.getElementById("seg-15").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "15:00") {
        document.getElementById("ter-15").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "15:00") {
        document.getElementById("qua-15").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "15:00") {
        document.getElementById("qui-15").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "15:00") {
        document.getElementById("sex-15").innerHTML = name
    }
    else if (dia == "sábado" && hora == "15:00") {
        document.getElementById("sab-15").innerHTML = name
    }
    else if (dia == "domingo" && hora == "15:00") {
        document.getElementById("dom-15").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "16:00") {
        document.getElementById("seg-16").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "16:00") {
        document.getElementById("ter-16").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "16:00") {
        document.getElementById("qua-16").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "16:00") {
        document.getElementById("qui-16").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "16:00") {
        document.getElementById("sex-16").innerHTML = name
    }
    else if (dia == "sábado" && hora == "16:00") {
        document.getElementById("sab-16").innerHTML = name
    }
    else if (dia == "domingo" && hora == "16:00") {
        document.getElementById("dom-16").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "17:00") {
        document.getElementById("seg-17").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "17:00") {
        document.getElementById("ter-17").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "17:00") {
        document.getElementById("qua-17").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "17:00") {
        document.getElementById("qui-17").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "17:00") {
        document.getElementById("sex-17").innerHTML = name
    }
    else if (dia == "sábado" && hora == "17:00") {
        document.getElementById("sab-17").innerHTML = name
    }
    else if (dia == "domingo" && hora == "17:00") {
        document.getElementById("dom-17").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "18:00") {
        document.getElementById("seg-18").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "18:00") {
        document.getElementById("ter-18").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "18:00") {
        document.getElementById("qua-18").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "18:00") {
        document.getElementById("qui-18").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "18:00") {
        document.getElementById("sex-18").innerHTML = name
    }
    else if (dia == "sábado" && hora == "18:00") {
        document.getElementById("sab-18").innerHTML = name
    }
    else if (dia == "domingo" && hora == "18:00") {
        document.getElementById("dom-18").innerHTML = name
    } else if (dia == "segunda-feira" && hora == "19:00") {
        document.getElementById("seg-19").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "19:00") {
        document.getElementById("ter-19").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "19:00") {
        document.getElementById("qua-19").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "19:00") {
        document.getElementById("qui-19").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "19:00") {
        document.getElementById("sex-19").innerHTML = name
    }
    else if (dia == "sábado" && hora == "19:00") {
        document.getElementById("sab-19").innerHTML = name
    }
    else if (dia == "domingo" && hora == "19:00") {
        document.getElementById("dom-19").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "20:00") {
        document.getElementById("seg-20").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "20:00") {
        document.getElementById("ter-20").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "20:00") {
        document.getElementById("qua-20").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "20:00") {
        document.getElementById("qui-20").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "20:00") {
        document.getElementById("sex-20").innerHTML = name
    }
    else if (dia == "sábado" && hora == "20:00") {
        document.getElementById("sab-20").innerHTML = name
    }
    else if (dia == "domingo" && hora == "20:00") {
        document.getElementById("dom-20").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "21:00") {
        document.getElementById("seg-21").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "21:00") {
        document.getElementById("ter-21").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "21:00") {
        document.getElementById("qua-21").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "21:00") {
        document.getElementById("qui-21").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "21:00") {
        document.getElementById("sex-21").innerHTML = name
    }
    else if (dia == "sábado" && hora == "21:00") {
        document.getElementById("sab-21").innerHTML = name
    }
    else if (dia == "domingo" && hora == "21:00") {
        document.getElementById("dom-21").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "22:00") {
        document.getElementById("seg-22").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "22:00") {
        document.getElementById("ter-22").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "22:00") {
        document.getElementById("qua-22").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "22:00") {
        document.getElementById("qui-22").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "22:00") {
        document.getElementById("sex-22").innerHTML = name
    }
    else if (dia == "sábado" && hora == "22:00") {
        document.getElementById("sab-22").innerHTML = name
    }
    else if (dia == "domingo" && hora == "22:00") {
        document.getElementById("dom-22").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "23:00") {
        document.getElementById("seg-23").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "23:00") {
        document.getElementById("ter-23").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "23:00") {
        document.getElementById("qua-23").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "23:00") {
        document.getElementById("qui-23").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "23:00") {
        document.getElementById("sex-23").innerHTML = name
    }
    else if (dia == "sábado" && hora == "23:00") {
        document.getElementById("sab-23").innerHTML = name
    }
    else if (dia == "domingo" && hora == "23:00") {
        document.getElementById("dom-23").innerHTML = name
    }

    else if (dia == "segunda-feira" && hora == "00:00") {
        document.getElementById("seg-00").innerHTML = name
    }
    else if (dia == "terça-feira" && hora == "00:00") {
        document.getElementById("ter-00").innerHTML = name
    }
    else if (dia == "quarta-feira" && hora == "00:00") {
        document.getElementById("qua-00").innerHTML = name
    }
    else if (dia == "quinta-feira" && hora == "00:00") {
        document.getElementById("qui-00").innerHTML = name
    }
    else if (dia == "sexta-feira" && hora == "00:00") {
        document.getElementById("sex-00").innerHTML = name
    }
    else if (dia == "sábado" && hora == "00:00") {
        document.getElementById("sab-00").innerHTML = name
    }
    else if (dia == "domingo" && hora == "00:00") {
        document.getElementById("dom-00").innerHTML = name
    }





}