import { useEffect } from 'react'
import './App.css'

const App = () => {
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query{
            allPersons {
              name
              lastname
              age
              phone
            }
            personCount
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  })

  return <>Hola mundo</>
}

export default App
