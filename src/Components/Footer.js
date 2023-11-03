import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <h1 className="footer-heading">YumEats</h1>
                    <p style={{ width: "50%" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati mollitia dolorum sequi autem quis pariatur exercitationem molestias quos. Labore non harum rem
                        recusandae repellendus modi quas numquam eius at tenetur?</p>
                    <div className="icons-wrapper">
                        <FaDribbbleSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h6>Location</h6>
                    <ul>
                        <li>New yourk</li>
                        <li>KY</li>
                        <li>OH</li>
                        <li>TX</li>
                    </ul>
                </div>

                <div>
                    <h6>Location</h6>
                    <ul>
                        <li>New yourk</li>
                        <li>KY</li>
                        <li>OH</li>
                        <li>TX</li>
                    </ul>
                </div>
                <div>
                    <h6>Location</h6>
                    <ul>
                        <li>New yourk</li>
                        <li>KY</li>
                        <li>OH</li>
                        <li>TX</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
