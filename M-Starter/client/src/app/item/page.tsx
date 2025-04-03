"use client"
import Header from "../components/Header"
import Service from "../components/Service"
import Footer from "../components/Footer"
import LoginCard from "../components/Auth/login"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

interface RecommendItemProps {
    amount: number;
    articul: string;
    name: string;
    price: string;
    vo: string;
    am: string;
    st: string;
    A: string;
    B: string;
    C: string;
}

const products = [
    { id: 1, code: "SQ3969-5925", brand: "KRAUF", price: "32 000 ₸", stock: "Да (10)" },
    { id: 2, code: "SQ3969-5925", brand: "KRAUF", price: "32 000 ₸", stock: "Да (10)" },
    { id: 3, code: "SQ3969-5925", brand: "KRAUF", price: "32 000 ₸", stock: "Да (10)" },
    { id: 4, code: "SQ3969-5925", brand: "KRAUF", price: "32 000 ₸", stock: "Нет" },
    { id: 5, code: "SQ3969-5925", brand: "WIX", price: "32 000 ₸", stock: "Да (10)" },
];

function RecommendItem({ amount, articul, name, price, vo, am, st, A, B, C }: RecommendItemProps) {
    return (
        <div className="w-23/100 flex flex-col px-4.5 py-6.5 gap-2 my-7.5" style={{ border: "1px solid #F3F3F3" }}>
            <Image src="/images/recommend-img.png" alt="Иллюстрация" width={245} height={200} className="mx-auto" />
            <span className="text-gray-400 flex flex-row justify-between">
                <p>В наличии {amount}</p>
                <p>Арт: {articul}</p>
            </span>
            <h4>{name}</h4>
            <div className="flex flex-row justify-between text-gray-400">
                <p>
                    vo: {vo} <br />
                    am: {am} <br />
                    st: {st}
                </p>
                <p>
                    Размер A: {A} <br />
                    Размер B: {B} <br />
                    Размер C: {C}
                </p>
            </div>
            <hr />
            <h4>{price}</h4>
            <button className="bg-[#F3F3F3] text-gray-400 h-[45px] w-full">Подробнее</button>
        </div>
    );
}

