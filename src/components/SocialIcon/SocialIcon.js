import "./SocialIcon.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";


const SocialIcon =() =>{
    return(
        <div className="SociaIcon">
             <div className="SociaIcon-icons">
              <a href="https://www.linkedin.com/in/ajju-kushwaha77/">
                <BsLinkedin className="icon" />
              </a>
              <a href="https://twitter.com/AjitKus40102887">
              <BsTwitter className="icon" />
              </a>
              <a href="https://www.facebook.com/ajit.kushwaha.90834">
              <BsFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/ajju_kushwaha77/">
              <BsInstagram className="icon" />
              </a>
            </div>
        </div>
    )

}
export default SocialIcon;