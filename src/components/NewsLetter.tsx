import { toast } from "react-toastify";

 

const NewsletterBox = () => {
    const buttonHandler =(e)=>{
        e.preventDefault();
        toast.dark("Thankyou for registering")

    }
    const onSubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }
    return (
     <div className="realtive"> 
      <div className="text-center">
        <p className="text-2xl font-medium text-gray-200">Subscribe now to get latest updates</p>
        <p className="text-gray-400 mt-3">
         
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input className="w-full sm:flex-1 outline-none"  type="email" placeholder="Enter your email" required/>
          <button onClick={buttonHandler} type ='submit' className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
         
      </div>
      </div>
    )
  }
  
  export default NewsletterBox
  