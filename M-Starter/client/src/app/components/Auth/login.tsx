import React from "react";
import Link from "next/link";

interface LoginCardProps {
  open: boolean;
  onClose: () => void;
}

interface LoginCardProps {
    onClose: () => void;
  }

const LoginCard: React.FC<LoginCardProps> = ({  open, onClose }) => {
  if (!open) return null;

  return (
    <div className="w-4/5 z-10 flex flex-col items-center p-7.5 bg-white h-auto">
      <h3 className="font-semibold mb-3">Авторизация</h3>
      <h4 className="mb-7.5">Пожалуйста, введите данные в поля</h4>
      <form className="flex flex-col gap-7.5 w-full text-lg">
        <input type="text" placeholder="Логин" className="py-4.5 px-7" style={{border:"1px solid  #F3F3F3"}} />
        <input type="password" placeholder="Пароль" className="border py-4.5 px-7" style={{border:"1px solid #F3F3F3"}} />
        <button type="submit" className="bg-[#08457E] h-[60px] text-white p-2 w-full">
          Войти
        </button>
      </form>
      <button className="mt-7.5 bg-[#9F9E9E] h-[60px] text-white p-2 w-full text-lg">Стать партнером</button>
      <div className="text-center">
        <p className="mt-7.5">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-gray-400 underline decoration-dashed">
            Зарегистрироваться
          </Link>
        </p>
        <p className="mt-7.5">
          Забыли пароль?{" "}
          <Link href="/reset" className="text-gray-400 underline decoration-dashed">
            Восстановить
          </Link>
        </p>
      </div>
      <button className="w-full h-[60px] mt-7.5 text-black text-lg cursor-pointer" style={{border:"1px solid #9F9E9E"}} onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default LoginCard;
