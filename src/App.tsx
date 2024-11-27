import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// import Card from "./Card";
// import IconVite from "./assets/vite.svg";
// import * as Image from "./assets";

// interface IUserData {
//   name: string;
//   address: string;
// }

function App() {
  const myName = "miftah";
  const [update, setUpdate] = useState<number>(1);
  const [numberOfClick, setNumberOfClick] = useState<number>(0);
  // const [dataUser, setDataUser] = useState<IUserData | string>();

  console.log('render : ', {update, numberOfClick});

  useEffect(() => {
    console.log("ini useEffect render");
    setNumberOfClick(update + 1);
  }, [update]);

  return (
    <>
      <Header/>
      <div className="min-h-screen">
        <h1 className="text-2xl">Hello {myName}</h1>
        update variable : {update}
        <p>number of click {numberOfClick}</p>

        {/* <Card metadata={{
            title:<h2 className="text-2xl font-bold">Card pertama</h2>,
            description:"Card pertama ini awesome",
            amount: 10 + update,
          }}
        >
          <img src={Image.DCPutih} alt="icon" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!
        </Card> */}
        
        <button 
          onClick={() => {
            const newUpdate = update + 1;
            setUpdate(newUpdate);
            console.log('click', {newUpdate})
          }}
            >
              Click
        </button>
        
        {/* <button 
          onClick={() => 
            setDataUser({
              name: "Jhon",
              address: "unknown",
        })}>Click</button> */}
      </div>
      <Footer/>
    </>
  )
};

export default App;