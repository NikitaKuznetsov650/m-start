"use client";
import Header from "../components/Header";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Image from "next/image";
import LoginCard from "../components/Auth/login";
import { useEffect, useState } from "react";

export default function AboutUsPage() {
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
            <Header onLoginOpen={() => setLoginOpen(true)} />
            <div className="w-3/4 mx-auto">
                <span className="fixed top-1/8 right-1/22 w-2/5 inset-0 z-20 ml-auto h-[582px]">
                    <LoginCard open={loginOpen} onClose={() => setLoginOpen(false)} />
                </span>
            </div>
            <div className={loginOpen ? "bg-gray-300 filter brightness-40 h-screen overflow-hidden" : ""}>
                <section className="w-3/4 mx-auto flex flex-col">
                    <p className="text-gray-400 my-7.5">Главная / О компании</p>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <h2 className="font-semibold">О компании</h2>
                            <div className="align-center flex flex-row justify-between gap-4">
                                <img src="/icons/swapLeft.svg" />
                                <img src="/icons/SwapRight.svg" />
                            </div>
                        </div>
                        <Image
                            src="/images/about-cover.png"
                            width={255}
                            height={255}
                            className="z-0 w-full mt-7.5"
                            alt="Photo"
                        />
                    </div>

                    <div className="flex flex-row justify-between mt-15 mb-22.5 items-center">
                        <div>
                            <h1 className="font-light">6 лет</h1>
                            <h5 className="text-gray-400 mt-1">на рынке запчастей</h5>
                            <h1 className="font-light mt-7.5">2500+</h1>
                            <h5 className="text-gray-400 mt-1">товаров в магазине</h5>
                        </div>
                        <div className="w-2/5">
                            <h2 className="mb-7.5 font-semibold">
                                <span className="text-[#08457E]">M-STARTER</span> — магазин запчастей для стартеров и генераторов.
                            </h2>
                            <h4>
                                Мы предлагаем исключительно качественные детали, а наш профессиональный персонал
                                всегда готов помочь вам правильно подобрать необходимую запчасть.
                            </h4>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <h2 className="font-semibold">Команда</h2>
                        <p className="text-gray-400">0-4</p>
                    </div>
                    <div className="flex flex-row justify-between mt-7.5">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/images/Photo.png"
                                width={255}
                                height={255}
                                className="z-0"
                                alt="Photo"
                            />
                            <h4 className="mt-2.5">Иван Иванов</h4>
                            <p className="text-gray-400 mt-1 mb-4">Менеджер</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/images/Photo.png"
                                width={255}
                                height={255}
                                className="z-0"
                                alt="Photo"
                            />
                            <h4 className="mt-2.5">Иван Иванов</h4>
                            <p className="text-gray-400 mt-1 mb-4">Менеджер</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/images/Photo.png"
                                width={255}
                                height={255}
                                className="z-0"
                                alt="Photo"
                            />
                            <h4 className="mt-2.5">Иван Иванов</h4>
                            <p className="text-gray-400 mt-1 mb-4">Менеджер</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/images/Photo.png"
                                width={255}
                                height={255}
                                className="z-0"
                                alt="Photo"
                            />
                            <h4 className="mt-2.5">Иван Иванов</h4>
                            <p className="text-gray-400 mt-1 mb-4">Менеджер</p>
                        </div>
                    </div>
                </section>
            </div>
            <Service />
            <Footer />
        </div>
    );
}