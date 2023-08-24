import {useState, useEffect} from 'react'

import './App.css'

const optionsOfPurchase = {Option1: []}
const sizes = ['S', 'M', 'L', 'XL']

// Replace your code here
const App = () => {
  const [object, changeObject] = useState({})

  const option1 = () => (
    <div className="options">
      <div className="frstOption">
        <div className="priceBox">
          <p className="para1">1 Pair</p>
          <p className="heading1">DKK 195.00</p>
        </div>

        <h1 className="discount1">50% OFF</h1>
      </div>
    </div>
  )

  const option2 = () => (
    <div className="secondBox">
      <div className="frstOption">
        <div className="priceBox">
          <p className="para1">1 Pair</p>
          <p className="heading1">DKK 195.00</p>
        </div>
        <h1 className="discountCost">DKK 195.00</h1>
        <div className="dBox">
          <h1 className="deals">Most Popular</h1>
          <h1 className="discount1">40% OFF</h1>
        </div>
      </div>

      <div className="sizesBox">
        <div className="sizeBox">
          <p className="sizePara">Size</p>
          <div className="sizes">
            <h1 className="selectOption">#1</h1>
            <select className="optionss">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
            </select>
          </div>
          <div className="sizes">
            <h1 className="selectOption">#2</h1>
            <select className="optionss">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
            </select>
          </div>
        </div>

        <div className="sizeBox">
          <p className="sizePara">Colour</p>
          <div className="sizes">
            <select className="optionss1">
              <option>Orange</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Blue</option>
            </select>
          </div>
          <div className="sizes">
            <select className="optionss1">
              <option>Orange</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Blue</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const option3 = () => (
    <div className="options">
      <div className="frstOption">
        <div className="priceBox">
          <p className="para1">3 Pair</p>
          <p className="heading1">DKK 528.00</p>
        </div>

        <h1 className="discount1">60% OFF</h1>
      </div>
    </div>
  )

  return (
    <div className="background">
      <div className="details">
        <div className="topHeadingSection">
          <hr className="line" />
          <h1 className="topHeading">Bundle & Save</h1>
          <hr className="line" />
        </div>

        <div className="optionsSection">
          <div className="firstOption">
            <input type="Radio" id="option1" name="selectOption" />
            <label htmlFor="option1" className="firstOptions">
              {option1()}
            </label>
          </div>
          <div className="firstOption2">
            <input type="Radio" id="option2" name="selectOption" />
            <label htmlFor="option2" className="firstOptions">
              {option2()}
            </label>
          </div>
          <div className="firstOption3">
            <input type="Radio" id="option3" name="selectOption" />
            <label htmlFor="option3" className="firstOptions">
              {option3()}
            </label>
          </div>
        </div>
      </div>
      <div className="op">
        <h1 className="headingss">Free 2 Day shipping</h1>
        <h1>Total DKK 360.00</h1>
      </div>

      <button className="button">+Add to Cart</button>
    </div>
  )
}

export default App
