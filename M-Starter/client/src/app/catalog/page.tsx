"use client"
import Header from "../components/Header"
import Service from "../components/Service"
import Footer from "../components/Footer"
import LoginCard from "../components/Auth/login"
import { useEffect, useState } from "react"
import Image from "next/image"
import {ChevronDown, ChevronUp, CircleHelp} from "lucide-react"
import { ReactNode } from "react";

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

const options = [
    { id: 1, name: 'BOSCH' },
    { id: 2, name: 'MITSBA' },
    { id: 3, name: 'PONG SUNG' },
    { id: 4, name: 'LADA' },
    { id: 5, name: 'ISKRA' },
  ]

function RecommendItem({ amount, articul, name, price, vo, am, st, A, B, C }: RecommendItemProps) {
    return (
        <div className="w-full flex flex-col px-4.5 py-6.5 gap-2 my-7.5" style={{ border: "1px solid #F3F3F3" }}>
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

function Disclosure({ title, children }: { title: string; children: ReactNode }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="w-full text-[#282828] pb-10 border-b">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setOpen(!open)}
        >
        <span className="flex flex-row justify-between items-center">
          <h4 className="font-semibold">{title}</h4>
          <div className="ml-auto">
            {open ? (
              <ChevronUp className="w-[28px] h-[28px]" />
            ) : (
              <ChevronDown className="w-[28px] h-[28px]" />
            )}
          </div>
          </span>
          {open && (
          <div className="w-1/2 flex flex-col gap-5 mt-4">
            {children}
          </div>
        )}
        </div>
      </div>
    );
  }
  

