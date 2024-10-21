export default function Button() {
    let count = 0;
  
    function handleClick (name) {
      if (count < 3) {
        count++;
        console.log(`${name} you cliked me ${count} times`);
      } else {
        console.log(`${name} stop clicking me`);
      }
    };
  
    return (
      <button   
        onClick={()=>handleClick("bro")}>Click  🙂
      </button>
    );
  }