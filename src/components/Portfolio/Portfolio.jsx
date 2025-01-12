import Card from "../Card/Card"
import Title from "../Title/Title"
import img1 from "./../../assets/images/cabin.png";
import img2 from "./../../assets/images/cake.png";
import img3 from "./../../assets/images/circus.png";
import img4 from "./../../assets/images/game.png";
import img5 from "./../../assets/images/safe.png";
import img6 from "./../../assets/images/submarine.png";

let imgs = [
  {url: img1, name: 'log cabin'},
  {url: img2, name: 'tasty cake'},
  {url: img3, name: 'circus tent'},
  {url: img4, name: 'controller'},
  {url: img5, name: 'locked safe'},
  {url: img6, name: 'submarine'},

  ];

export default function Portfolio() {



  return (
    <section className="portfolio container py-5" id="portfolio">
        <Title title={"portfolio"} titleColor={'text-dark pt-5 text-center'}/>
        
        <div className="row g-5 mt-4">
          {imgs.map(( img, index) => <Card key={index} index={index+1} url={img.url} name={img.name} />)}
        </div>
        
    </section>
  )
}

