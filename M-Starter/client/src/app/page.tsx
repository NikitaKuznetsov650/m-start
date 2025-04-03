"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import HelpForm from "./components/Forms";
import Link from "next/link";
import Service from "./components/Service";
import { useState, useEffect } from "react"
import LoginCard from "./components/Auth/login";



export default function HomePage() {
    const [loginOpen, setLoginOpen] = useState(false);
    useEffect(() => {
        if (loginOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [loginOpen]);
    return (
        <div>
            <Header onLoginOpen={() => setLoginOpen(true)} ></Header>
            <div className="w-3/4 mx-auto">
                <span className="fixed top-1/8 right-1/22 w-2/5 inset-0 z-20 ml-auto h-[582px]"><LoginCard open={loginOpen} onClose={() => setLoginOpen(false)} ></LoginCard></span>
            </div>
            <div className={loginOpen ? "bg-gray-300  filter brightness-40 h-screen overflow-hidden" : ""}>
            <section className="flex w-3/4 mx-auto">
                <div className="w-3/4 h-125 relative">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-black/40"></div>
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0.7)_100%)]"></div>

                            <div className="relative w-full h-full">
                              <Image
                                src="/images/main.jpeg"
                                objectFit="cover"
                                layout="fill"
                                className="z-0"
                                alt="Фон"
                                />
                            </div>
                        <div className="absolute top-0 left-0 z-20 p-12.5 text-white">
                            <h1 className="text-5xl font-medium leading-tight">
                                Запчасти
                                <br />
                                На стартеры
                                <br />
                                И генераторы
                            </h1>
                            <p className="text-lg max-w-md mt-7.5">
                                Узкоспециализированный магазин компонентов 
                                для легковых, грузовых, спец- и сельхозмашин.
                            </p>
                            <div className="mt-6 flex gap-4 text-lg w-1/2 ">
                                <Link href="/catalog">
                                <button className="w-full h-[45px] cursor-pointer bg-[#9F9E9E] text-white shadow-lg hover:bg-gray-300 m-12.5 align-center justify-center">
                                    Каталог
                                </button>
                                </Link>
                            </div>
                        </div>    
                </div>
                <div className="relative w-1/4 h-125 flex flex-col justify-center items-center">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/mainlayer.png"
                            objectFit="cover"
                            layout="fill"
                            alt="Фон"
                            className="z-0 filter grayscale brightness-40"
                        />
                    </div>
                    <div className="absolute top-0 left-0 z-20 p-12.5 px-12">
                        <p className="text-gray-400 text-sm mt-18">Новости</p>
                        <h3 className="text-white mt-36">Помощь</h3>
                        <p className="text-gray-400 text-xs mt-1 mb-3">04.02.2025</p>
                        <p className="text-white">Как точно измерить деталь и выбрать нужную без ошибок.</p>
                        <div className="align-center flex flex-row gap-4 mt-11">
                            <img src="/icons/swapLeft.svg"></img>
                            <img src="/icons/SwapRight.svg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex w-3/4 h-50 mx-auto mb-23">
                <div className="w-3/4 h-full relative flex flex-row">
                    <div className="flex flex-col items-center w-1/3 justify-center">
                        <img src="/icons/price.svg" alt="Доступные цены" />
                        <p className="mt-4">Доступные цены</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3">
                        <img src="/icons/shop.svg" alt="Широкий ассортмент" />
                        <p className="mt-4">Широкий ассортмент</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3">
                        <img src="/icons/com.svg" alt="Высокое качество" />
                        <p className="mt-4">Высокое качество</p>
                    </div>
                </div>
                <div className="relative w-1/4 h-50 bg-[#9F9E9E] flex justify-center items-center">
                    <img src="/icons/help.svg"></img>
                </div>
            </section>
            <HelpForm></HelpForm>
            <section className="flex w-3/4 mx-auto my-23 flex-col">
                <h2 className="font-bold">Каталог</h2>
                <div className="grid grid-cols-3 gap-20 mt-7.5">
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png" alt="Генератор в сборке"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img src="/images/main-catalog.png"></img>
                        <p>Генератор в сборке</p>
                    </div>
                </div>
            </section>
            <Service></Service>
                <section className="my-23 w-3/4 mx-auto flex flex-col gap-7.5">
                    <div className="flex justify-between align-center">
                        <h2 className="bold">Новости</h2>
                        <div className="align-center flex flex-row justify-between gap-4">
                            <img src="/icons/swapLeft.svg"></img>
                            <img src="/icons/SwapRight.svg"></img>
                        </div>
                    </div>
                    <div className="flex flex-row py-7 gap-15">
                        <div className="flex flex-col align-center w-1/5">
                            <img src="/images/main-news.png"></img>
                            <span className="flex justify-between flex-row my-4 mx-5 text-gray-400">
                                <p>Новости</p>
                                <p>24.05.2024</p>
                            </span>
                            <hr className="flex border-gray-400 mx-5"></hr>
                            <h4 className="my-2 mx-5">Узлы для ремонта рулевых реек</h4>
                            <p className="mx-5 text-gray-400">Поступили в продажу детали для ремонта рулевых агрегатов: блок-втулки, части распределителей...</p>
                            <button className="mt-3 text-lg text-gray-400 border-gray-400">Подробнее</button>
                        </div>
                        <div className="flex flex-col align-center w-1/5">
                            <img src="/images/main-news.png"></img>
                            <span className="flex justify-between flex-row my-4 mx-5 text-gray-400">
                                <p>Новости</p>
                                <p>24.05.2024</p>
                            </span>
                            <hr className="flex border-gray-400 mx-5"></hr>
                            <h4 className="my-2 mx-5">Узлы для ремонта рулевых реек</h4>
                            <p className="mx-5 text-gray-400">Поступили в продажу детали для ремонта рулевых агрегатов: блок-втулки, части распределителей...</p>
                            <button className="mt-3 text-lg text-gray-400 border-gray-400">Подробнее</button>
                        </div>
                        <div className="flex flex-col align-center w-1/5">
                            <img src="/images/main-news.png"></img>
                            <span className="flex justify-between flex-row my-4 mx-5 text-gray-400">
                                <p>Новости</p>
                                <p>24.05.2024</p>
                            </span>
                            <hr className="flex border-gray-400 mx-5"></hr>
                            <h4 className="my-2 mx-5">Узлы для ремонта рулевых реек</h4>
                            <p className="mx-5 text-gray-400">Поступили в продажу детали для ремонта рулевых агрегатов: блок-втулки, части распределителей...</p>
                            <button className="mt-3 text-lg text-gray-400 border-gray-400">Подробнее</button>
                        </div>
                        <div className="flex flex-col align-center w-1/5">
                            <img src="/images/main-news.png"></img>
                            <span className="flex justify-between flex-row my-4 mx-5 text-gray-400">
                                <p>Новости</p>
                                <p>24.05.2024</p>
                            </span>
                            <hr className="flex border-gray-400 mx-5"></hr>
                            <h4 className="my-2 mx-5">Узлы для ремонта рулевых реек</h4>
                            <p className="mx-5 text-gray-400">Поступили в продажу детали для ремонта рулевых агрегатов: блок-втулки, части распределителей...</p>
                            <button className="mt-3 text-lg text-gray-400 border-gray-400">Подробнее</button>
                        </div>
                    </div>
                </section>
                </div>
            <Footer></Footer>
        </div>
    );
}