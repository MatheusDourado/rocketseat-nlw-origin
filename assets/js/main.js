const links_redes_socias = {
    linkedin: "in/matheus-dourado-viana",
    instagram: "matheus.douradov",
    facebook: "matheus.dourado",
    whatsapp: 5561985107678,
    github: "MatheusDourado"
}


function mudanca_links_redes_sociais() {
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


function buscar_dados_github_perfil() {
    const url = `https://api.github.com/users/${links_redes_socias.github}`
    
    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            document.getElementsByClassName('avatar')[0].children[1].src = dados.avatar_url
            nome_usuario.textContent = dados.name
            document.getElementsByClassName('container')[0].children[1].children[1].href = dados.html_url
            document.getElementsByClassName('container')[0].children[1].children[1].children[1].textContent = dados.login
            document.getElementsByClassName('container')[0].children[2].children[0].textContent = dados.bio
        })
}
buscar_dados_github_perfil()
