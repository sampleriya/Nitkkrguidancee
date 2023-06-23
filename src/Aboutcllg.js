import React from 'react'
import styles from './Aboutcllg.module.css';
import logo from "../src/images/logoim.png";
import companies from "../src/images/companies.jpeg";

const Aboutcllg = () => {
  return (
    < >
    <body>
        
   
        <div id='div1' >
        <img height=" 100px" width=" 100px" src={logo} alt=""/>

    </div>
    <div className={`${styles.navbar} ${styles.hello}`}>
        <p>kkdlns</p>
    </div>
   
    <div id='div2' >
        <h1 className="nit">NIT KURUKSHETRA, <br/> Haryana</h1>

    </div>

    <div className={`${styles.navbar} ${styles.hello}`}>
        <nav id="navbar">
            <ul className="nav">
                <li className="item"><a href="#over">Over View</a></li>
                <li className="item"><a href="#rank">Ranking</a></li>
                <li className="item"><a href="#companies">Companies</a></li>
                <li className="item"><a href="#fee">Fee Structure</a></li>
                <li className="item"><a href="#branches">Placement</a></li>
            </ul>
        </nav>
    </div>
    <br/>
    <section id='sec1' >
        <h1 className="para" id='h11' >Our Mission</h1>
        <p id="para1">

            To advance and spread knowledge in the area of science and leading to creation of wealth and welfare of
            humanity.
        </p>
        <br/>
        <h1 className="para"
           > Our
            Vision</h1>
        <p id='pp' >
            To become an internationally acclaimed institution of higher learning that will serve as a source of
            knowledge and expertise for the society and be a preferred destination for undergraduate and graduate
            studies.
        </p>
        <br/><br/><br/><br/><br/>
        <table id="over">
            <caption>Over View</caption>
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
        <br/><br/><br/><br/>
        <table id="rank">
            <caption>Nirf Ranking</caption>
            <thead>
                <tr>
                    <th scope="col">
                        2021
                    </th>
                    <th scope="col">
                        2020
                    </th>
                    <th scope="col">
                        2019
                    </th>
                    <th scope="col">
                        2018
                    </th>
                    <th scope="col">
                        2017
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="2021">45</td>
                    <td data-label="2020">44</td>
                    <td data-label="2019">41</td>
                    <td data-label="2018">43</td>
                    <td data-label="2017">43</td>
                </tr>
            </tbody>
        </table>
        <br/><br/><br/><br/>
        <table id="branches">
            <caption>Placement</caption>

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
        <br/><br/><br/>
        <table id="fee">
            <caption>B.tech. (Acadmecis Year 2021-25) </caption>


            <thead>
                <tr>
                    <th scope="col">
                        Particulars of Fee(Rs.)
                    </th>
                    <th scope="col">
                        1st Sem
                    </th>
                    <th scope="col">
                        2nd Sem
                    </th>
                    <th scope="col">
                        3rd Sem
                    </th>
                    <th scope="col">
                        4th Sem
                    </th>
                    <th scope="col">
                        5th Sem
                    </th>
                    <th scope="col">
                        6th Sem
                    </th>
                    <th scope="col">
                        7th Sem
                    </th>
                    <th scope="col">
                        8th Sem
                    </th>
                    <th scope="col">
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Particulars of Fee(Rs.)">Tution Fee(per sem)</td>
                    <td data-label="1st sem">62500</td>
                    <td data-label="2nd Sem">62500</td>
                    <td data-label="3rd Sem">62500</td>
                    <td data-label="4th Sem">62500</td>
                    <td data-label="5th sem">62500</td>
                    <td data-label="6th Sem">62500</td>
                    <td data-label="7th Sem">62500</td>
                    <td data-label="8th sem">62500</td>
                    <td data-label="Total">500000</td>

                </tr>
                <tr>
                    <td data-label="Particulars of Fee(Rs.)">Student Activity Fee (per sem.)</td>
                    <td data-label="1st sem">3000</td>
                    <td data-label="2nd Sem">3000</td>
                    <td data-label="3rd Sem">3000</td>
                    <td data-label="4th Sem">3000</td>
                    <td data-label="5th sem">3000</td>
                    <td data-label="6th Sem">3000</td>
                    <td data-label="7th Sem">3000</td>
                    <td data-label="8th sem">3000</td>
                    <td data-label="Total">24000</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Instt.Dev.Fund(per sem)</td>
                    <td data-label="1st sem">3000</td>
                    <td data-label="2nd Sem">3000</td>
                    <td data-label="3rd Sem">3000</td>
                    <td data-label="4th Sem">3000</td>
                    <td data-label="5th sem">3000</td>
                    <td data-label="6th Sem">3000</td>
                    <td data-label="7th Sem">3000</td>
                    <td data-label="8th sem">3000</td>
                    <td data-label="Total">24000</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Skill Dev.& Edu. Tour (per sem)</td>
                    <td data-label="1st sem">700</td>
                    <td data-label="2nd Sem">700</td>
                    <td data-label="3rd Sem">700</td>
                    <td data-label="4th Sem">700</td>
                    <td data-label="5th sem">700</td>
                    <td data-label="6th Sem">700</td>
                    <td data-label="7th Sem">700</td>
                    <td data-label="8th sem">700</td>
                    <td data-label="Total">5600</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Examinational Fee (per sem)</td>
                    <td data-label="1st sem">1300</td>
                    <td data-label="2nd Sem">1300</td>
                    <td data-label="3rd Sem">1300</td>
                    <td data-label="4th Sem">1300</td>
                    <td data-label="5th sem">1300</td>
                    <td data-label="6th Sem">1300</td>
                    <td data-label="7th Sem">1300</td>
                    <td data-label="8th sem">1300</td>
                    <td data-label="Total">10400</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Medical Insurance (per year)</td>
                    <td data-label="1st sem">700</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">700</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">700</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">700</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">2800</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Alumini Fee (One Time)</td>
                    <td data-label="1st sem">1300</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">1300</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Student Welfare Fund(one time)</td>
                    <td data-label="1st sem">600</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">600</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Admission/Regn. <br/> Fee(one time)</td>
                    <td data-label="1st sem">1300</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">1300</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Watch and Ward/Tpt.Exps(one time)</td>
                    <td data-label="1st sem">4800</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">4800</td>

                </tr><tr>
                    <td data-label="Particulars of Fee(Rs.)">Convaction(one time)</td>
                    <td data-label="1st sem">2100</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">2100</td>

                </tr>
                <tr>
                    <td data-label="Particulars of Fee(Rs.)">Library Fee(one time)</td>
                    <td data-label="1st sem">600</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">600</td>

                </tr>
                <tr>
                    <td data-label="Particulars of Fee(Rs.)">Institue Security (Refundable one time)</td>
                    <td data-label="1st sem">6100</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">6100</td>

                </tr> <tr>
                    <td data-label="Particulars of Fee(Rs.)">Library Security <br/>(Refundable one time)</td>
                    <td data-label="1st sem">1300</td>
                    <td data-label="2nd Sem">0</td>
                    <td data-label="3rd Sem">0</td>
                    <td data-label="4th Sem">0</td>
                    <td data-label="5th sem">0</td>
                    <td data-label="6th Sem">0</td>
                    <td data-label="7th Sem">0</td>
                    <td data-label="8th sem">0</td>
                    <td data-label="Total">1300</td>

                </tr> 
                <tr id='tr' >
                    <td id='td' >Total Fee</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr>
                    <td data-label="Particulars of Fee(Rs.)">Day Scholar(Non Hosteller)</td>
                    <td data-label="1st sem">89300</td>
                    <td data-label="2nd Sem">70500</td>
                    <td data-label="3rd Sem">71200</td>
                    <td data-label="4th Sem">70500</td>
                    <td data-label="5th sem">71200</td>
                    <td data-label="6th Sem">70500</td>
                    <td data-label="7th Sem">71200</td>
                    <td data-label="8th sem">70500</td>
                    <td data-label="Total">584900</td>

                </tr>
            </tbody>
        </table>
        <br/><br/><br/>
        <hr id='hr' />
        <br/><br/>
        <h1 id="companies"  >Companies</h1>
        
      <br/>
        <div>
            <img src={companies} alt=""/>
        </div>
    </section>
    </body>
    
    </>
  )
}

export default Aboutcllg