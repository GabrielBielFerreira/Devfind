import FooterStyled from "./footerStyled";
import { useLocation } from "react-router-dom";
import { useState,  useEffect} from 'react'


const Footer = () => {
      const location = useLocation();

    const [footerStatus, setFooterStatus] = useState<string>("footerOn")

        useEffect(() => {
        if (location.pathname == "/" || location.pathname == "/home"){
            setFooterStatus("footerOff")
        } else {
            setFooterStatus("footeron")
        }
    
  }, [location])

    return (
        <FooterStyled className={footerStatus}>
            
        </FooterStyled>
    )
}

export default Footer