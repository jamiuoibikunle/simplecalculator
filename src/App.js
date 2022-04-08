import React, { useState } from 'react'
import './App.css'
import deleteleft from './resources/delete-left.svg'

function App() {

  const [ firstNum, setFirstNum ] = useState('')
  const [ ad, setAd ] = useState(false)
  const [ secondNum, setSecondNum ] = useState('')
  const [ ope, setOpe ] = useState()
  const [ result, setResult ] = useState('')

  return (
    <div className='screen'>
      <div className='screentop'>
      <div className='disp'>

      {firstNum} {ope} {secondNum}
        <br />
        <br />
        <b>
        {result}
        </b>

      </div>
      <img src={deleteleft} className='deleteleft' onClick={() => {
        !ad && setFirstNum(firstNum.slice(0, firstNum.length - 1))
        ad && setSecondNum(secondNum.slice(0, secondNum.length - 1))

        if (secondNum.length === 0) {
          setOpe('')
          setAd(false)
        }

        if (ope.length === 0) {
          setFirstNum(firstNum.slice(0, firstNum.length - 1))
        }
      }} />
      </div>
      <div className='screenbottom'>
      <div className='nums'>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '7')
        ad && setSecondNum(secondNum + '7')
      }}>
        7
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '8')
        ad && setSecondNum(secondNum + '8')
      }}>
        8
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '9')
        ad && setSecondNum(secondNum + '9')
      }}>
        9
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '4')
        ad && setSecondNum(secondNum + '4')
      }}>
        4
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '5')
        ad && setSecondNum(secondNum + '5')
      }}>
        5
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '6')
        ad && setSecondNum(secondNum + '6')
      }}>
        6
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '1')
        ad && setSecondNum(secondNum + '1')
      }}>
        1
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '2')
        ad && setSecondNum(secondNum + '2')
      }}>
        2
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '3')
        ad && setSecondNum(secondNum + '3')
      }}>
        3
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '0')
        ad && setSecondNum(secondNum + '0')
      }}>
        0
      </span>
      <span className='number' onClick={() => {
        !ad && setFirstNum(firstNum + '.')
        ad && setSecondNum(secondNum + '.')
      }}>
        .
      </span>
      <span className='number' onClick={() => {
        setAd(false)
        setFirstNum('')
        setSecondNum('')
        setResult('')
        setOpe('')
      }}>
        C
      </span>
      </div>
      <div className='ops'>
        <span className='op' onClick={() => {
          setOpe('+')
          setAd(true)
        }}>
          +
        </span>
        <span className='op' onClick={() => {
          setOpe('-')
          setAd(true)
        }}>
          -
        </span>
        <span className='op' onClick={() => {
          setOpe('*')
          setAd(true)
        }}>
          *
        </span>
        <span className='op' onClick={() => {
          setOpe('/')
          setAd(true)
        }}>
          /
        </span>
        <span className='op' onClick={() => {

          if(firstNum && ope && secondNum) {

          if ( ope === '+' ) {
            const answer = Number(firstNum) + Number(secondNum)
            setResult(answer)
          } else if ( ope === '-' ) {
            const answer = Number(firstNum) - Number(secondNum)
            setResult(answer)
          } else if ( ope === '*' ) {
            const answer = Number(firstNum) * Number(secondNum)
            setResult(answer)
          } else if ( ope === '/' ) {
            const answer = Number(firstNum) / Number(secondNum)
            setResult(answer)
          }
          
          } else {
            setResult('Incorrect operation.')
          }
        }}>
          =
        </span>
      </div>
      </div>
    </div>
  )
}

export default App