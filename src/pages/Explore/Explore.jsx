import { useContext, useState } from 'react';
import './Explore.css';
import { AppContext } from '../../context/AppContext';
import DisplayCategory from '../../components/DisplayCategory/DisplayCategory';
import DisplayItems from '../../components/DisplayItems/DisplayItems';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import CartItems from '../../components/CartItems/CartItems';
import CartSummary from '../../components/CartSummary/CartSummary';

const Explore = () => {
    const {categories,itemsData}=useContext(AppContext);
     const [selectedCategory,setSelectedCategory]=useState("");
     const[customerName,setCustomerName]=useState("");
     const[mobileNumber,setMobileNumber]=useState("");

    console.log(categories);
    return (
        <div className="explore-container">
            <div className="left-column">
                <div className="first-row" style={{ overflowY: 'auto' }}>
                    <DisplayCategory
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} 
                    categories={categories}/>
                </div>
                <hr className="horizontal-line" />
                <div className="second-row" style={{ overflowY: 'auto' }}>
                   <DisplayItems selectedCategory={selectedCategory} items={itemsData}/>
                </div>
            </div>

            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{ height: '15%' }}>
                    <CustomerForm  
                    customerName={customerName}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                    setCustomerName={setCustomerName}/>
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-item-container" style={{ height: '55%', overflowY: 'auto' }}>
                   <CartItems/>
                </div>
                <div className="cart-summary-container" style={{ height: '30%' }}>
                   <CartSummary   customerName={customerName}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                    setCustomerName={setCustomerName} />
                </div>
            </div>
        </div>
    )
}

export default Explore;

/*const Explore =()=>{
    return(
       <div className="explore-container">
        <div className="left-column">
            <div className="first-row" style={{overflowY:'auto'}}>
                 categories
            </div>
            <hr className="horizontal-line" />
            <div className="second-row" style={{overflowY:'auto'}}>
                 items
            </div>
        </div>
        <div className="right-column d-flex flex-column">
        <div className="customer-form-container" style={{height:'15%'}}>
                customer form  
        </div>
        <hr className="my-3 text-light"/>
        <div className="cart-item-container"style={{height:'55%',overflowY:'auto'}}>
            cart item
        </div>
        <div className="cart-summary-container" style={{height:'30%'}}>
           cart summary
        </div>
        </div>
       </div>
    )
}
export default Explore;*/