import Link from "next/link";
const Service = () => {
    return(
        <section className="bg-[#08457E] py-13">
        <div className="w-3/4 mx-auto flex flex-col gap-6">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-white font-bold">Собственный сервис</h2>
                <p className="text-white">0-1</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-white leading-snug max-w-xl text-lg">Наши специалисты предоставляют полный спектр услуг по ремонту и обслуживанию генераторов и стартеров для всех типов автомобилей.</p>
                    <br></br>
                    <p className="text-white leading-snug max-w-xl text-lg">Мы используем только оригинальные запчасти и современные диагностические оборудования, 
                    чтобы гарантировать высочайшее качество обслуживания. Наш сервис включает в себя диагностику 
                    неисправностей, замену и ремонт деталей, а также профилактическое обслуживание для предотвращения будущих поломок.</p>
                    <Link href="/service">
                    <button className= "justify-start align-bottom mt-7.5 text-white border-2 border-amber-50 w-2/5 h-15"  style={{ border: "1px solid #FFFFFF" }}>
                        Подробнее
                    </button>
                    </Link>
                </div>   
                <img src="/images/servis.png" alt="Изображение сервиса"></img>
            </div>
        </div>
        </section>
    );
};

export default Service;