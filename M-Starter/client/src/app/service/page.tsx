'use client';
import Image from "next/image";
import WorkExamples from "../components/Works";
import EquipmentSlider from "../components/Gallery";
import YandexMap from "../components/Map";
import Footer from "../components/Footer";

export default function ServicePage() {
    return (
        <div>
            <section className="relative h-[712px] flex text-white">
                <div className="absolute inset-0">
                    <Image
                        src="/images/home-page-title.png"
                        alt="Фон"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 text-left px-6 mx-50">
                    <h1 className="text-5xl md:text-5xl mt-50 font-medium">
                        M-Starter<br />Сервис по ремонту
                    </h1>
                    <p className="text-lg max-w-md mt-5">
                        Ремонт стартеров и генераторов от мастеров с 5-летним опытом, гарантией на все виды 
                        работ и только оригинальные запчасти.
                    </p>
                    <div className="mt-6 flex gap-4 justify-start text-lg">
                        <button className="w-[205px] h-[60px] px-6 py-3 bg-white text-black font-regular shadow-lg hover:bg-gray-300">
                            Перезвонить
                        </button>
                        <button className="w-[205px] h-[60px] px-6 py-3 border-2 border-white font-regular hover:bg-white hover:text-black">
                            Как добраться?
                        </button>
                    </div>
                </div>
            </section>
            <section className="px-50 py-23">
                <h2 className="max-w-xl font-bold leading-[130%">Мы - эксперты по ремонту стартеров и генераторов</h2>
                <div className="flex flex-row gap-35 mt-8">
                    <div className="max-w-md">
                        <h3 className="font-semibold text-gray-300">Собственный магазин</h3>
                        <p className="text-xl mt-2.5">Вам не придется тратить время на поиски запчастей — мы крупнейший магазин в городе 
                            с 95% ассортимента деталей для стартеров и генераторов</p>
                    </div>
                    <div className="max-w-md">
                        <h3 className="font-semibold text-gray-300">Современное оборудование</h3>
                        <p className="text-xl mt-2.5">Каждую деталь проверяем на современном оборудовании, чтобы исключить замену «наугад».
                            Сокращая этимм расходы и время на ремонт.</p>
                    </div>
                    <div className="max-w-md">
                        <h3 className="font-semibold text-gray-300">Гарантия «2 в 1»</h3>
                        <p className="text-xl mt-2.5">При заказе запчастей в нашем магазине и их дальнейшем монтаже в сервисе 
                            — двойная гарантия: как на детали, так и на выполненные работы.</p>
                    </div>
                </div>
                <h2 className="mt-23 font-bold">Наши работы</h2>
                <div>
                    <WorkExamples 
                        imageSrc="/images/work.png"  
                        title="Замена коллектора якоря генератора"
                        text1="Причина обращения: отсутствие зарядки, шум генератора."
                        text2="Выявленные неисправности: замена коллектора якоря, щеток и подшипников."
                        text3="Ремонт: выполнен оперативно с очисткой корпуса и восстановлением статорной обмотки."    
                        imagePosition="left"
                    />
                    <WorkExamples 
                        imageSrc="/images/work.png"  
                        title="Замена коллектора якоря генератора"
                        text1="Причина обращения: отсутствие зарядки, шум генератора."
                        text2="Выявленные неисправности: замена коллектора якоря, щеток и подшипников."
                        text3="Ремонт: выполнен оперативно с очисткой корпуса и восстановлением статорной обмотки."    
                        imagePosition="right"
                    /> 
                    <WorkExamples 
                        imageSrc="/images/work.png"  
                        title="Замена коллектора якоря генератора"
                        text1="Причина обращения: отсутствие зарядки, шум генератора."
                        text2="Выявленные неисправности: замена коллектора якоря, щеток и подшипников."
                        text3="Ремонт: выполнен оперативно с очисткой корпуса и восстановлением статорной обмотки."    
                        imagePosition="left"
                    /> 
                </div>
                <EquipmentSlider></EquipmentSlider>
                <div className="mt-23 mb-7.5 flex flex-row justify-between items-center">
                    <h2 className="font-bold justify-start">Как добраться</h2>
                    <p className="text-right text-gray-400 text-md">г. Костанай, ул. Рабочая 143 </p>
                </div>
                <YandexMap></YandexMap>
            </section>
            <section className="bg-[#08457E] py-13 px-[12.5vw] w-full">
                <h2 className="text-white font-semibold align">Собственный магазин</h2>
                    <div className="flex flex-row mt-7.5">
                        <div className="max-w-lg mr-[3.75vw]">
                            <p className="text-white leading-snug font-normal text-lg">Мы предлагаем полный ассортимент деталей для стартеров и генераторов, исключая необходимость поиска 
                            в других магазинах. Наш склад — крупнейший в регионе, с широким выбором доступных позиций в наличии или под заказ.</p>
                            <br></br>
                            <p className="text-white leading-snug font-normal text-lg">Все запчасти проходят многоуровневый контроль качества и соответствуют оригинальным стандартам. 
                            При покупке с установкой в нашем сервисе — гарантия на детали и работы, что минимизирует ваши риски.</p>
                            <button className="w-[205px] h-[60px] px-6 py-3 border-2 border-yellow-500 font-regular text-white bg-transparent">
                            Перейти
                            </button>
                        </div>
                        <img src="/images/shop1.png" alt="Изображение магазина" style={{width:"35.625vw", height:"auto"}}></img>
                    </div>
                </section>
                <Footer></Footer>
        </div>

    );
}
