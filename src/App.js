class App {
  constructor(list) {
    this.key = "c4d79d0d1e50bf8bc86b7afbd240e4df";
    this.loadMovie();
  }

  loadMovie() {
    //request to the site for the movies data/list
    const req = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en&page=1`
    )
      .then((results) => results.json())
      .then((data) => {
        this.list = [];
        for (let i = 0; i < data.results.length; i++)
          this.list.push(
            new Movie(
              data.results[i].original_title,
              data.results[i].overview,
              data.results[i].poster_path,
              data.results[i].id
            )
          );
        this.displayCard(this.list);
      });
  }

  /*display(list) {
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
  }*/

  // insert card with movie data
  displayCard(list) {
    let str = "";
    for (let i = 0; i < list.length; i++)
      str += `<div class="col-sm"><div class="card" >
      <img src=https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
        list[i].img
      } class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${list[i].title}</h5>
        <p class="card-text">${list[i].reduceChracter()}</p>
        <div class="btn-holder">
        <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
      </div></div>`;
    document.getElementById("list").innerHTML = str;
  }

  // craete a list of movie=> result of search by title
  search() {
    let str = document.getElementById("search").value;
    let temp = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].title.toLowerCase().includes(str.toLowerCase()))
        temp.push(this.list[i]);
    }
    if (temp.length == 0)
      document.getElementById("list").innerHTML = "Nothing found";
    else {
      document.getElementById("list").innerHTML = "";
      this.displayCard(temp);
    }
    document.getElementById("search").value = "";
  }
}

class Movie {
  constructor(title, description, img, id, date) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.id = id;
    this.date = date;
  }
  movieToString() {
    let str =
      this.title + ", " + this.description + ", " + this.date + ", " + this.img;
    return str;
  }

  reduceChracter() {
    const max = 200;
    return this.description.slice(0, max) + "...";
  }
}

/*const list=[
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
]*/

const app = new App(list);
