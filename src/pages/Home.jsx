import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'
import '../css/Home.css'
import CardProducts from '../components/CardProducts'

export function Home() {
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
