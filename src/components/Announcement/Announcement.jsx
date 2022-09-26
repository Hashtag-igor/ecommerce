import "./Announcement.css";
import { Link } from "react-router-dom"

export default function Announcement(){
    return(
        <Link to="/productlist" style={{textDecoration: "none"}}><div className="announcement-container">Super Deal! Free Shiping on Orders Over $50</div></Link>
    )
}