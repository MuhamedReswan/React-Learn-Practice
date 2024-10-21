function profilePicture() {
  const imgUrl = "../src/assets/profileImg.jpg";

  const handleClick = (e) => e.target.style.display="none";

return <img onClick={(e) => handleClick(e)} src={imgUrl}></img>;
}
export default profilePicture;
