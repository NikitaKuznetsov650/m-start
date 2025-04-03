"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LoginCard from "../Auth/login";

interface HeaderProps {
    onLoginOpen: () => void;
  }

export default function Header({onLoginOpen}: HeaderProps) {
  return (
    <header className="w-3/4 mx-auto py-3.5 flex flex-col text-md text-gray-400 items-center font-normal">
      <div className="flex flex-row justify-between w-full py-2.5">
        <nav className="flex flex-row gap-5 justify-center">
          <div className="flex flex-row items-center justify-center">
            <Image src="/icons/room.svg" alt="Location Icon" width={20} height={20} />
            <p className="mx-1">Костанай (пр. Аль-Фараби, 111Б)</p>
          </div>
          <ul className="flex flex-row gap-4 justify-center">
            <li>
              <Link href="/about">О компании</Link>
            </li>
            <li>
              <Link href="/news">Новости</Link>
            </li>
            <li>
              <Link href="/help">Помощь</Link>
            </li>
            <li>
              <Link href="/contact">Контакты</Link>
            </li>
            <li>
              <Link href="/">Консультация</Link>
            </li>
            <li>
              <Link href="/">Стать партнером</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-center">
          <Image src="/icons/WhatsAps.svg" alt="WhatsApp Icon" width={20} height={20} className="mx-1" />
          <p className="text-base">WhatsApp</p>
        </div>
      </div>
      <div className="py-2.5 w-full flex flex-row justify-between items-center">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Logo" width={285} height={77} />
        </Link>
        <div className="flex flex-row w-1/2">
          <div className="bg-[#08457E] w-1/5 h-[70px] flex items-center justify-center">
            <p className="text-white">Каталог</p>
          </div>
          <div className="relative w-4/5 h-[70px]" style={{ border: "1px solid #9F9E9E" }}>
            <input
              className="w-full h-full px-5 py-2.5"
              type="text"
              placeholder="Генераторы..."
            />
            <Search className="absolute right-3 top-1/3 transform translate-y-1/3 text-gray-500" size={20} />
          </div>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={onLoginOpen}
        >
          <Image src="/icons/auth.svg" alt="auth" width={24} height={24} />
          <p>Авторизация</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/icons/cart.svg" alt="cart" width={24} height={24} />
          <p className="mt-1">Корзина</p>
        </div>
      </div>
    </header>
  );
}