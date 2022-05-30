import Header from './components/Header'
import Billboard from './components/Billboard'
import Titles from './components/Titles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Billboard />

        <Titles />

        <Footer />
      </main>
    </div>
  )
}

export default App