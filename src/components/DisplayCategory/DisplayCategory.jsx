import './DisplayCategory.css';
import  Category from '../Category/Category';
import { assets } from "../../assets/assets";

const DisplayCategory=({selectedCategory,setSelectedCategory,categories})=>{
  const totalItems = categories.reduce((acc, cat) => acc + (cat.items || 0), 0);

   return <div className="row g-3 w-100 m-0">
            <div className="col-md-3 col-sm-6" style={{ padding: '0 10px' }}>
        <Category
          categoryName="All Items"
          imgUrl={assets.device}
          numberOfItems={totalItems}
          bgColor="#6c7557"
          isSelected={selectedCategory === ""}
          onClick={() => setSelectedCategory("")}
        />
      </div>
            {categories.map(category=>(
                 <div key={category.categoryId} className="col-md-3 col-sm-6" style={{padding:'0 10px'}}>
                    <Category
                    categoryName={category.name}
                    imgUrl={category.imgUrl}
                    numberOfItems={category.items}
                    bgColor={category.bgColor}
                    isSelected={selectedCategory===category.categoryId}
                    onClick={()=>setSelectedCategory(category.categoryId)}
                    />
                 </div>
            ))}
        </div>
}
export default DisplayCategory;