import { Link, Route, Switch } from 'react-router-dom'


// nested routes
import Offers from "./Offers"
import { useState } from 'react'

export default function About() {
  // Ovde napraviti funkciju koja ce da togluje link. Da kada kliknem 'ovde' da on prikaze offers, pa kada kliknem opet da ga hajduje
  const [offers, setOffers] = useState('/offers');

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>
      <p
      >Proverite ponude 
        <Link to={`/about${offers}`} onClick={() => offers === '/offers' ? setOffers('') : setOffers('/offers')}> 
          {offers === '' && <span> vrati se</span>}
          {offers === '/offers' && <span> ovde</span>}
        </Link>
        .</p>
      {/* Ovde sada krece Offers */}
      <hr />
      {/* 
        Switch komponenta se koristi za omotavanje Route komponenti kako bi se osiguralo da se samo jedna od njih prikazuje u određenom trenutku. 
        Switch se koristi za mapiranje putanja na komponente i renderovanje samo prve putanje koja se poklapa. 
      */}
      <Switch>
        {/* Route mu dodje kao router-view, sada ce on unutar njega da prikaze offers */}
        <Route path="/about/offers">
          <Offers />
        </Route>
      </Switch>
    </div>
  )
}
