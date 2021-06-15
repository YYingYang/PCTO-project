class App {
  constructor(list) {
    this.list=list
    this.display(this.list)
  }
  display(list) {
    let obj = document.getElementById("list");
    let ul = document.createElement("ul");
    for (let i = 0; i < list.length; i++) {
      let li = ul.appendChild(document.createElement("li"));
      li.classList.add("list-group-item");
      li.appendChild(
        document.createTextNode(
          "Film " + i + ": " + list[i].movieToString()
        )
      );
      ul.appendChild(li);
    }
    obj.appendChild(ul);
  }
  
  ricerca() {
    let str = document.getElementById("search").value;
    let temp=[];
    for (let i = 0; i < this.list.length; i++) {
      if(this.list[i].title.toLowerCase().includes(str.toLowerCase()))
        temp.push(this.list[i])
    }
    if(temp.length==0)
      document.getElementById("list").innerHTML = "nulla";
    else{
      document.getElementById("list").innerHTML=""  
      this.display(temp)
    } 
    document.getElementById("search").value=""
  }
  
}

class Movie {
  constructor(title, category, year) {
    this.title = title;
    this.category = category;
    this.year = year;
  }
  movieToString(){
    let str = this.title + ", " + this.category + ", " + this.year
    return str;
  }
}

const list=[
  new Movie("F&F1", "azione", "2000"),
  new Movie("Amore e Odio", "romantico", "2002"),
  new Movie("2030", "scientifico", "2004"),
  new Movie("Pippo e Pluto", "giallo", "2005"),
  new Movie("L'altro mondo", "fantasy", "2006"),
  new Movie("La casa Stregata", "horror", "2010"),
  new Movie("Corsa a tre", "azione", "2009"),
  new Movie("WWII", "storico", "1999"),
  new Movie("Sherlock on the moon", "poliziesco", "1899"),
  new Movie("Giungla13", "fiction", "2021"),
]

const app = new App(list);




