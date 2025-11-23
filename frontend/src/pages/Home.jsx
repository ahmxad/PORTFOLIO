import myimg from "../assets/myimg.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-of-home">
      <div className="text">
        <h3>Welcome to my portfolio</h3>
        <p>
          Hello! I am Muhammad Ahmad, a computer science student who enjoys learning new technologies and building web applications. This portfolio shows some of my projects and skills. Please feel free to explore and see my work.
        </p>
      </div>
      <div className="img">
        <img src={myimg} className="rounded-circle mx-auto d-block img-fluid" alt="myimg" style={{ width: "300px", height: "300px", objectFit: "cover" }}/>
      </div>
    </div>
  );
}
