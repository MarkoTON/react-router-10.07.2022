import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Offers() {
  const [items] = useState([
    { title: 'Ninja Hoodie', price: 21.99 },
    { title: 'Ninja Sneakers', price: 34.99 },
    { title: 'Ninja Tee', price: 12.99 }
  ])

  return (
    <div style={{ background: 'lightgreen' }}>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map((item, p) => (
          <Link to={`/products/${p}`} key={item.title + p + '_' + Math.random()}>
            <div>
              <img src="https://via.placeholder.com/350x200" alt="product" />
              <h4>{item.title}</h4>
              <p>£{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
