export default function ShoeCard({ imgUrl, bigShoeImg, toggleFun }) {
 return (
  <div onClick={() => toggleFun(imgUrl.bigShoe)} className={`border-2 ${bigShoeImg == imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} rounded-xl cursor-pointer max-sm:flex-1`} >
   <div className="flex justify-center items-center  bg-card bg-center bg-cover sm:w-40 sm:h-40 w-30 h-full  max-sm:p-4 rounded-xl ">
    <img className="object-contain " src={imgUrl.thumbnail} alt="thumbnail" height={103} width={140} />
   </div>

  </div>
 )
}
