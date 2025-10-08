import Movie from './components/Movie'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import data from './data.js'

export default function App() {
  data.sort((a,b)=>{
    return new Date(b.releaseDate) - new Date(a.releaseDate)
  })
  const traverseMovies = data.map((film) =>{
    if(!film.musical){
      return(<>
        <section className='card'>
          <Movie 
          key= {film.id}
          name= {film.name}
          genre= {film.genre}
          actors = {film.actors}
          length = {film.length}
          releaseDate = {film.releaseDate.toDateString()}
          musical = {film.musical}
        />
        </section>
        
      </>
      )
    }
    
  })

  const traverseMusicals = data.map((film) =>{
    if(film.musical){
      return(<>
      <section className = "card">
        <Movie 
        key= {film.id}
        name= {film.name}
        genre= {film.genre}
        actors = {film.actors}
        length = {film.length}
        releaseDate = {film.releaseDate.toDateString()}
        musical = {film.musical}
        />
      </section>
        
      </>
      )
    }
    
  })

  return (
    <>
      <Header/>
      
      <main className='main'>
      <div className='movies'>
        <h2>Movies:</h2>
        {traverseMovies}
      </div>
      <div className='musicals'>
        <h2>Musicals:</h2>
        {traverseMusicals}
      </div>

      </main>
      
      <Footer/>
    </>
  )
}