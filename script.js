function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("lighty")

  // pegar a tag img
  const image = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("lighty")) {
    // se estiver no ligthy mode, adicionar  a imagem light
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto da bandeira da policia militar do estado do ceará"
    )
  } else {
    // se estiver sem ligthy mode, mander a imagem normal
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Vinicius no TAF guarda na faculdade ESTACIO"
    )
  }

  //da para trocar todo esse codigo por isso tudo
  // if (html.classList.contains("lighty")) {
  //   html.classList.remove("lighty")
  // } else {
  //   html.classList.add("lighty")
  // }
  // por //html.classList.toggle("lighty")
}
