import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id = "home">
            <main>
                <h1>Techystar</h1>
                <p>Solution to all your problems</p>
            </main>

        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum asperiores, impedit illo enim magni veritatis eum mollitia 
                    itaque officia veniam ipsa.
                </p>
            </div>
        </div>


        <div className="home3" id = "about">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit accusamus, 
                    pariatur praesentium quam magnam porro accusantium magni itaque, explicabo labore?
                     Natus sit, cumque id ut quo illum blanditiis quas corporis sint explicabo quasi est 
                     commodi perferendis minima perspiciatis excepturi eligendi mollitia alias!</p>
            </div>
        </div>

        <div className="home4" id = "brands">
            <div>
                <h1>Brands</h1>

                <article>
                    <div style = {{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style = {{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>


                    <div style = {{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>YouTube</p>
                    </div>

                    <div style = {{
                        animationDelay: "0.9s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home