export default function CatalogPage() {
    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = loginOpen ? "hidden" : "auto";
    }, [loginOpen]);

    const [count, setCount] = useState(0);

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
                    <p className="text-gray-400 my-7.5">Главная / Каталог / Генераторы в сборе / Генератор ALA0016</p>
                    <h2 className="font-semibold">Генератор ALA0016</h2>
                    <div className="my-7.5 w-1/2 flex flex-row justify-between">
                        <h4>В наличии (1)</h4>
                        <h4 className="text-gray-400">Арт: SQ3969-5925</h4>
                        <span className="flex flex-row gap-2.5">
                            <h4>Поделиться:</h4>
                            <img src="/icons/Twitter.svg" alt="Twitter" />
                            <img src="/icons/Facebook.svg" alt="Facebook" />
                            <img src="/icons/telegram.svg" alt="Telegram" />
                        </span>
                        <h4 className="underline">Заказать</h4>
                    </div>
                </section>
                <section className="w-3/4 mx-auto flex flex-row">
                    <div className="w-1/2 p-7.5" style={{ border: "1px solid #F3F3F3" }}>
                        <span className="flex flex-row justify-between w-full">
                            <h4 className="text-gray-400">3 - 6</h4>
                            <div className="flex flex-row justify-between gap-4">
                                <Image src="/icons/swapLeft.svg" alt="swap left" width={24} height={24} />
                                <Image src="/icons/SwapRight.svg" alt="swap right" width={24} height={24} />
                            </div>
                        </span>
                        <Image src="/images/recommend-img.png" alt="Иллюстрация" width={286} height={286} className="mx-auto py-15" />
                        <div className="flex flex-row z-5">
                            {[...Array(5)].map((_, i) => (
                                <Image
                                    key={i}
                                    src="/images/recommend-img.png"
                                    alt="Иллюстрация"
                                    width={108}
                                    height={107}
                                    className="w-1/6"
                                    style={{ border: "1px solid #F3F3F3" }}
                                />
                            ))}
                            <Image src="/images/Photobox.png" alt="Plan" width={209} height={197} className="z-10 relative w-full" />

                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="border border-gray-300 rounded-md text-sm text-gray-800 p-7.5">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="mb-4">Характеристики</h4>
                                    <ul className="space-y-1 text-[#9F9E9E] gap-2.5">
                                        <li>Конструктив: <span className="text-gray-700 text-md">FORD</span></li>
                                        <li>Вольтаж (V): <span className="text-gray-700 text-md">12</span></li>
                                        <li>Сила тока (Am): <span className="text-gray-700 text-md">105</span></li>
                                        <li>OD1: <span className="text-gray-700 text-md">130</span></li>
                                        <li>OD2: <span className="text-gray-700 text-md">130</span></li>
                                        <li>ID1: <span className="text-gray-700 text-md">82</span></li>
                                        <li>Вес: <span className="text-gray-700 text-md">2.3</span></li>
                                        <li>Высота (H): <span className="text-gray-700 text-md">222</span></li>
                                        <li>Кол-во терминалов: <span className="text-gray-700 text-md">3</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-4">Комплектующие (все)</h4>
                                    <ul className="space-y-1 text-[#9F9E9E] gap-2.5">
                                        {["KIA 0K55818300", "KIA 0K55818300", "KIA 0K55818300", "KRAUF ALA0016BS", "KRAUF ALA0016GB", "KRAUF ALA0016UK", "KRAUF ALA0016UR", "Mando AB111125", "Motorherz 2", "Valeo TA000A37301"].map((item, i) => (
                                            <li key={i}><span className='text-gray-700'>{item} </span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className=" mb-2">Кросс-номера</h4>
                                <ul className="space-y-1  text-[#9F9E9E] gap-2.5" >
                                    {["AS A5090", "Cargo 116096", "CAS CAL411063", "Hyundai 0K9BV18300", "KIA 0K55818300"].map((item, i) => (
                                        <li key={i}><span className=''>{item} </span></li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-auto font-bold hover:underline ">Показать еще</button>
                        </div>
                    </div>
                </section>
                <section className="w-3/4 bg-[#08457E] mx-auto flex flex-row px-7.5 py-7.5 justify-between items-center my-23">
                    <div className="w-1/2 flex flex-col text-white gap-7.5">
                        <h2 className="font-semibold">Обратите внимание</h2>
                        <h4>Цены, избранное и другие удобные функции доступны 
                        только зарегистрированным пользователям. Если у вас уже есть аккаунт, войдите в систему через 
                        форму, которая находится в правом верхнем углу страницы</h4>
                    </div>
                    <Image src="/images/attention.png" alt="Мошенники" height={188} width={555}/>
                </section>

                <section className="w-3/4 mx-auto flex flex-col my-23">
                    <h3 className="font-semibold">Заказать</h3>
                    <div className="w-full overflow-x-auto rounded-lg p-4">
                        <table className="w-full border-collapse flex flex-col">
                            <thead>
                                <tr className=" text-gray-700 text-left flex w-full">
                                    <th className="p-2 w-1/6">Артикул</th>
                                    <th className="p-2 w-1/6">Производитель</th>
                                    <th className="p-2 w-1/6">Цена</th>
                                    <th className="p-2 w-1/6">В наличии</th>
                                    <th className="p-2 w-1/6">Корзина</th>
                                    <th className="p-2 w-1/6">Быстрая покупка</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b flex justify-between">
                                        <td className="p-2 w-1/6 items-center">{product.code}</td>
                                        <td className="p-2 w-1/6 text-gray-400 items-center">{product.brand}</td>
                                        <td className="p-2 w-1/6 items-center">{product.price}</td>
                                        <td className="p-2 w-1/6 text-gray-400 items-center">{product.stock}</td>
                                        <td className="p-2 w-1/6 flex items-center space-x-2">
                                            <button 
                                                className="border px-2" 
                                                onClick={() => setCount(prev => Math.max(prev - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <span>{count}</span>
                                            <button 
                                                className="border px-2 py-1 rounded" 
                                                onClick={() => setCount(prev => prev + 1)}
                                            >
                                                +
                                            </button>
                                            <Heart></Heart>
                                        </td>
                                        <td className="w-1/6 flex flex-row gap-1 items-center">
                                            <img src="/icons/Kaspi.svg"></img>
                                            <p className="text-red-500">kaspi buy</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="w-3/4 mx-auto flex flex-col my-23">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="font-semibold">Релевантные товары</h2>
                        <div className="flex flex-row justify-between gap-4">
                            <Image src="/icons/swapLeft.svg" alt="swap left" width={24} height={24} />
                            <Image src="/icons/SwapRight.svg" alt="swap right" width={24} height={24} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        {[...Array(4)].map((_, i) => (
                            <RecommendItem
                                key={i}
                                amount={1}
                                articul={"SQ3969-5925"}
                                name={"Генератор ALA0016"}
                                vo={"12 volt"}
                                am={"110 amp"}
                                st={"L-S"}
                                A={"42mm"}
                                B={"19mm"}
                                C={"61mm"}
                                price={"1700 – 2000₸"}
                            />
                        ))}
                    </div>
                </section>
            <Service />
            <Footer />
            </div>
        </div>
    
    )
}