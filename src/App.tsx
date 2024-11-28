import { useEffect, useMemo, useRef, useState } from "react";

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
  const myName = useMemo(() => {
    function getMyName() {
      return "Miftah"
    }

    return getMyName();
  }, []);
  // let [dogImage, setDogImage] = useState(null);

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const updateCount = useRef<number>(0);
  // const [update, setUpdate] = useState<number>(1);
  // const [numberOfClick, setNumberOfClick] = useState<number>(update + 1);
  // const [dataUser, setDataUser] = useState<IUserData | string>();

  // console.log({paragraphRef});
  console.log({updateCount});

  // console.log('render : ', {update, numberOfClick});

  // useEffect(() => {
  //   console.log("ini useEffect render");
  //   setNumberOfClick(update + 1);
  // }, [update]);

  // Call API using useEffect
  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //   .then(response => response.json())
  //   .then(data => setDogImage(data.message))
  // }, []);

  return (
    <>
      <Header/>
      <div className="min-h-screen">
        {/* {dogImage && <img className="w-28" src={dogImage}></img>} */}
        
        <h1
          onClick={() => {
            alert("Update count " + updateCount.current);
          }}
          className="text-2xl"
          >
            Hello {myName}
          </h1>

        {/* update variable : {update} */}
        <p ref={paragraphRef}>number of click</p>
        <p>number of click : {updateCount.current}</p>

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
            // const newUpdate = update + 1;
            // setUpdate(newUpdate);

            updateCount.current += 1;

            // if (paragraphRef.current) {
            //   paragraphRef.current.innerHTML = "ini adalah test";
            // }
              
            // console.log('click', {newUpdate})
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