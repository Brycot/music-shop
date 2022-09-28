import React from "react";
import "./EmailSend.scss";
import logo from "@logos/logo_yard_sale.png";
import iconEmail from "@icons/email.png";
import Button from "../../components/Button/Button";

function EmailSend() {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Email has ben sent</h1>
                <p className="subtitle">
                    Please check your inbox for instructions <br />
                    on how to reset the password
                </p>
                <div className="email-image">
                    <img src={iconEmail} alt="email" />
                </div>
                <Button
                    type={"primary-button login-button"}
                    textButton={"Login"}
                />
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default EmailSend;