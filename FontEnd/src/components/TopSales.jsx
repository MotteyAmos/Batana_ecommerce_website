import ItemCard from "./ItemCard"
import Title from "./Title"

const TopSales = ({value:{title,items}}) => {
  return (
    <>
    <div className=" container mx-auto px-[15rem] border-2  flex-wrap mt-[10rem] ">
        <Title title={title}/>
        <div className="justify-between grid grid-cols-3 gap-5">
        {
            items.map((item, key)=>(
                <ItemCard key={key} value={item} isTopSales/>
            ))
        }
        </div>

    </div>
    </>
  )
}

export default TopSales