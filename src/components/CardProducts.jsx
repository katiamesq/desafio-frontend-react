export function CardProducts (){

    return (
        <a href={`/product/1`} className="products__list--item">

             <img src="/product-01.png" alt="" />
            
             <h3 className="products__list--price">R$ 0,00 <span>R$ 0,00</span></h3>
             <h4 className="products__list--name">Espresso</h4>
              <div className="product__tag">
                 <img src={PlantImage} alt="planta" />
               <span>Vegano</span>
              </div>
                </a>
  )
}



