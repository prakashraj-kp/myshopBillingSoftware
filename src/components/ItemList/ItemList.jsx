import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { deleteItem } from "../../Service/ItemService";
import toast from "react-hot-toast";
import './ItemList.css';

const ItemList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { itemsData, setItemsData } = useContext(AppContext);

    const filteredItems = itemsData.filter(items =>
        items.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const removeItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response.status === 204) {
                const updatedItems = itemsData.filter(item => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted");
            }
            else {
                toast.error("Unable to delete item");
            }
        } catch (error) {
            console.log(error);
            toast.error("Unable to delete item ");
        }
    }

    return (
        <div>
            <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'auto' }}>
                <div className="row pe-2">
                    <div className="input-group mb-3">
                        <input type="text"
                            name='keyword'
                            id='keyword'
                            placeholder='Search by keyword'
                            className='form-control'
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm} />
                        <span className="input-group-text bg-warning">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                </div>
                <div className="row g-3 pe-2">
                    {filteredItems.map((item, index) => (
                        <div className="col-12" key={index}>
                            <div className="card p-3 bg-dark">
                                <div className="d-flex align-items-center justify-content-between w-100 ">
                                    <div className="d-flex align-items-center">
                                        <img src={item.imgUrl} alt={item.name} className="item-image"/>
                                    <div className="ms-3">
                                        <h6 className="mb-1 text-white">{item.categoryName}</h6>
                                        <p className="mb-0 text-white">Category:{item.name}</p>
                                    </div>
                                     </div>


                                    <div className="d-flex align-items-center gap-2">
                                    <span className="mb-0 badge rounded-pill text-bg-warning">
                                        &#8377;{item.price}
                                    </span>
                                    
                                
                                <div>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.itemId)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ItemList;