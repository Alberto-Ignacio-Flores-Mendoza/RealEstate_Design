import React from "react";
import './Footer.css'

const Footer =()=>{

return(
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}></img>

                <span className="SecondaryText">
                    Our vision is to make all people <br/>
                    the best place to live for them.
                </span>

            </div>

                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText"> 145 Georgia, Fl 4571 , USA</span>


                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span> AboutUs</span>
                    </div>
                </div>

        </div>

    </section>
)

}

export default Footer