import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Wpp.css";


const Wpp = () => {
    return (
        <>
            <a
                className="btn-wpp"
                target="blank"
                href="https://api.whatsapp.com/send?phone=1164212370"
            >

                <FaWhatsapp className="icon-wpp" />


            </a>
        </>
    );
};

export default Wpp;
