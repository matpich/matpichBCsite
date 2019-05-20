import React from "react";

import "./WhoAmI.css"


class WhoAmI extends React.Component {
    render() {
        return ( 
            <section className="who-am-i">
                <h1 className="section-title">Kim jestem?</h1>

                <p className="describe">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Recusandae ex debitis reprehenderit tempore est itaque velit laudantium error ? Dolorum illum repudiandae ad ? Illum quaerat sapiente veniam ut corporis dolorum sunt, distinctio recusandae incidunt vero iusto accusantium.Illo maxime quasi dignissimos, similique repellat facilis provident dicta eaque at, fugit facere suscipit.</p>
            
                <div className="photo-container">
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="kitten"></img>
                </div>

                <div className="details">
                    <h3 className="section-subtitle">Dane</h3>

                    <div className="detail">
                        <h5>Dane osobowe:</h5>
                        <p>Mateusz Pichniarczyk</p>
                    </div>

                    <div className="detail">
                        <h5>Wiek:</h5>
                        <p>27 lat</p>
                    </div>      

                    <div className="detail">
                        <h5>Lokalizacja:</h5>
                        <p>Wrocław, Polska</p>
                    </div>   

                    <div className="detail">
                        <h5>Telefon:</h5>
                        <p><span id="prefix">+ 48 </span>663 625 037</p>
                    </div>      

                    <div className="detail">
                        <h5>E-mail:</h5>
                        <p>mat.pich@interia.pl</p>
                    </div>       

                    <div className="detail" id="detail-social">
                        <i className="fab fa-github-square"></i>
                        <i className="fab fa-linkedin"  style={{color:'#0e76a8'}}> </i>
                    </div>  
                </div>
            </section>
        )
    }
}

export default WhoAmI;