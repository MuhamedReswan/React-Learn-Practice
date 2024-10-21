export default function Button2() {
  
    function handleClick2 (e) {
        e.target.textContent="CLicKED"
    
    };
  
    return (
      <button   
        onClick={(e)=>handleClick2(e)}>Click 2 🙂
      </button>
    );
  }