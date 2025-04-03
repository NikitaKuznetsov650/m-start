"use client"
import Header from "../components/Header";
import Service from "../components/Service";
import Footer from "../components/Footer";
import YandexMap from "../components/Map";
import {useEffect, useState} from "react"
import LoginCard from "../components/Auth/login";


export default function ContactPage() {
      const [loginOpen, setLoginOpen] = useState(false);
      useEffect(() => {
          if (loginOpen) {
              document.body.style.overflow = "hidden";
          } else {
              document.body.style.overflow = "auto";
          }
      }, [loginOpen]);
    return(
        <div>
            <Header onLoginOpen={() => setLoginOpen(true)} ></Header>
            <div className="w-3/4 mx-auto">
                <span className="fixed top-1/8 right-1/22 w-2/5 inset-0 z-20 ml-auto h-[582px]"><LoginCard open={loginOpen} onClose={() => setLoginOpen(false)} ></LoginCard></span>
            </div>
            <div className={loginOpen ? " bg-gray-300  filter brightness-40 h-screen overflow-hidden" : " "}>
            <section className="w-3/4 mx-auto flex flex-col mt-11.5 mb-23">
                <p className="text-gray-400 my-7.5">Главная / Контакты</p>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-1/2">
                        <h2 className="mb-11.5 font-semibold">Контакты</h2>
                        <div className="flex flex-row w-full justify-between">
                            <span className="w-1/2 flex flex-col gap-2.5">
                                <h4 className="font-semibold">Магазин M-Starter</h4>
                                <h4>ул. Аль-Фараби 111Б 
                                <br></br>
                                рынок Беркут, Бутик №2</h4>
                                <h4>+ 7 (775) 644-56-81</h4>
                            </span>
                            <span className="w-1/2 flex flex-col gap-2.5">
                                <h4 className="font-semibold">Сервис M-Starter</h4>
                                <h4>г. Костанай, 
                                    <br></br>
                                ул. Рабочая 143</h4>
                                <h4>+ 7 (775) 644-56-81</h4>
                            </span>
                        </div>
                        <div className="flex flex-row w-full justify-between mt-10">
                            <span className="w-1/2 flex flex-col gap-2.5">
                                <h4 className="font-semibold">График работы</h4>
                                <h4>Пн - Сб: 9:00 - 19:00<br></br>
                                Вс: 10:00 - 18:00</h4>
                            </span>
                            <span className="w-1/2 flex flex-col gap-2.5">
                                <h4 className="font-semibold">График работы</h4>
                                <h4>Пн - Сб: 9:00 - 19:00<br></br>
                                Вс: 10:00 - 18:00</h4>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mb-11.5 font-semibold">Магазин на карте</h2>
                    </div>

                </div>
                <YandexMap></YandexMap>
            </section>
            <Service></Service>
            </div>
            <Footer></Footer>
        </div>
    )
}