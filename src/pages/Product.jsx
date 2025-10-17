import { useParams } from 'react-router-dom'
import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'
import MinusImage from '../assets/Minus.svg'
import PlusImage from '../assets/Plus.svg'
import '../css/Product.css'

export function Product() {
  const { id } = useParams()

  const products = [
    {
      id: 1,
      name: "Espresso",
      image: "/product-01.png",
      descricao: "Imagine um café espresso como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria: "Clássicos",
    },
    {
      id: 2,
      name: "Americano",
      image: "/product-02.png",
      descricao: "Imagine um café Americano como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria: "Clássicos",
    },
    {
      id: 3,
      name: "Café com leite",
      image: "/product-03.png",
      descricao:"Imagine um Café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "800",
      price2: "1000",
      tag: "Vegano",
      categoria: "Clássicos"
    },
    {
      id: 4,
      name: "Cappuccino",
      image: "/product-04.png",
      descricao: "Imagine um Cappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos",      
    },
    {
      id: 5,
      name: "Latte",
      image: "/product-05.png",
      descricao: "Imagine um Latte como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",
      tag: "Contém lactose",
      categoria: "Clássicos",
    },
    {
      id: 6,
      name: "Macchiato",
      image: "/product-06.png",
      descricao: "Imagine um Macchiato como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos",
    },
    {
      id: 7,
      name: "Mocha",
      image: "/product-07.png",
      descricao: "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria: "Clássicos"
    },
    {
      id: 8,
      name: "Irish Coffe",
      image: "/product-08.png",
      descricao:"Imagine um Irish Coffe como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "800",
      price2: "1000",
      tag: "Contém lactose",
      categoria:"Clássicos"
    },
    {
      id: 9,
      name: "Cold Brew",
      image: "/product-09.png",
      descricao:"Imagine um Cold Brew como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",
      tag: "Vegano",
      categoria:"Gelados",      
    },
    {
      id: 10,
      name: "Frappuccino",
      image: "/product-10.png",
      descricao:"Imagine um Frappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",      
      tag: "Contém lactose",
      categoria:"Gelados",
    },
    {
      id: 11,
      name: "Café gelado com laranja tônica",
      image: "/product-11.png",
      descricao:"Imagine um Café gelado com laranja tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",      
      tag: "Vegano",
      categoria:"Gelados",
    },
    {
      id: 12,
      name: "Milk shake de café",
      image: "/product-12.png",
      descricao:"Imagine um Milk shake de café como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      price: "000",
      price2: "000",      
      tag: "Contém lactose",
      categoria:"Gelados",
    },
  ];

  const product = products.find(p => p.id === Number(id)) 

  if (!product) {
    return <p>Produto não encontrado.</p>}

  const tagImage = product.tag === "Vegano" ? PlantImage : CowImage
  
  return (
    <>
      <main>
        <div className="container product__container">
          <a href="/" className="product__link">Voltar para o início</a>
          <section className="product">
            <div className="product__container--image">
              <img src="/product-01.png" className="product__image" alt={product.name} />
            </div>
            <div className="product__data">
              <h1 className="product__title">{product.name}</h1>
              <h2 className="product__price">R$ {product.price.toFixed(2)}</h2>
              <div className="product__tag">
                <img src={product.tagImage} alt={product.PlantImage} />
                <span>{product.tag}</span>
              </div>
              <p className="product__description">{product.description}</p>
              <form>
                <section className="product__observation">
                  <label htmlFor="observation">Observações sobre o pedido</label>
                  <textarea rows={3} name="observation" id="observation" placeholder="Digite suas observações. Ex.: Enviar açúcar"></textarea>
                </section>
                <div className="product__buy">
                  <section className="product__quantity">
                    <button className="product__quantity--minus">
                      <img src={MinusImage} alt="mais um" />
                    </button>
                    <input type="text" className="product__quantity--input" value="1" />
                    <button className="product__quantity--plus">
                      <img src={PlusImage} alt="menos um" />
                    </button>
                  </section>
                  <button className="product__button">
                    Comprar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>      
    </>
  )
}
