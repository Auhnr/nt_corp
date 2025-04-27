document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.querySelectorAll('.language-selector select');

    const translations = {
        en: {
            "hero-title": "Novatech Corporation",
            "hero-subtitle": "Welcome to the official website!",
            "hero-info-left": "Operating since <br><b>2013</b>",
            "hero-info-right": "<strong>+12</strong><br>Years of experience",
            "about-title": "About Us",
            "about-card-1-title": "What do we do?",
            "about-card-1-text": "We help businesses find and acquire the necessary equipment and materials by collaborating with design institutes and trusted suppliers. Our goal is to simplify the supply process and provide clients with reliable technical solutions.",
            "about-card-2-title": "Who are we?",
            "about-card-2-text": "Novatech Corporation is a link between leading equipment manufacturers and companies implementing projects in the oil and gas and mining industries. We provide a full supply cycle — from sourcing to logistics and delivery to the customer.",
            "about-card-3-title": "Why us?",
            "about-card-3-text": "Deep industry knowledge, a wide network of partners, and efficient logistics solutions allow us to guarantee timely deliveries and high-quality products. We value long-term relationships and strive to grow our clients' businesses.",
            "about-card-4-title": "Partners",
            "about-card-4-text": "We work with leading manufacturers and suppliers of equipment, materials, and machinery for industrial projects. Novatech Corporation actively collaborates with design institutes, helping to find innovative technical solutions for various projects. Our company acts as a link between customers and reliable suppliers, ensuring favorable conditions and prompt delivery.",
            "about-card-5-title": "Services",
            "about-card-5-text": "Novatech Corporation specializes in buyer services, procurement, and supply of equipment and materials for the oil and gas and mining industries. We search for the necessary goods, negotiate with suppliers, arrange purchases, and organize delivery within the agreed timeframes. Our clients can be confident in the quality of the supplied products and the transparency of all transaction stages.",
            "partners-title": "Partners and Clients",
            "suppliers-title": "Suppliers and Manufacturers",
            "suppliers-description": "We work with reliable suppliers and manufacturers, offering quality equipment and materials for the oil and gas and mining industries. Our partners are trusted companies successfully implementing projects in various regions of Kazakhstan.",
            "footer-description": "We are a Kazakhstani company connecting suppliers and customers in the oil and gas and mining industries. We ensure reliable supplies of equipment and materials.",
            "footer-working-hours": "Working Hours:",
            "footer-contacts": "Contacts:",
            "footer-address": "Address: RK, 010000, Astana,<br> Yesil district, Dinmukhamed<br> Konayev street, building 2",
            "footer-phone": "Phone: +7 701 588 0638",
            "footer-email": "Email: info@novatechcorp.kz",
            "footer-bottom": "© Novatech CORPORATION 2025. All rights reserved",
            "monday": "Monday",
            "tuesday": "Tuesday",
            "wednesday": "Wednesday",
            "thursday": "Thursday",
            "friday": "Friday",
            "saturday": "Saturday",
            "sunday": "Sunday",
            "day-off": "Day off", // Translation for "выходной"
            "location-title": "Location",
            "location-astana": "Astana, Kazakhstan",
            "location-atyrau": "Atyrau, Kazakhstan",
            "nav-about": "About Us",
            "nav-partners": "Partners",
            "nav-contacts": "Contacts",
        },
        ru: {
            "hero-title": "Novatech Corporation",
            "hero-subtitle": "Приветствуем вас на официальном сайте!",
            "hero-info-left": "Работаем с <br><b>2013</b>",
            "hero-info-right": "<strong>+12</strong><br>Лет опыта",
            "about-title": "О компании",
            "about-card-1-title": "Что мы делаем?",
            "about-card-1-text": "Мы помогаем предприятиям находить и приобретать необходимое оборудование и материалы, сотрудничая с проектными институтами и проверенными поставщиками. Наша цель — упростить процесс снабжения и обеспечить клиентов надежными техническими решениями.",
            "about-card-2-title": "Кто мы?",
            "about-card-2-text": "Novatech Corporation — это связующее звено между ведущими производителями оборудования и компаниями, реализующими проекты в нефтегазовой и горнодобывающей сферах. Мы обеспечиваем полный цикл поставок — от поиска до логистики и передачи заказчику.",
            "about-card-3-title": "Почему мы?",
            "about-card-3-text": "Глубокое понимание отрасли, широкая сеть партнеров и эффективные логистические решения позволяют нам гарантировать своевременные поставки и высокое качество продукции. Мы ценим долгосрочные отношения и стремимся к развитию бизнеса наших клиентов.",
            "about-card-4-title": "Партнёры",
            "about-card-4-text": "Мы работаем с ведущими производителями и поставщиками оборудования, материалов и техники для промышленных проектов. Novatech Corporation активно сотрудничает с проектными институтами, помогая находить инновационные технические решения для реализации различных проектов. Наша компания выступает связующим звеном между заказчиками и надёжными поставщиками, обеспечивая выгодные условия и оперативную поставку.",
            "about-card-5-title": "Услуги",
            "about-card-5-text": "Услуги Novatech Corporation специализируются на байерских услугах, закупке и поставке оборудования и материалов для нефтегазовой и горнодобывающей отраслей. Мы осуществляем поиск необходимых товаров, ведём переговоры с поставщиками, оформляем закупки и организуем доставку в установленные сроки. Наши клиенты могут быть уверены в качестве поставляемой продукции и прозрачности всех этапов сделки.",
            "partners-title": "Партнёры и клиенты",
            "suppliers-title": "Поставщики и производители",
            "suppliers-description": "Мы работаем с надёжными поставщиками и производителями, предлагая качественное оборудование и материалы для нефтегазовой и горнодобывающей отраслей. Наши партнёры — проверенные компании, успешно реализующие проекты в различных регионах Казахстана.",
            "footer-description": "Мы — казахстанская компания, соединяющая поставщиков и заказчиков в нефтегазовой и горнодобывающей отраслях. Обеспечиваем надежные поставки оборудования и материалов.",
            "footer-working-hours": "Часы работы:",
            "footer-contacts": "Контакты:",
            "footer-address": "Адрес: РК, 010000, г. Астана,<br> район Есиль, ул Дінмұхамед <br>Қонаев, здание 2",
            "footer-phone": "Телефон: +7 701 588 0638",
            "footer-email": "Email: info@novatechcorp.kz",
            "footer-bottom": "© Novatech CORPORATION 2025. Все права защищены",
            "monday": "понедельник",
            "tuesday": "вторник",
            "wednesday": "среда",
            "thursday": "четверг",
            "friday": "пятница",
            "saturday": "суббота",
            "sunday": "воскресенье",
            "day-off": "выходной", // Russian version remains unchanged
            "location-title": "Локация",
            "location-astana": "Астана, Казахстан",
            "location-atyrau": "Атырау, Қазақстан",
            "nav-about": "О компании",
            "nav-partners": "Партнеры",
            "nav-contacts": "Контакты",
        },
        kk: {
            "nav-about": "Компания туралы",
            "nav-partners": "Серіктестер",
            "nav-contacts": "Байланыс",
            "hero-title": "Novatech Corporation",
            "hero-subtitle": "Ресми сайтқа қош келдіңіздер!",
            "hero-info-left": "Біз жұмыс істейміз <br><b>2013</b> жылдан бастап",
            "hero-info-right": "<strong>+12</strong><br>Жылдық тәжірибе",
            "about-title": "Компания туралы",
            "about-card-1-title": "Біз не істейміз?",
            "about-card-1-text": "Біз жобалық институттармен және сенімді жеткізушілермен ынтымақтаса отырып, кәсіпорындарға қажетті жабдықтар мен материалдарды іріктеуге және сатып алуға жәрдемдесеміз. Біздің мақсатымыз — жеткізу процесін жеңілдету және тұтынушыларды сенімді техникалық шешімдермен қамтамасыз ету.",
            "about-card-2-title": "Біз кімбіз?",
            "about-card-2-text": "Novatech Corporation — бұл жетекші жабдық өндірушілер мен мұнай-газ және тау-кен саласындағы жобаларды жүзеге асыратын компаниялар арасындағы байланыс. Біз жабдықтау тізбегінің толық циклын қамтамасыз етеміз — іздеуден бастап, логистика және тұтынушыға жеткізуге дейін.",
            "about-card-3-title": "Неге біз?",
            "about-card-3-text": "Саланы терең түсіну, серіктестердің кең желісі және тиімді логистикалық шешімдер бізге уақтылы жеткізілім мен жоғары сапалы өніммен қамтамасыз етуге мүмкіндік береді. Біз ұзақ мерзімді қарым-қатынастарды бағалаймыз және клиенттеріміздің бизнесін дамытуға ұмтыламыз.",
            "about-card-4-title": "Серіктестер",
            "about-card-4-text": "Біз өнеркәсіптік жобаларға арналған жабдықтар мен материалдарды жетекші өндірушілермен және жеткізушілермен бірге ұсынамыз. Сонымен қатар, Novatech Corporation жобалық институттармен белсенді жұмыс істейді және оларға әртүрлі жобаларды жүзеге асыру үшін инновациялық техникалық шешімдерді табуға көмектеседі. Біздің компания тиімді шарттармен және жедел жеткізумен қамтамасыз етіп, тапсырыс берушілер мен сенімді жеткізушілер арасындағы байланысты жүзеге асырады.",
            "about-card-5-title": "Қызметтер",
            "about-card-5-text": "Novatech Corporation брокерлік қызметтерге, сондай-ақ мұнай-газ және тау-кен салаларына арналған жабдықтар мен материалдарды сатып алуға және жеткізуге маманданған. Біз қажетті тауарларды іздейміз, жеткізушілермен келіссөздер жүргіземіз, сатып алуды рәсімдейміз және жеткізуді белгіленген мерзімде ұйымдастырамыз. Біздің клиенттер жеткізілетін өнімнің сапасына және мәміленің барлық кезеңдерінің ашықтығына сенімді бола алады.",
            "partners-title": "Серіктестер мен клиенттер",
            "suppliers-title": "Жеткізушілер мен өндірушілер",
            "suppliers-description": "Біз мұнай-газ және тау-кен салалары үшін сапалы жабдықтар мен материалдарды жеткізе отырып, сенімді жеткізушілермен және өндірушілермен жұмыс істейміз. Біздің серіктестеріміз — Қазақстанның түрлі өңірлерінде жобаларды табысты іске асыратын тексерілген компаниялар.",
            "footer-description": "Біз — мұнай-газ және тау-кен өндіру салаларында жеткізушілер мен тапсырыс берушілерді байланыстыратын қазақстандық компаниямыз. Біз жабдықтар мен материалдарды сенімді түрде жеткізуді қамтамасыз етеміз.",
            "footer-working-hours": "Жұмыс уақыты:",
            "footer-contacts": "Байланыс:",
            "footer-address": "Мекенжай: Қазақстан Республикасы, 010000, Астана қаласы, Есіл ауданы, Дінмұхамед Қонаев көшесі, 2-ғимарат",
            "footer-phone": "Телефон: +7 701 588 0638",
            "footer-email": "Электрондық пошта: info@novatechcorp.kz",
            "footer-bottom": "© Novatech CORPORATION 2025. Барлық құқықтар қорғалған",
            "monday": "Дүйсенбі",
            "tuesday": "Сейсенбі",
            "wednesday": "Сәрсенбі",
            "thursday": "Бейсенбі",
            "friday": "Жұма",
            "saturday": "Сенбі",
            "sunday": "Жексенбі",
            "day-off": "Демалыс",
            "location-title": "Орналасқан жері",
            "location-astana": "Астана, Қазақстан",
            "location-atyrau": "Атырау, Қазақстан"
        }
    };

    languageSelector.forEach(selector => {
        selector.addEventListener('change', function () {
            const selectedLanguage = this.value;
            switchLanguage(selectedLanguage);
        });
    });

    function switchLanguage(language) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
    }
});
