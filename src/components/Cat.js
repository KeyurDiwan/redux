import React from "react";
import "../styles/Cat.css";
import { Link } from "react-router-dom";
import mendata from "../data/men";
const Cat = () => {
  console.log(mendata[0].name);
  return (
    <div>
      <section className="main-section">
        <Link to="/products">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWs47WzxYQa8QIN_aZmkuSFRi-EDw1NOXuZA&usqp=CAU" />
          </div>
        </Link>

        <Link to="/products">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTGLCmTV37x4-b4NxaQW1T9MlcvnmJ1ATfw&usqp=CAU" />
          </div>
        </Link>

        <Link to="/products">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xV2DRkrqx-4A43xURJKpHpe1Z8X1PYTD1g&usqp=CAU" />
          </div>
        </Link>

        <Link to="/products">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0nlbmEcnwo5jk8hFlwP3Y1L6iUInPG2tFQ&usqp=CAU" />
          </div>
        </Link>


        
        <Link to="mobile">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/flap/300/300/image/e3ff066cfd6881cb.jpg?q=70" />
          </div>
        </Link>

        <Link to="men">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/300/300/kw2fki80/shoe/z/o/3/8-brd-624-8-birde-light-blue-original-imag8tn86s88ysrg.jpeg?q=70" />
          </div>
        </Link>

        <Link to="men">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/300/300/k0e66q80/shirt/8/g/g/m-m-ss19-csh-005e-metronaut-original-imafk6y6qx6c9mhh.jpeg?q=70" />
          </div>
        </Link>

        <Link to="men">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/flap/300/300/image/57b64c251e5af10e.jpg?q=70" />
          </div>
        </Link>



        <Link to="girl">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/300/300/jw6pifk0/t-shirt/7/n/3/s-2337268-mast-harbour-original-imafgwzhm6zyvh7g.jpeg?q=70" />
          </div>
        </Link>

        <Link to="girl">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/300/300/k7xnukw0/tunic/b/n/w/s-s20711mabl02-oxolloxo-original-imafq28nh3gpfhzr.jpeg?q=70" />
          </div>
        </Link>

        <Link to="girl">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/400/400/k7usyvk0/night-suit/f/h/f/s-t37-4383f-oatmeal-mix-marks-spencer-original-imafqy7mqjgrn9xm.jpeg?q=70" />
          </div>
        </Link>

        <Link to="girl">
          <div className="card">
            <img src="https://rukminim1.flixcart.com/image/400/400/jmxrwy80/top/k/4/u/s-1top-46-phashion-town-original-imaf9p3bz22bh5zb.jpeg?q=70" />
          </div>
        </Link>



        <Link to="mobile">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdanP684U2w9iHduYqcQSjtU90qBEpEIhl2A&usqp=CAU" />
          </div>
        </Link>
        <Link to="mobile">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQYVYCfrc9bt1lNQaoRVobq5j9iKsvxAlhA&usqp=CAU" />
          </div>
        </Link>

        <Link to="mobile">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdanP684U2w9iHduYqcQSjtU90qBEpEIhl2A&usqp=CAU" />
          </div>
        </Link>
        <Link to="mobile">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQYVYCfrc9bt1lNQaoRVobq5j9iKsvxAlhA&usqp=CAU" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Cat;
