import { Link } from "react-router-dom"
import { useState } from "react"

export default function Products() {
  const [randomArray] = useState(
    [0,1,2,3]
  )
  return (
    <div className="content">
      <h3>Hoodies</h3>
      <p>Test all</p>
      <div className="products">
        {randomArray.map(p => (
          <div key={p}>
            <p>{p}</p>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className="products">
        {[4,5,6,7].map(p => (
          <div key={p}>
            <p>{p}</p>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className="products">
        {[8,9,10,11].map(p => (
          <div key={p}>
            <p>{p}</p>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
