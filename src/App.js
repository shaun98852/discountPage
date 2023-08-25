import {useState} from 'react'
// import {Link} from 'react-router-dom'
// import Popup from 'reactjs-popup'

import './App.css'

const optionsOfPurchase = {
  option1: {pairs: 1, price: 195, discount: 50},
  option2: {
    pairs: 2,
    firstShoeSize: 'S',
    secondShoeSize: 'S',
    firstShoeColor: 'Orange',
    secondShoeColor: 'Orange',
    price: 345,
    discount: 40,
  },
  option3: {pairs: 3, price: 528, discount: 60},
}

const sizes = ['S', 'M', 'L', 'XL']

// Replace your code here
const App = () => {
  const [requiredObject, changeObject] = useState({price: 0})
  const [optionSelected, changeOption] = useState('')
  const [purchaseObject, changePurchase] = useState(optionsOfPurchase)
  const [firstShoeSize, changeFirstSize] = useState('S')
  const [secondShoeSize, changeSecondSize] = useState('S')
  const [firstShoeColor, changeFirstColor] = useState('Orange')
  const [secondShoeColor, changeSecondColor] = useState('Orange')

  const changeFirstShoeSize = event => {
    const requiredOption = {
      pairs: 2,
      firstShoeSize: event.target.value,
      secondShoeSize,
      firstShoeColor,
      secondShoeColor,
      price: 345,
      discount: 40,
    }

    changeFirstSize(event.target.value)

    changePurchase({
      option1: optionsOfPurchase.option1,
      option3: optionsOfPurchase.option3,
      option2: requiredOption,
    })
  }

  const changeSecondShoeSizes = event => {
    const requiredOption = {
      pairs: 2,
      firstShoeSize,
      secondShoeSize: event.target.value,
      firstShoeColor,
      secondShoeColor,
      price: 345,
      discount: 40,
    }

    changeSecondSize(event.target.value)

    changePurchase({
      option1: optionsOfPurchase.option1,
      option3: optionsOfPurchase.option3,
      option2: requiredOption,
    })
  }

  const changeFirstShoeColor = event => {
    const requiredOption = {
      pairs: 2,
      firstShoeSize,
      secondShoeSize,
      firstShoeColor: event.target.value,
      secondShoeColor,
      price: 345,
      discount: 40,
    }

    changeFirstColor(event.target.value)

    changePurchase({
      option1: optionsOfPurchase.option1,
      option3: optionsOfPurchase.option3,
      option2: requiredOption,
    })
  }

  const changeSecondShoeColor = event => {
    const requiredOption = {
      pairs: 2,
      firstShoeSize,
      secondShoeSize,
      firstShoeColor,
      secondShoeColor: event.target.value,
      price: 345,
      discount: 40,
    }

    changeSecondColor(event.target.value)

    changePurchase({
      option1: optionsOfPurchase.option1,
      option3: optionsOfPurchase.option3,
      option2: requiredOption,
    })
  }

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
          <p className="heading1">DKK 345.00</p>
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
            <select className="optionss" onChange={changeFirstShoeSize}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">Xl</option>
            </select>
          </div>
          <div className="sizes">
            <h1 className="selectOption">#2</h1>
            <select className="optionss" onChange={changeSecondShoeSizes}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">Xl</option>
            </select>
          </div>
        </div>

        <div className="sizeBox">
          <p className="sizePara">Colour</p>
          <div className="boxesColor">
            <div className="sizes">
              <select className="optionss1" onChange={changeFirstShoeColor}>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
              </select>
            </div>
            <div className="sizes">
              <select className="optionss1" onChange={changeSecondShoeColor}>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
              </select>
            </div>
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

  const getRadioInput = event => {
    const selectedOption = event.target.value
    changeOption(selectedOption)
    changeObject(optionsOfPurchase[selectedOption])
  }

  //   const sendDetails = () => {
  //     <Cart details={requiredObject} />
  //   }

  //   Object.keys(requiredObject).forEach(key => {
  //     // console.log('key', key)
  //     console.log(key, requiredObject[key])
  //   })

  //   const PopupButton = () => (
  //     <div className="popup-container">
  //       <Popup
  //         modal
  //         trigger={
  //           <button type="button" className="button">
  //             +Add to Cart
  //           </button>
  //         }>
  //         {close => (
  //           <>
  //             <div>
  //               <ul>
  //                 {Object.keys(requiredObject).forEach(key => (
  //                   <li>{`${key} : ${requiredObject[key]} `}</li>
  //                 ))}
  //               </ul>
  //             </div>
  //             <button type="button" className="button" onClick={() => close()}>
  //               Close
  //             </button>
  //           </>
  //         )}
  //       </Popup>
  //     </div>
  //   )

  const optionColor1 =
    optionSelected === 'option1' ? 'firstOption1' : 'firstOption'
  const optionColor2 =
    optionSelected === 'option2' ? 'firstOption22' : 'firstOption2'
  const optionColor3 =
    optionSelected === 'option3' ? 'firstOption33' : 'firstOption3'

  const showCart = () => {
    console.log(requiredObject)
  }

  return (
    <div className="background">
      <div className="details">
        <div className="topHeadingSection">
          <hr className="line" />
          <h1 className="topHeading">Bundle & Save</h1>
          <hr className="line" />
        </div>

        <div className="optionsSection">
          <div className={optionColor1}>
            <input
              type="radio"
              id="option11"
              name="selectOption"
              value="option1"
              onChange={getRadioInput}
            />
            <label htmlFor="option11" className="firstOptions">
              {option1()}
            </label>
          </div>
          <div className={optionColor2}>
            <input
              type="radio"
              id="option22"
              name="selectOption"
              value="option2"
              onChange={getRadioInput}
            />
            <label htmlFor="option22" className="firstOptions">
              {option2()}
            </label>
          </div>
          <div className={optionColor3}>
            <input
              type="radio"
              id="option33"
              name="selectOption"
              value="option3"
              onChange={getRadioInput}
            />
            <label htmlFor="option33" className="firstOptions">
              {option3()}
            </label>
          </div>
        </div>
      </div>
      <div className="op">
        <h1 className="headingss">Free 2 Day shipping</h1>
        <h1>{`Total DKK ${requiredObject.price}`}</h1>
      </div>

      <button className="button" onClick={showCart}>
        +Add to Cart
      </button>

      {/* {PopupButton()} */}
    </div>
  )
}

export default App
