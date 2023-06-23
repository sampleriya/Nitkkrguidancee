import React from 'react'
import './Table.css'


const Placement = () => {
  return (
   <>
    <table id="branches">
           

            <thead>
                <tr>
                    <th scope="col">
                        Branches
                    </th>
                    <th scope="col">
                        Placed
                    </th>
                    <th scope="col">
                        Highest Package
                    </th>
                    <th scope="col">
                        Average Package
                    </th>
                </tr>
            </thead>
            <br/><br/>
            <tbody>
                <tr>
                    <td data-label="Branches">Computer Engineering</td>
                    <td data-label="Placed">88.76</td>
                    <td data-label="Highest package">43.75</td>
                    <td data-label="Average package">15.54</td>
                </tr>
                <tr>
                    <td data-label="Branches">Electronics and Communication Engineering</td>
                    <td data-label="Placed">66.17</td>
                    <td data-label="Highest package">26</td>
                    <td data-label="Average package">11.80</td>
                </tr>
                <tr>
                    <td data-label="Branches">Electrical Engineering</td>
                    <td data-label="Placed">48.39</td>
                    <td data-label="Highest package">15.0</td>
                    <td data-label="Average package">8.03</td>
                </tr>
                <tr>
                    <td data-label="Branches">Mechanical Engineering</td>
                    <td data-label="Placed">53.08</td>
                    <td data-label="Highest package">18.0</td>
                    <td data-label="Average package">6.99</td>
                </tr>
                <tr>
                    <td data-label="Branches">Civil Engineering</td>
                    <td data-label="Placed">20.00</td>
                    <td data-label="Highest package">10</td>
                    <td data-label="Average package">6.57</td>
                </tr>
                <tr>
                    <td data-label="Branches">Information Technology</td>
                    <td data-label="Placed">85</td>
                    <td data-label="Highest package">43.75</td>
                    <td data-label="Average package">15.98</td>
                </tr>
                <tr>
                    <td data-label="Branches">Production and Industrial Engineering</td>
                    <td data-label="Placed">44.86</td>
                    <td data-label="Highest package">13.5</td>
                    <td data-label="Average package">6.61</td>
                </tr>
            </tbody>
        </table>
   
   </>
  )
}

export default Placement