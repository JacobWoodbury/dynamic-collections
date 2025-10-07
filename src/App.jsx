import Movie from './components/Movie'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import data from './data.js'

export default function App() {
  const traverseMovies = data.map((film) =>{
    
    return(
      <Movie
        key= {film.id}
        name= {film.name}
        genre= {film.genre}
        actors = {film.actors}
        length = {film.length}
        releaseDate = {film.releaseDate.toDateString()}
        musical = {film.musical}
      />
    )
  })

  return (
    <>
      <Header/>
      
      <main className='main'>
      {traverseMovies}
      </main>
      
      <Footer/>
    </>
  )
}