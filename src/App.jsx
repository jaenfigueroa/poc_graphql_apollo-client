import './App.css'
import { gql, useQuery } from '@apollo/client'
import CardUser from './components/CardUser'

// NUESTRA QUERY
const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      age
    }
    personCount
  }
`

const App = () => {
  //AL USAR EL HOOK useQuery NOS DEVUELVE UN OBJETO CON ESTAS 3 PROPIEDADES MUY UTILES
  const { data, loading, error } = useQuery(ALL_PERSONS)

  if (error) {
    return <div>Ups, hubo un error</div>
  }

  return (
    <div className='app'>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <>
          {data.allPersons.map((person) => (
            <CardUser
              key={person.id}
              name={person.name}
              age={person.age}
              phone={person.phone}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default App
