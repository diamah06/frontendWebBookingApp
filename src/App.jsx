// App.js
import './App.css'
import {useState, useEffect} from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haGRAbWFpbC5jb20iLCJpZCI6NjAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMDQzMTAxNiwiZXhwIjoxNzEwNDM0NjE2fQ.l4GdLrFmhyBRbKDEAbswtpIFFVqTBf1ZNWAcck3aWuc";

  useEffect(() => {
    // fetch
    fetch("http://localhost:3000/api/reservation", {
      method: "GET",
      headers: {
        "Authorization" : token,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setReservations(data)
    })
}, []);

  return (
    <>
      <h1>Simplon - REACT Frontend</h1>
      <p className="paragraph">First part</p>
      <ul className='reservationContainer'>
        {reservations.map((r) => {
          return (
            <li className='reservation' key={r.id}>
              <div>Reservé par : {r.name}</div>
              <div>Note : {r.note}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App