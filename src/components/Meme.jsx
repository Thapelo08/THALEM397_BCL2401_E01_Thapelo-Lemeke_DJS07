import React from "react"
import memesData from "../memesData.js"


export default function Meme() {

    function getMemeImgage() {
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
       console.log(url)

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
                  />  
            </label>    
            </div>
                <div>
                  <label>
                    <input type="text"
                placeholder="Bottom text"
                className="form--input"
                 />
                  </label>
                    </div>
                <button className="form--Button"
                >
                    Get a new meme image 🖼
                    </button>
            </form>
        </main>
    )
}