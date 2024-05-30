import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src="./public/vite.svg"
            className="header--public"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 clasName="header--project"> React Course - Project 3</h4>
        </header>
    )
}