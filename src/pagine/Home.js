import { link } from "react-router-dom"; //Routing
import React from "react";
import Header from "../components/Header" //Importa l'header
import 'bootstrap/dist/css/bootstrap.min.css';//funzioni di bootstrap
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import NewHeader from "../components/NewHeader";

export function Home() {
    return (
        <div >

            <div class="container text-center">
                <div class="row fixed-top"><Header />

                    <div class="row">
                        <div class="col-3 d-none d-sm-block mt-2">
                            <Sidebar />
                        </div>

                        <div class="col">
                            <MainContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
