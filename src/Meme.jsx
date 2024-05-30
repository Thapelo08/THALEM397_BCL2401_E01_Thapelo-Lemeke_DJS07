import React from "react"
import memesData from "../memesData.jsx"


export default function Meme() {

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    const [allMemes, setAllMemes] = React.useState(memesData)

     React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
    
     }, [])
    

    function getMemeImage() {
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
       setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
       }))

    }

 function handleChange(event) {
    const {name, value} = event.target
       setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
       })
       )
 }

    return (
        <main>
            <form className="form">
                <div>  
                    <label>
                       <input
                 type="text"
                 placeholder="Top text" 
                 className="form--input"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                  />  
            </label>    
            </div>
                <div>
                  <label>
                    <input type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                 />
                  </label>
                    </div>
                <button className="form--Button"
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                    </button>
            </form>
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}