import { useParams } from 'react-router-dom';
import { useState } from 'react';
import PlantImage from '../assets/Plant.png';
import CowImage from '../assets/Cow.png';
import MinusImage from '../assets/Minus.svg';
import PlusImage from '../assets/Plus.svg';
import DeleteImage from '../assets/Delete.svg';
import '../css/Product.css';

export function Product() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Espresso", image: "/product-01.png", descricao: "Imagine um café Espresso como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 2, name: "Americano", image: "/product-02.png", descricao: "Imagine um Café Americano como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 3, name: "Café com leite", image: "/product-03.png", descricao: "Imagine um Café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 4, name: "Cappuccino", image: "/product-04.png", descricao: "Imagine um Cappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "10,00", price2: "", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 5, name: "Latte", image: "/product-05.png", descricao: "Imagine um Latte como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 6, name: "Macchiato", image: "/product-06.png", descricao: "Imagine um Macchiato como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 7, name: "Mocha", image: "/product-07.png", descricao: "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 8, name: "Irish Coffee", image: "/product-08.png", descricao: "Imagine um Irish Coffee como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 9, name: "Cold Brew", image: "/product-09.png", descricao: "Imagine um Cold Brew como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Gelados" },
    { id: 10, name: "Frappuccino", image: "/product-10.png", descricao: "Imagine um Frappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Gelados" },
    { id: 11, name: "Café gelado com laranja tônica", image: "/product-11.png", descricao: "Imagine um Café gelado com laranja tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Gelados" },
    { id: 12, name: "Milk shake de café", image: "/product-12.png", descricao: "Imagine um Milk shake de café como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Gelados" },
  ];

  const product = products.find(p => p.id === Number(id));

  // Se não existir produto, renderiza mensagem
  if (!product) {
    return (
      <main className="container product__container">
        <p>Produto não encontrado.</p>
        <a href="/" className="product__link">Voltar para o início</a>
      </main>
    );
  }

  const tagImage = product.tag === "Vegano" ? PlantImage : CowImage;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    const newItem = {
      id: Date.now() + Math.random(),
      idProduto: product.id,
      nome: product.name,
      imagem: product.image,
      preco: product.price,
      vegano: product.tag === "Vegano",
      quantidade: quantity,
      observacao: document.getElementById('observation').value
    };
    setCart([...cart, newItem]);
    alert(`Produto "${product.name}" adicionado ao carrinho!`);
  };

  const deleteItem = (idItem) => {
    setCart(cart.filter(item => item.id !== idItem));
  };

  return (
    <main className="container product__container">
      <a href="/" className="product__link">Voltar para o início</a>

      {/* Produto */}
      <section className="product">
        <div className="product__container--image">
          <img src={product.image} alt={product.name} className="product__image" />
        </div>

        <div className="product__data">
          <h1 className="product__title">{product.name}</h1>
          <h2 className="product__price">R$ {product.price}</h2>
          <div className="product__tag">
            <img src={tagImage} alt={product.tag} />
            <span>{product.tag}</span>
          </div>
          <p className="product__description">{product.descricao}</p>

          <form>
            <section className="product__observation">
              <label htmlFor="observation">Observações</label>
              <textarea id="observation" rows={3} placeholder="Digite suas observações"></textarea>
            </section>

            <div className="product__buy">
              <section className="product__quantity">
                <button type="button" onClick={decrease} className="product__quantity--minus">
                  <img src={MinusImage} alt="menos" />
                </button>
                <input type="text" readOnly value={quantity} className="product__quantity--input" />
                <button type="button" onClick={increase} className="product__quantity--plus">
                  <img src={PlusImage} alt="mais" />
                </button>
              </section>
              <button type="button" onClick={addToCart} className="product__button">Adicionar ao carrinho</button>
            </div>
          </form>
        </div>
      </section>

      {/* Carrinho */}
      {cart.length > 0 && (
        <section className="cart">
          <h2>Meu Carrinho</h2>
          {cart.map(item => (
            <div className="cart__product" key={item.id}>
              <img src={item.imagem} alt={item.nome} className="cart__productImage" />
              <div className="cart__productInfo">
                <div className="cart__productRow">
                  <div className="cart__productColumn">
                    <h2 className="cart__productName">{item.nome}</h2>
                    <div className="product__tag">
                      <img src={item.vegano ? PlantImage : CowImage} alt={item.vegano ? "Vegano" : "Contém lactose"} />
                      <span>{item.vegano ? "Vegano" : "Contém lactose"}</span>
                    </div>
                  </div>
                  <button onClick={() => deleteItem(item.id)} className="cart__productDelete">
                    <img src={DeleteImage} alt="Deletar produto" />
                  </button>
                </div>

                <div className="cart__productRow">
                  <h3 className="cart__productPrice">R$ {item.preco}</h3>
                  <section className="product__quantity">
                    <button type="button" className="product__quantityMinus">-</button>
                    <input type="text" readOnly value={item.quantidade} className="product__quantityInput" />
                    <button type="button" className="product__quantityPlus">+</button>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}