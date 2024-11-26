import Card from "./Card"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const myName = "miftah";

  return (
    <>
      <Header/>
      <div className="min-h-screen">
        <Card metadata={{
          title:"Card pertama",
          description:"Card pertama ini awesome"
          }}
        />
        <h1 className="text-2xl">Hello {myName}</h1>
      </div>
      <Footer/>
    </>
  )
}

export default App
