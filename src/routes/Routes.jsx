import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import NewPassWord from "../views/NewPassword/NewPassword";
// import RecoveryPassword from "../views/RecoveryPassWord/RecoveryPassword";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";
import EmailSend from "../views/EmailSend/EmailSend";

function RoutesMusic() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/new-password"
                        element={<NewPassWord />}
                    />
                    <Route
                        exact
                        path="/email-send"
                        element={<EmailSend />}
                    />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesMusic;