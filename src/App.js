class App {
  constructor() {}
}

const app = new App();

class film {
  constructor(titolo, genere, anno) {
    this.titolo = titolo;
    this.genere = genere;
    this.anno = anno;
  }
  titolo;
  genere;
  anno;
}

var catalogo = [];

catalogo.push(new film("F&F1", "azione", "2000"));
catalogo.push(new film("Amore e OdioF&F1", "romantico", "2002"));
catalogo.push(new film("2030", "scientifico", "2004"));
catalogo.push(new film("Pippo e Pluto", "giallo", "2005"));
catalogo.push(new film("L'altro mondo", "fantasy", "2006"));
catalogo.push(new film("La casa Stregata", "horror", "2010"));
catalogo.push(new film("Corsa a tre", "azione", "2009"));
catalogo.push(new film("WWII", "storico", "1999"));
catalogo.push(new film("Sherlock on the moon", "poliziesco", "1899"));
catalogo.push(new film("Giungla13", "fiction", "2021"));

var obj = document.getElementById("list");
var ul = document.createElement("ul"); //creiamo l'elemento ul nel DOM
// ul.classList.add("lista")
//ul.classList.add("list-group list-group-flush")
for (let i = 0; i < catalogo.length; i++) {
  let li = ul.appendChild(document.createElement("li"));
  li.classList.add("list-group-item");
  li.appendChild(
    document.createTextNode(
      "Film " +
        i +
        ": " +
        catalogo[i].titolo +
        ", " +
        catalogo[i].genere +
        ", " +
        catalogo[i].anno
    )
  );
  ul.appendChild(li);
}
obj.appendChild(ul);
