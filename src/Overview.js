import React from 'react'
import './Table.css'
import logo from '../src/images/logor.png'

const Overview = () => {
  return (
    <>
   <br />
        <div className="imag">
            <img className='imgm' src={logo} alt="logo" />
        </div>

    <table id="over">
            
            <thead>
                <tr>
                    <th scope="col">
                        Institute name
                    </th>
                    <th scope="col">
                        Type
                    </th>
                    <th scope="col">
                        Established
                    </th>
                    <th scope="col">
                        Location
                    </th>
                    <th scope="col">
                        Campus Area
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Institute Name">Nit Kurukshetra</td>
                    <td data-label="Type">Government</td>
                    <td data-label="Established">1963</td>
                    <td data-label="Location">Kurukshetra,Haryana</td>
                    <td data-label="Campus Area">300 acres</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Overview