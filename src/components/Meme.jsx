import React from "react"

export default function Meme() {
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