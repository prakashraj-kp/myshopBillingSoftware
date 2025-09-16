import './CustomerForm.css';

const CustomerForm=({customerName,mobileNumber,setMobileNumber,setCustomerName})=>{
   return (
   <div className=" p-1">
      <div className="mb-3">
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="cutomerName" className="col-4">Cutomer Name</label>
         <input type="text" className="form-control form-control-sm" id="customerName" onChange={(e)=>setCustomerName(e.target.value)} value={customerName} required/>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="mobileNumber" className="col-4">Mobile number</label>
         <input type="text" className="form-control form-control-sm" id="mobileNumber" onChange={(e)=>setMobileNumber(e.target.value)} value={mobileNumber}required/>
        </div>
      </div>
    </div>
   )
}
export default CustomerForm;