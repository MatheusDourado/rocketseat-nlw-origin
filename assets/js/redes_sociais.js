//Usuario das redes sociais
const links_redes_socias = {
    linkedin: "in/matheus-dourado-viana",
    instagram: "matheus.douradov",
    facebook: "matheus.dourado",
    whatsapp: 5561985107678
}

/*
function showMeSomething(variavel_parametro) { // ===> Nome da variavel do parametro "texto"
    alert("Meu instagram é " + "@" + variavel_parametro)
}

showMeSomething(links_redes_socias.instagram) // ===> Variavel do parametro recebendo valor
*/

function mudanca_links_redes_sociais() {
    // document.getElementById('nome_usuario').textContent = "teste 2"     // ===> Acessando o id na DOM é mudando o texto com .textContent
    // nome_usuario.textContent = "teste 3"    // ===> mesma coisa do document.getElementById()

    for (let li of midias_sociais.children) {
        if (li.getAttribute('class') != 'whatsapp'){
            const social = li.getAttribute('class')
            li.children[0].href = `https://${social}.com/${links_redes_socias[social]}`
        } else {
            const social = li.getAttribute('class')
            li.children[0].href = `https://wa.me/${links_redes_socias[social]}`
        }
    }
}

mudanca_links_redes_sociais()