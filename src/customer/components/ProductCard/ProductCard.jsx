import "./productCard.scss"

const ProductCard = ({imageUrl,price,discountPersent,discountedPrice,brand,title}) => {
  return (
    <div>
      <div className="productCard overflow-hidden rounded-md w-[15rem] hover:-translate-y-1 hover:shadow-lg cursor-pointer shadow-md">
        <div className="product-img h-[15rem] overflow-hidden">
          <img className="object-cover h-full w-full object-top " src={imageUrl} alt="" />
        </div>
        <div className="productCard-content p-2 flex flex-col gap-1">
          <p className=" capitalize font-semibold text-sm" >{brand}</p>
          <h2 className="text-xl capitalize font-semibold">{title}</h2>
          <div className="productCard-price flex gap-1">
            <p className=" font-semibold">{`$${discountedPrice}`}</p>
            <p className=" opacity-50 line-through ">{`$${price}`}</p>
            <p className=" text-green-900 font-semibold">{`${discountPersent}%`}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard