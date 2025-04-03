'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface EquipmentItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const equipmentData: EquipmentItem[] = [
    {
        id: 1,
        title: 'ARC-211',
        description:
            'Тестер, имитирующий сигналы автомобильных ЭБУ для управления регуляторами генераторов (Lin, BSS).',
        imageUrl: '/images/equip1.png',
    },
    {
        id: 2,
        title: 'Тестер-регулятор',
        description:
            'Тестер для проверки регуляторов напряжения. Может использоваться совместно с генератором для проверки исправности зарядных цепей.',
        imageUrl: '/images/equip2.png',
    },
    {
        id: 3,
        title: 'Тестер диодных мостов',
        description:
            'Тестер для диагностики моста при токе 10-25 А. Диагностирует фишки статора на механические и коррозионные замыкания.',
        imageUrl: '/images/equip3.png',
    },
    {
        id: 4,
        title: 'Тестер-регулятор',
        description:
            'Тестер, имитирующий сигналы автомобильного ЭБУ для управления регуляторами генераторов (LIN, BSS). Оснащен осциллографом.',
        imageUrl: '/images/equip1.png',
    },
];

interface EquipmentCardProps {
    item: EquipmentItem;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ item }) => {
    return (
        <div style={{ padding: '0 0px' }}>
            <div
                style={{
                    overflow: 'hidden',
                    textAlign: 'center',
                    marginRight: '60px',
                }}
            >
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
                />
                <h3 className='text-gray-400'>{item.title}</h3>
                <p
                    style={{
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '0px',
                        marginTop: '10px',
                        textAlign: 'left',
                    }}
                >
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const EquipmentSlider: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className='mt-23 mb-7.5'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <h2 className="font-bold">Оборудование</h2>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <img
                        src="./icons/swapLeft.svg"
                        onClick={() => sliderRef.current?.slickPrev()}
                        style={{
                            marginRight: '14px',
                            cursor: 'pointer',
                        }}
                    ></img>
                    <img
                        src="./icons/swapRight.svg"
                        onClick={() => sliderRef.current?.slickNext()}
                        style={{
                            fontSize: '24px',
                            cursor: 'pointer',
                        }}
                    ></img>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {equipmentData.map((item) => (
                    <EquipmentCard key={item.id} item={item} />
                ))}
            </Slider>
        </div>
    );
};

export default EquipmentSlider;
