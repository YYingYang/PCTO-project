class App {
  constructor(list) {
   
    this.key='c4d79d0d1e50bf8bc86b7afbd240e4df'
    this.loadMovie()
    // console.log(this.list.length)
    
    // this.display(this.list)
    
  }

  loadMovie() {
    //request to the site for the movies data/list
    (async()=>{
      const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en&page=1`);
      const data = await req.json();
      console.log(data.results[0].id); 
      console.log(data.results[0].img); 
      this.list=[]

      const img_path = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/images?api_key=${this.key}&language=en`);
      const imgpath = await img_path.json();
      console.log(imgpath)

      // copy usefull data in a list of movie
      for(let i=0; i<data.results.length; i++)
        this.list.push(new Movie(data.results[i].original_title,
           data.results[i].overview,
           data.results[i].poster_path,
           data.results[i].id,
           ))
      console.log(this.list)
      this.displayCard(this.list)
    })()
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
  displayCard(list){
    let str=""
    for(let i = 0; i < list.length; i++)
      str+=`<div class="card" style="width: 18rem; max-height: 30rem; min-widht: 30rem  ">
      <img src=https://www.themoviedb.org/t/p/w600_and_h900_bestv2${list[i].img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${list[i].title}</h5>
        <p class="card-text">${list[i].description}</p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
      </div>`
    document.getElementById("list").innerHTML=str  
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
      this.displayCard(temp)
    } 
    document.getElementById("search").value=""
  }
}

class Movie {
  constructor(title, /*category, year,*/ description, img, id, date) {
    this.title = title;
    // this.category = category;
    // this.year = year;
    this.description=description;
    this.img=img;
    this.id=id;
    this.date=date;
  }
  movieToString(){
    let str = this.title + ", " + this.description + ", " + this.date + ", " + this.img
    return str;
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




