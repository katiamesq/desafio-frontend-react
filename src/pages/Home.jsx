import { useState } from "react";
import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'
import '../css/Home.css'
import CardProducts from '../components/CardProducts'

export function Home() {

const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Espresso",
      image: "/product-01.png",
      descricao: "",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria: "Clássicos",
    },
    {
      id: 2,
      name: "Americano",
      image: "/product-02.png",
      descricao: "",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria: "Clássicos",
    },
    {
      id: 3,
      name: "Café com leite",
      image: "/product-03.png",
      descricao:"",
      price: "800",
      price2: "1000",
      tag: "Vegano",
      categoria: "Clássicos"
    },
    {
      id: 4,
      name: "Cappuccino",
      image: "/product-04.png",
      descricao: "",
      price: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos",      
    },
    {
      id: 5,
      name: "Latte",
      image: "/product-05.png",
      descricao: "",
      price: "000",
      price2: "000",
      tag: "Contém lactose",
      categoria: "Clássicos",
    },
    {
      id: 6,
      name: "Macchiato",
      image: "/product-06.png",
      descricao: "",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos",
    },
    {
      id: 7,
      name: "Mocha",
      image: "/product-07.png",
      descricao: "",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos"
    },
    {
      id: 8,
      name: "Irish Coffe",
      image: "/product-08.png",
      descricao:"",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria:"Clássicos"
    },
    {
      id: 9,
      name: "Cold Brew",
      image: "/product-09.png",
      descricao:"",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria:"Gelados",      
    },
    {
      id: 10,
      name: "Frappuccino",
      image: "/product-10.png",
      descricao:"",
      price: "000",
      price2: "000",      
      tag: "Contém lactose",
      categoria:"Gelados",
    },
    {
      id: 11,
      name: "Café gelado com laranja tônica",
      image: "/product-11.png",
      descricao:"",
      price: "000",
      price2: "000",      
      tag: "Vegano",
      categoria:"Gelados",
    },
    {
      id: 12,
      name: "Milk shake de café",
      image: "/product-12.png",
      descricao:"",
      price: "000",
      price2: "000",      
      tag: "Contém lactose",
      categoria:"Gelados",
    },
    ]);

  return (
    <>    
      <main>
        <section className="slogan">
          <div className="container">
            <h1 className="slogan__title">Fragrância e sabor elevado ao cubo</h1>
            <p className="slogan__text">
              Explore nossa variedade de blends exclusivos e saboreie a perfeição em cada gole.
            </p>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Clássicos</h2>
            <div className="products__list">
              <CardProducts name={"Espresso"} price={"0,00"} price2={"0,00"} image={"/product-01.png"} tag={"Vegano"} id={1}/>
              <CardProducts name={"Americano"} price={"0,00"} price2={"0,00"} image={"/product-02.png"} tag={"Vegano"} id={2}/>
              <CardProducts name={"Café com leite"} price={"8,00"} price2={"10,00"} image={"/product-03.png"} tag={"Vegano"} id={3}/>
              <CardProducts name={"Cappuccino"} price={"10,00"} image={"/product-04.png"} tag={"Contém lactose"} id={4}/>
              <CardProducts name={"Latte"} price={"0,00"} price2={"0,00"} image={"/product-05.png"} tag={"Contém lactose"} id={5}/>
              <CardProducts name={"Macchiato"} price={"8,00"} price2={"10,00"} image={"/product-06.png"} tag={"Contém lactose"} id={6}/>
              <CardProducts name={"Mocha"} price={"8,00"} price2={"10,00"} image={"/product-07.png"} tag={"Contém lactose"} id={7}/>
              <CardProducts name={"Irish Coffee"} price={"8,00"} price2={"10,00"} image={"/product-08.png"} tag={"Contém lactose"} id={8}/>
              
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">
              <CardProducts name={"Cold Brew"} price={"0,00"} price2={"0,00"} image={"/product-09.png"} tag={"Vegano"} id={9}/>
              <CardProducts name={"Frappuccino"} price={"0,00"} price2={"0,00"} image={"/product-10.png"} tag={"Contém lactose"} id={10}/>
              <CardProducts name={"Café gelado com laranja tônica"} price={"0,00"} price2={"0,00"} image={"/product-11.png"} tag={"Vegano"} id={11}/>
              <CardProducts name={"Milk shake de café"} price={"0,00"} price2={"0,00"} image={"/product-12.png"} tag={"Contém lactose"} id={12}/>
            </div>
          </div>
        </section>
      </main>      
    </>
  )
}
