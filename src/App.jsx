import Movie from './components/Movie'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import data from './data.js'

function App() {
  const traverseData = data.map((film) =>{
    return(
      
    )
  })

  return (
    <>
      <Header/>

      <Movie
        name= {data.name}
        genre= {data.genre}
        actors = {data.actors}
        length = {data.length}
        releaseDate = {data.releaseDate}
        musical = {data.musical}
      />
      <Footer/>
    </>
  )
}

export default App
