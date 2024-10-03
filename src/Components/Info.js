import ProfileImg from "../Images/ProfileImage.png";

export default function Info()
{
    return(
    <div  className="TitleDiv">
        <img className = "ProfileImg" src={ProfileImg} alt="ProfilePic"  height="350"></img>
        <h1 className="Name"> Pragadeeswaran </h1>
        <h2 className="Designation"> Frontend Developer </h2>
        <h3 className="mailID"> swaranpragadee@gmail.com </h3>
        <button className="EmailBtn"> <i class="fa-solid fa-envelope"></i> Email</button>
        <button className="LinkedInBtn"> <i class="fa-brands fa-linkedin"></i> LinkedIn</button>
    </div>
    )
}