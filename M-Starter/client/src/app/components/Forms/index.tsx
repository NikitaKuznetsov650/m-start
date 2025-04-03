// components/HelpForm.jsx
import React from 'react';

export default function HelpForm() {
  return (
    <div className="bg-[#08457E] py-12 px-4 mb-23">
      <div className="w-3/4 mx-auto flex flex-row">
        <div className="mb-8 w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-7.5">
            Нужна помощь?
          </h2>
          <p className="text-white text-lg mb-7.5">
            Подберем запчасти по VIN-коду!
          </p>

          <form className="flex flex-col space-y-4 gap-6 w-full text-lg">
            <input
              type="text"
              placeholder="Укажите имя"
              className="px-4 py-2 rounded focus:outline-none bg-gray-50 h-15"
            />
            <input
              type="text"
              placeholder="Телефон"
              className="px-4 py-2 rounded focus:outline-non bg-gray-50 h-15"
            />
            <input
              type="text"
              placeholder="VIN-номер автомобиля"
              className="px-4 py-2 rounded focus:outline-none bg-gray-50 h-15"
            />
            <textarea
              rows={4}
              placeholder="Сообщение"
              className="px-4 py-2 rounded focus:outline-none bg-gray-50 h-15"
            />
            <button
              type="submit"
              style={{ border: "1px solid #FFFFFF" }}
              className="w-1/3 h-[60px] bg-transparent border-white border-2 text-white font-semibold py-2 px-4 rounded transition-colors items-start"
            >
              Перезвонить
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-7.5 max-w-md whitespace-nowrap">
            Отправляя форму Вы соглашаетесь на обработку персональных данных.
          </p>
        </div>
        <div className="w-1/2 flex justify-center z-10 absolute right-0 -mr-30 mt-10">
          <img
            src="/images/car.png"
            alt="car"
          />
        </div>
      </div>
    </div>
  );
}
