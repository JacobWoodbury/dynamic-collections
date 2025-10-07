import Movie from './components/Movie'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import data from './data.js'

export default function App() {
  const traverseMovies = data.map((film) =>{
    if(!film.musical){
      return(<>
        
        <Movie
          key= {film.id}
          name= {film.name}
          genre= {film.genre}
          actors = {film.actors}
          length = {film.length}
          releaseDate = {film.releaseDate.toDateString()}
          musical = {film.musical}
        />
      </>
      )
    }
    
  })

  const traverseMusicals = data.map((film) =>{
    if(film.musical){
      return(<>
        <Movie
          key= {film.id}
          name= {film.name}
          genre= {film.genre}
          actors = {film.actors}
          length = {film.length}
          releaseDate = {film.releaseDate.toDateString()}
          musical = {film.musical}
        />
      </>
      )
    }
    
  })

  return (
    <>
      <Header/>
      
      <main className='main'>
      <h2>Movies:</h2>
      {traverseMovies}
      <h2>Musicals:</h2>
      {traverseMusicals}
      </main>
      
      <Footer/>
    </>
  )
}