export default function CatalogPage() {
    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
        if (loginOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [loginOpen]);

    const [selected, setSelected] = useState(options[0])
    const [query, setQuery] = useState('')
  
    const filteredOptions =
      query === ''
        ? options
        : options.filter((option) =>
            option.name.toLowerCase().includes(query.toLowerCase())
          )

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
                    <p className="text-gray-400 my-7.5">Главная / Каталог / Генераторы в сборе</p>
                    <div className="flex flex-col">
                        <h2 className="font-semibold mb-7.5">Генераторы в сборе (легковые)</h2>
                        <div className="flex flex-wrap gap-7.5 mb-6 text-lg">
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Диодные мосты</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Диоды генератора</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Коллекторы</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Задние крышки</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Передние крышки</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Помпы вакуумные</button>
                            <button className=" text-gray-700 py-2 px-4 rounded" style={{border:"1px solid #F3F3F3"}}>Ремкомплекты</button>
                        </div>
                        <div className='flex flex-row w-full gap-15'>
                            <form className="flex flex-col gap-4 w-1/5">
                                <div className="flex flex-row p-6 items-center justify-between h-[75px]" style={{border:"1px solid #F3F3F3"}}> 
                                    <h4 className="underline">Как измерить?</h4>
                                    <CircleHelp />
                                </div>
                                <div className="flex flex-col p-6  justify-between h-[126px]" style={{border:"1px solid #F3F3F3"}}> 
                                    <h4 className="font-semibold">Конструктив</h4>
                                    <span className="flex flex-row justify-between items-center " style={{border:"1px solid #9F9E9E"}}> 
                                    <select className="
                                        block w-full py-2 pl-3 pr-10
                                        border border-gray-300
                                        rounded
                                        shadow-sm
                                        focus:outline-none
                                        focus:ring-1
                                        focus:ring-blue-500
                                        focus:border-blue-500
                                        appearance-none
                                        bg-white bg-[url('/icons/down.svg')] bg-[right_5px_center] bg-no-repeat
                                        ">
                                        <option>BOSCH</option>
                                        <option>MITSBA</option>
                                        <option>PONG SUNG</option>
                                        <option>LADA</option>
                                        <option>ISKRA</option>
                                    </select>
                                    </span>
                                </div>
                                <div className="p-6 h-auto" style={{border:"1px solid #F3F3F3"}}>
                                    <Disclosure title="Вольтаж (Vo)">
                                    <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>12</span>
                                     </label>
                                     <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>24</span>
                                     </label>
                                     <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>28</span>
                                     </label>
                                     <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>32</span>
                                     </label>
                                     <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>56</span>
                                     </label>
                                    </Disclosure>
                                </div>
                                <div className="flex flex-col p-6  justify-between h-[222px]" style={{border:"1px solid #F3F3F3"}}> 
                                    <h4 className="font-semibold">Номер сигнала (ID)</h4>
                                    <span className="flex flex-row justify-between items-center mt-2 mb-3" style={{border:"1px solid #9F9E9E"}}> 
                                    <select className="
                                        block w-full py-2 pl-3 pr-10
                                        border border-gray-300
                                        rounded
                                        shadow-sm
                                        focus:outline-none
                                        focus:ring-1
                                        focus:ring-blue-500
                                        focus:border-blue-500
                                        appearance-none
                                        bg-white bg-[url('/icons/down.svg')] bg-[right_5px_center] bg-no-repeat
                                        ">
                                        <option>Выбрать</option>
                                        <option>BOSCH</option>
                                        <option>MITSBA</option>
                                        <option>PONG SUNG</option>
                                        <option>LADA</option>
                                        <option>ISKRA</option>
                                    </select>
                                    </span>
                                    <h4 className="font-semibold">Сигнал (S)</h4>
                                    <span className="flex flex-row justify-between items-center mt-2" style={{border:"1px solid #9F9E9E"}}> 
                                    <select className="
                                        block w-full py-2 pl-3 pr-10
                                        border border-gray-300
                                        rounded
                                        shadow-sm
                                        focus:outline-none
                                        focus:ring-1
                                        focus:ring-blue-500
                                        focus:border-blue-500
                                        appearance-none
                                        bg-white bg-[url('/icons/down.svg')] bg-[right_5px_center] bg-no-repeat
                                        ">
                                        <option>Выбрать</option>
                                        <option>BOSCH</option>
                                        <option>MITSBA</option>
                                        <option>PONG SUNG</option>
                                        <option>LADA</option>
                                        <option>ISKRA</option>
                                    </select>
                                    </span>
                                </div>
                                <div className="p-6 h-auto items-center justify-center" style={{border:"1px solid #F3F3F3"}}>
                                    <h4 className="font-semibold mb-2">Количество ручьев (GR)</h4>
                                    <span className="flex flex-row text-gray-400 items-center gap-2">
                                        <p>от</p> <input className="w-[60px] px-2.5" placeholder="min" style={{border:"1px solid #9F9E9E"}}></input>
                                        <p>до</p> <input className="w-[60px] px-2.5" placeholder="max" style={{border:"1px solid #9F9E9E"}}></input></span>                           
                                </div>
                                <div className="p-6 h-auto flex flex-col gap-3" style={{border:"1px solid #F3F3F3"}}>
                                    <Disclosure title="Размеры (мм)">
                                    <h4 className="whitespace-nowrap">Посадочное место А</h4>
                                    <span className="flex flex-row text-gray-400 items-center gap-2">
                                        <p>от</p> <input className="w-[60px] px-2.5" placeholder="min" style={{border:"1px solid #9F9E9E"}}></input>
                                        <p>до</p> <input className="w-[60px] px-2.5" placeholder="max" style={{border:"1px solid #9F9E9E"}}></input></span>                           
                        
                
                                    <h4 className="whitespace-nowrap">Посадочное место B</h4>
                                    <span className="flex flex-row text-gray-400 items-center gap-2">
                                        <p>от</p> <input className="w-[60px] px-2.5" placeholder="min" style={{border:"1px solid #9F9E9E"}}></input>
                                        <p>до</p> <input className="w-[60px] px-2.5" placeholder="max" style={{border:"1px solid #9F9E9E"}}></input></span>                          
                
                                    <h4 className="whitespace-nowrap">Посадочное место C</h4>
                                    <span className="flex flex-row text-gray-400 items-center gap-2">
                                        <p>от</p> <input className="w-[60px] px-2.5" placeholder="min" style={{border:"1px solid #9F9E9E"}}></input>
                                        <p>до</p> <input className="w-[60px] px-2.5" placeholder="max" style={{border:"1px solid #9F9E9E"}}></input></span>                           
                                </Disclosure>
                                </div>
                                <div className="p-6 h-auto" style={{border:"1px solid #F3F3F3"}}>
                                    <Disclosure title="Помпа">
                                    <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>Есть</span>
                                     </label>
                                     <label key="" className="flex items-center space-x-2 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="w-5 h-5 border-gray-400 rounded-md focus:ring-blue-500"
                                        />
                                        <span>Нет</span>
                                     </label>
                 
                                    </Disclosure>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button type="submit" className="bg-[#08457E] text-white py-2 px-4 h-[45px]">Применить</button>
                                    <button type="reset" className="bg-[#9F9E9E] text-white py-2 px-4 h-[45px]">Сброс</button>
                                </div>
                            </form>
                        
                            <div className="grid grid-cols-3 gap-6 w-3/4">
                            {[...Array(12)].map((_, i) => (
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
                        </div>

                        
                        <div className="my-23 w-1/3 flex flex-row gap-3  items-center text-center space-x-2 mx-auto">
                            <button className="w-1/7 h-[52px]  px-3 py-1 border rounded bg-[#F3F3F3] mr-10">{'<'}</button>
                            <button className="w-1/7 h-[52px] px-3 py-1 border rounded bg-[#F3F3F3]">1</button>
                            <button className="w-1/7 h-[52px] px-3 py-1 border rounded bg-[#F3F3F3]">2</button>
                            <button className="w-1/7 h-[52px] px-3 py-auto bg-[#F3F3F3]">...</button>
                            <button className="w-1/7 h-[52px] px-3 py-1 border rounded bg-[#F3F3F3]">16</button>
                            <button className="w-1/7  h-[52px] px-3 py-1 border rounded bg-[#F3F3F3]">17</button>
                            <button className="w-1/7 h-[52px] px-3 py-1 border rounded bg-[#F3F3F3] ml-10">{'>'}</button>
                        </div>

                    </div>
                </section>
            </div>
            <Service />
            <Footer />
        </div>
    )
}

