import './ManageCategory.css';
import CategoryList from '../../components/categoryList/CategoryList';
import CategoryForm from '../../components/categoryform/CategoryForm';


const ManageCategory =()=>{
    return(
    <div className="category-container taxt-light">
         <div className="left-column">
           <CategoryForm/>
        </div>
        <div className="right-column">
            <CategoryList/>
        </div>
    </div>
    )
}
export default ManageCategory;