"use client"
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Service from "../components/Service";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import LoginCard from "../components/Auth/login";



import { ReactNode } from "react";

function Disclosure({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-[#282828] pb-10 border-b">
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="w-1/2 font-semibold">{title}</h3>
        {open && (
        <div className="w-1/2 flex flex-col gap-5 mt-4">
          {children}
        </div>
      )}
        <div className="ml-auto">
          {open ? (
            <ChevronUp className="w-[28px] h-[28px]" />
          ) : (
            <ChevronDown className="w-[28px] h-[28px]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function HelpPage() {
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
      <Header onLoginOpen={() => setLoginOpen(true)} ></Header>
      <div className="w-3/4 mx-auto">
        <span className="fixed top-1/8 right-1/22 w-2/5 inset-0 z-20 ml-auto h-[582px]"><LoginCard open={loginOpen} onClose={() => setLoginOpen(false)} ></LoginCard></span>
      </div>
      <div className={loginOpen ? " bg-gray-300  filter brightness-40 h-screen overflow-hidden" : " "}>
      <section className="w-3/4 mx-auto flex flex-col leading-7">
        <p className="text-gray-400 my-7.5">Главная / Помощь</p>
        <h2 className="font-semibold mb-7.5">Помощь</h2>
        <div className="px-7.5">
          <Disclosure title="Доставка">
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold">Курьерская доставка</h4>
              <ul className="list-disc ml-7.5">
                <li>
                  <h4>
                    Ваши посылки отправляются напрямую компаниями Авис Логистик
                    или Exline. Курьер доставляет посылку лично в руки Вам.
                  </h4>
                </li>
                <li>
                  <h4>
                    Стоимость доставки в областные центры: Авис Логистик – 2000
                    тенге за посылку до 5 кг. Exline – 2200 тенге за посылку до 6
                    кг.
                  </h4>
                </li>
                <li>
                  <h4>
                    Сроки доставки 2-5 дней. Если вы выбираете экспресс
                    доставку, её стоимость уточняйте у нашего менеджера.
                  </h4>
                </li>
              </ul>
              <h4 className="font-semibold">Доставка АО «Казпочта»</h4>
              <h4>
                Доставка осуществляется в любой населённый пункт Казахстана.
                <br />
                Тарифы на доставку:
              </h4>
              <ul className="list-disc ml-7.5">
                <li>
                  <h4>До 0,5 кг – 1000 тенге</h4>
                </li>
                <li>
                  <h4>От 0,5 – 1 кг – 1400 тенге</h4>
                </li>
                <li>
                  <h4>От 1 кг до 3 кг – 1700 тенге</h4>
                </li>
              </ul>
              <h4>
                Сроки доставки 5-8 дней, в зависимости от удалённости населённого
                пункта получателя.
              </h4>
              <h4>
                По желанию клиента, мы можем отправить вам посылку с наложенным
                почтовым платежом. Комиссия почты составляет от 2% (минимум 320
                тенге) от оценочной стоимости посылки.
              </h4>
              <h4 className="font-semibold">Самовывоз</h4>
              <h4>
                Мы находимся в г. Костанай, ул. Аль-Фараби 111Б <br />
                рынок Беркут, Бутик №2
              </h4>
            </div>
          </Disclosure>
          <Disclosure title="Оптовикам">
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold">
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT
                TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST
                TEXT TEST TEXT TEST TEXT
              </h4>
            </div>
          </Disclosure>
          <Disclosure title="Обработка персональных данных">
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold">1. Общие положения</h4>
              <h4>
                Настоящая Политика составлена в соответствии с Законом РК «О
                персональных данных» и определяет порядок обработки и защиты
                персональных данных пользователей сайта mstarter.kz (далее – Оператор).
                Политика применяется ко всей информации, полученной Оператором от
                пользователей сайта.
              </h4>
              <h4 className="font-semibold">2. Основные понятия</h4>
              <h4>
                Персональные данные – любая информация, относящаяся к пользователю
                сайта. <br />
                Оператор – лицо, осуществляющее обработку персональных данных.
                <br />
                Обработка персональных данных – любые операции с данными, включая сбор,
                хранение, использование, передачу и удаление. <br />
                Обезличивание данных – действия, делающие невозможным идентификацию
                пользователя. <br />
                Трансграничная передача – передача данных за границу.
              </h4>
              <h4 className="font-semibold">3. Какие данные обрабатываются</h4>
              <h4>Оператор может обрабатывать следующие данные:</h4>
              <ul className="list-disc ml-7.5">
                <li>
                  <h4>ФИО, e-mail, телефон, адрес;</h4>
                </li>
                <li>
                  <h4>Обезличенные данные (cookie, данные аналитики).</h4>
                </li>
              </ul>
              <h4 className="font-semibold">4. Цели обработки</h4>
              <h4>Персональные данные используются для:</h4>
              <ul className="list-disc ml-7.5">
                <li>
                  <h4>Обработки заказов и обратной связи;</h4>
                </li>
                <li>
                  <h4>
                    Информирования о продуктах, акциях (пользователь может отказаться);
                  </h4>
                </li>
                <li>
                  <h4>Анализа работы сайта и его улучшения.</h4>
                </li>
              </ul>
              <h4 className="font-semibold">5. Основания обработки</h4>
              <h4>
                Оператор обрабатывает данные на основании добровольного предоставления
                пользователем. Анонимные данные (cookie) обрабатываются, если это
                разрешено настройками браузера.
              </h4>
              <h4 className="font-semibold">6. Передача и защита данных</h4>
              <h4>
                Оператор принимает меры для защиты данных. Передача третьим лицам
                возможна только в случаях, предусмотренных законом. Данные хранятся
                бессрочно, пользователь может отозвать согласие, отправив запрос на
                info@mstarter.kz.
              </h4>
              <h4 className="font-semibold">7. Трансграничная передача</h4>
              <h4>
                Передача данных за границу допускается при обеспечении надежной защиты
                или наличии письменного согласия пользователя.
              </h4>
              <h4 className="font-semibold">8. Заключительные положения</h4>
              <h4>
                Актуальная версия Политики доступна на сайте. Оператор может вносить
                изменения без уведомления пользователей.
              </h4>
              <h4 className="font-semibold">9. Контакты Оператора</h4>
              <h4>
                ИП MEGAOM
                <br />
                Адрес: Казахстан, г. Костанай, ул. Аль-Фараби 111Б, рынок Беркут, Бутик №2
                <br />
                ИИН/БИН: 900926350732
                <br />
                E-mail: info@mstarter.kz
              </h4>
            </div>
          </Disclosure>
        </div>
      </section>
      <Service />
      <Footer />
      </div>
    </div>
  );
}
