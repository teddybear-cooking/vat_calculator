import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  
  // Calculate gross price (price after discount)
  const calculateGrossPrice = () => {
    const priceNum = parseFloat(price) || 0
    const discountNum = parseFloat(discount) || 0
    const discountAmount = (priceNum * discountNum) / 100
    return priceNum - discountAmount
  }
  const calculateVAT = () => {
    const grossPrice = calculateGrossPrice()
    return grossPrice * 0.07
  }

return (
    <>
      <div className="card">
        
        <div>
          <div>
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          
          <div>
            <label>Discount: </label>
            <input
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          
          <div>
            <p>Gross Price: ${Math.round(calculateGrossPrice())}</p>
            <p>VAT (7%): ${Math.round(calculateVAT())}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
