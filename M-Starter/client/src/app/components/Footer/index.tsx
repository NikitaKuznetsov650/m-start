import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      {/* Основная часть футера */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-row">
        
        {/* Левая колонка: логотип и меню */}
        <div className="w-full md:w-auto">
          <div className="mb-4">
            {/* Замените src, width, height на нужные */}
            <Image
              src="/icons/logo.svg"
              alt="M-STARTER"
              width={315}
              height={54}
              style={{width: '19.6875vw', height: 'auto'}}
            />
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="" className="hover:text-orange-500 transition-colors text-md mb-3">Главная</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors text-md mb-3">Каталог</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors text-md mb-3">О компании</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors text-md mb-3">Помощь</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors text-md mb-3">Новости</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-row mt-44.5 justify-center items-center space-y-4">
            <div className="flex items-center mr-7.5">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              <a href="" className="hover:text-orange-500 transition-colors text-sm ml-2.5">Instagram</a>
            </div>
            <div className="flex items-center mr-7.5">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              <a href="" className="hover:text-orange-500 transition-colors text-sm ml-2.5">Whatsapp</a>
            </div>
          </div>
        </div>

        {/* Средняя колонка: контакты (пример на 2 адреса) */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto">
            <p className='text-gray-400 text-sm mb-2'>Магазин</p>
            <p className="text-lg mb-7.5">
              ул. Аль-Фараби 11Б<br />
              рынок Беркут, Бутик №2
            </p>
            <p className='text-gray-400 text-sm mb-2'>График</p>
            <p className="mb-3 text-md">Пн - Пт: 09:00 - 18:00<br/>Сб: 10:00 - 19:00</p>
            <p className='text-gray-400 text-sm mb-2'>Телефон</p>
            <p className="mb-3 text-md">+7 (777) 777-77-77</p>
            <p className='text-gray-400 text-sm mb-2'>Почта</p>
            <p className="mb-3 text-md">info@mstarter.kz</p>
          <a href="" className="hover:text-orange-500 transition-colors mt-18 text-md text-gray-400">
                 Политика конфиденциальности
            </a>
        </div>
        <div className='flex flex-col sm:flex-row w-full md:w-auto'>
            <p className='text-gray-400 text-sm mb-2'>Автосервис</p>
            <p className="text-lg mb-7.5">
              г. Костанай<br />
              ул. Рабочая 143
            </p>
            <p className='text-gray-400 text-sm mb-2'>График</p>
            <p className="mb-3 text-md">Пн - Пт: 09:00 - 18:00<br/>Сб: 10:00 - 19:00</p>
            <p className='text-gray-400 text-sm mb-2'>Телефон</p>
            <p className="mb-3 text-md">+7 (777) 777-77-77</p>
            <p className='text-gray-400 text-sm mb-2'>Почта</p>
            <p className="mb-3 text-md">info@mstarter.kz</p>
            <a href="" className="hover:text-orange-500 transition-colors mt-18 text-md text-gray-400">
                 Designed by copylobby.art
            </a>
          </div>
      </div>
    </footer>
  );
}