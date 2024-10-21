import profilePic from "../../assets/profile_img.jpg"


const Card = ()=>{
    return (
        <div className="card">
{/* <img src="https://via.placeholder.com/150" alt="profile picture" /> */}
<img className="card-image" src={profilePic} alt="profile picture" />
<h2 className="card-title">Profile Details</h2>
<p>im a self taught mern stack developer</p>
        </div>
    );
}

export default Card