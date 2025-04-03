"use client"
import Header from "../components/Header";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginCard from "../components/Auth/login";

interface NewsCardProps {
  image: string;
  title: string;
  paragraph: string;
  date: string;
}

interface SalesCardProps {
    image: string;
    title: string;
    paragraph: string;
    date: string;
  }

function NewsCard({ image, title, paragraph, date }: NewsCardProps) {
  return (
    <div className="flex flex-col w-1/3 my-7.5"  style={{ border: "1px solid #9F9E9E" }}>
      <Image
        src={image}
        alt="Картинка"
        width={400}
        height={268}
        className="w-full object-cover"
        style={{height:"15vw"}}
      />
        <div className="px-6.5 py-4 flex flex-col gap-4"  style={{height:"16vw"}}>
            <h3 className="font-semibold">{title}</h3>
            <h4>{paragraph}</h4>
            <div className="flex flex-row justify-between items-center text-gray-400 mt-auto">
                <p>{date}</p>
                <p>Новости</p>
            </div>
        </div>
    </div>
  );
}

function SalesCard({ image, title, paragraph, date }: SalesCardProps) {
    return (
      <div className="flex flex-col w-1/3 my-7.5"  style={{ border: "1px solid #9F9E9E" }}>
        <Image
          src={image}
          alt="Картинка"
          width={400}
          height={268}
          className="w-full object-cover"
          style={{height:"15vw"}}
        />
          <div className="px-6.5 py-4 flex flex-col gap-4"  style={{height:"16vw"}}>
              <h3 className="font-semibold">{title}</h3>
              <h4>{paragraph}</h4>
              <div className="flex flex-row justify-between items-center text-gray-400 mt-auto">
                <p>Акция</p>
                <p>до {date}</p>
              </div>
          </div>
      </div>
    );
  }

export default function NewsPage() {
  const [loginOpen, setLoginOpen] = useState(false);
      useEffect(() => {
          if (loginOpen) {
              document.body.style.overflow = "hidden";
          } else {
              document.body.style.overflow = "auto";
          }
      }, [loginOpen]);
  return (
    <div >
      <Header onLoginOpen={() => setLoginOpen(true)} ></Header>
      <div className="w-3/4 mx-auto">
        <span className="fixed top-1/8 right-1/22 w-2/5 inset-0 z-20 ml-auto h-[582px]"><LoginCard open={loginOpen} onClose={() => setLoginOpen(false)} ></LoginCard></span>
      </div>
      <div className={loginOpen ? " bg-gray-300  filter brightness-40 h-screen overflow-hidden" : " "}>
      <section className="w-3/4 mx-auto flex flex-col">
        <p className="text-gray-400 my-7.5">Главная / Новости</p>
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-semibold">Новости</h2>
          <div className="flex flex-row justify-between gap-4">
            <Image src="/icons/swapLeft.svg" alt="swap left" width={24} height={24} />
            <Image src="/icons/SwapRight.svg" alt="swap right" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-row w-full">
            <NewsCard
            image="/images/servis.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Поступили в продажу детали для ремонта 
            рулевых агрегатов: блок-втулки, части распределителей,
            детали узла поджима гидравлических, механических и электрических рулевых реек. Эти и другие запасные части Вы сможете найти...`}
            date="24.05.2025"
            />
            <NewsCard
            image="/images/fuel.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Поступили в продажу гидроцилиндры, гидрораспределители, гидронасосы для спецтехники VOLVO, Caterpillar, HITACHI, HYUNDAI, KOMATSU, JCB.`}
            date="24.05.2025"
            />
            <NewsCard
            image="/images/servis.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Поступили в продажу детали для ремонта рулевых агрегатов: блок-`}
            date="24.05.2025"
            />
        </div>
        <div className="flex flex-row justify-between items-center mt-22.5">
          <h2 className="font-semibold">Акции</h2>
          <div className="flex flex-row justify-between gap-4">
            <Image src="/icons/swapLeft.svg" alt="swap left" width={24} height={24} />
            <Image src="/icons/SwapRight.svg" alt="swap right" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-row w-full mb-22.5">
            <SalesCard
            image="/images/fuel.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Теперь у нас в продаже — детали для ремонта рулевых агрегатов! 
                Только до 24.05.2025 действует скидка 10%. Успейте выгодно приобрести уникальное предложение!`}
            date="24.05.2025"
            />
            <SalesCard
            image="/images/servis.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Теперь у нас в продаже — детали для ремонта рулевых агрегатов! 
                Только до 24.05.2025 действует скидка 10%. Успейте выгодно приобрести уникальное предложение!`}
            date="24.05.2025"
            />
            <SalesCard
            image="/images/fuel.png"
            title="Комплектующие для ремонта рулевых реек"
            paragraph={`Теперь у нас в продаже — детали для ремонта рулевых агрегатов! 
                Только до 24.05.2025 действует скидка 10%. Успейте выгодно приобрести уникальное предложение!`}
            date="24.05.2025"
            />
        </div>
      </section>
      </div>
      <Service />
      <Footer />
    </div>
  );
}
