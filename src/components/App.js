// create your App component here
import React from 'react'
import { useEffect, useState } from 'react'
const APIURL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImage(data.message))
    }, [])

    if(!image) {
        return <p>Loading...</p>
    }
  return (
    <div>
        
        <img alt="A Random Dog" src={image}/>

    </div>
  )
}

export default App