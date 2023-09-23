import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="header">
        <a href="https://foxhole.wiki.gg/wiki/Factions#/" target="_blank">
          <img src="./src/assets/667px-ColonialFlag.webp" className="flag"/>
        </a>
        <h1>Colonial Tank Index</h1>
        <h4>click on icons for wiki</h4>
      </div>
      <div class="container">
        <div className="card">
          <h1>H-5 "Hatchet"</h1>
          <a href="https://foxhole.fandom.com/wiki/H-5_%E2%80%9CHatchet%E2%80%9D" target="_blank">
            <img src="./src/assets/H5_Hatchet_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>H-8 "Kranesca"</h1>
          <a href="https://foxhole.fandom.com/wiki/H-8_%E2%80%9CKranesca%E2%80%9D" target="_blank">
            <img src="./src/assets/H-8_Kranesca_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>H-10 "Pelekys"</h1>
          <a href="https://foxhole.fandom.com/wiki/H-10_%E2%80%9CPelekys%E2%80%9D" target="_blank">
            <img src="./src/assets/H-10_Pelekys_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>85K-b "Falchion"</h1>
          <a href="https://foxhole.fandom.com/wiki/85K-b_%E2%80%9CFalchion%E2%80%9D" target="_blank">
            <img src="./src/assets/85K-b_Falchion_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>85K-a "Spatha"</h1>
          <a href="https://foxhole.fandom.com/wiki/85K-a_%E2%80%9CSpatha%E2%80%9D" target="_blank">
            <img src="./src/assets/85K-a_Spatha_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>85V-g "Talos"</h1>
          <a href="https://foxhole.fandom.com/wiki/85V-g_%E2%80%9CTalos%E2%80%9D" target="_blank">
            <img src="./src/assets/MediumTankLargeCIcon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>86K-a "Bardiche"</h1>
          <a href="https://foxhole.fandom.com/wiki/86K-a_%E2%80%9CBardiche%E2%80%9D" target="_blank">
            <img src="./src/assets/86K-a_Bardiche_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>86K-c "Ranseur"</h1>
          <a href="https://foxhole.fandom.com/wiki/86K-c_%E2%80%9CRanseur%E2%80%9D" target="_blank">
            <img src="./src/assets/86K-c_Ranseur_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>Lance-36</h1>
          <a href="https://foxhole.fandom.com/wiki/Lance-36" target="_blank">
            <img src="./src/assets/Lance-36_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
        <div className="card">
          <h1>Lance-25 "Hasta"</h1>
          <a href="https://foxhole.fandom.com/wiki/Lance-25_%22Hasta%22" target="_blank">
            <img src="./src/assets/Lance-25_Vehicle_Icon.webp" className="logo"/>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
