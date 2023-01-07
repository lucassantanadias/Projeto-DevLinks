function toggleMode() {
  //"document" é a representação do nosso documento.
  //".documentElement" permite que eu acesse os meus elementos html
  const html = document.documentElement

  //na lista html, contém light?
  if (html.classList.contains("light")) {
    html.classList.remove("light") //se conter, remova
  } else {
    html.classList.add("light") //senão conter, adicione
  }

  //pode-se colocar de uma maneira simplifica:
  // html.classList.toggle('light')
  //colocando o toggle, ele executa todo o código de maneira automática

  /*trocando a imagem*/

  //procure no id="profile" a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver light mod, adicione a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de lucas usando oculos escuro.")
    //setAttribute é para eu modicar um atributo, no caso, o src e alt.
  } else {
    //se tiver sem light mod, manter a imagem normal.
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de Lucas tirada no espelho.")
  }
}
