import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Home / Tech' },
];


export const PRODUCTS: Product[] = [
  // Smartphones (1)
  {
    id: 1,
    categoryId: 1,
    likes: 0,
    name: 'Смартфон Apple iPhone 16 256Gb черный',
    description:
      'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
    price: 499990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/he1/87295472828446.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h80/hcb/87295472861214.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/',
  },
  {
    id: 6,
    categoryId: 1,
    likes: 0,
    name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ фиолетовый + подарок ',
    description:
      'Характеристики Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ фиолетовый + подарок. Общие: Код товара:116004830, 4G (LTE): Да, Стандарт: GSM 850/900/1800/1900, 3G, 4G LTE, 5G, Операционная: системаAndroid 14, SIM-картаnano: SIM+eSIM, Материалтитан и стекло, Поддержка 5GДа, Технология NFCДа, Цветфиолетовый.',
    price: 894425,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h66/84958590435358.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h16/h66/84958590435358.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h8f/84958590468126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/he4/84958590500894.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-fioletovyi-podarok-116004830/',
  },

  // Headphones (3)
  {
    id: 2,
    categoryId: 3,
    likes: 0,
    name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    description:
      'Как и предыдущая версия, наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг. Улучшилась и функция Spatial Audio для пространственного звучания с отслеживанием положения головы слушателя. Встроенные аккумуляторы наушников теперь обеспечивают до 6 часов воспроизведения музыки и до 30 часов с подзарядкой в кейсе со включенным активным шумоподавлением. В режиме разговора время работы немного меньше: до 4,5 часов и до 24 часов с подзарядкой в кейсе. Быстрая зарядка позволяет подзарядить наушники на час работы всего за пять минут.',
    price: 106872,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
  },

  // Laptops (2)
  {
    id: 5,
    categoryId: 2,
    likes: 0,
    name: 'Ноутбук Apple MacBook Air 15 2023 15.3" / 8 Гб / SSD 256 Гб / macOS / MQKP3RU/A',
    description:
      'О таком ноутбуке долгое время мечтали многие поклонники тонкого и лёгкого MacBook Air. Версия с 15-дюймовым дисплеем – это отличный вариант для всех, кому в первую очередь нужен большой и качественный экран, в сочетании с минимальным весом и размерами лэптопа. К тому же, производительности базового процессора M2 более чем достаточно для большинства задач. Визуально 15-дюймовая модель, представленная летом 2023 года, мало чем отличается от уже привычного 13-дюймового MacBook Air с процессором M2, а помимо увеличенного экрана, "большой" Air получил более мощные динамики, при этом его толщина увеличилась лишь на два миллиметра, а вес ноутбука составляет всего 1510 граммов.',
    price: 746997,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h65/81547557503006.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd4/h65/81547557503006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/h79/81547557568542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/haf/81547557634078.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkp3ru-a-111217765/',
  },

  // Home / Tech (4)
  {
    id: 4,
    categoryId: 4,
    likes: 0,
    name: 'Аэрогриль Xiaomi Smart Air Fryer BHR7357EU 6.5 л черный',
    description:
      'Аэрогриль Xiaomi Smart Air Fryer 6.5L EU, MAF10. Конвекционный нагрев на 360° - модернизированный круглый воздуховод улучшает циркуляцию и распределение воздушного потока, направляя горячий воздух непосредственно в корзину для жарки, нагреваясь равномерно без необходимости переворачивания. Двухслойное антипригарное покрытие на водной основе, легкая очистка после еды. Антипригарное покрытие пищевого качества устойчиво к износу и легко очищается за одно полоскание, что экономит ваше время и облегчает ваши проблемы с безопасностью.',
    price: 57200,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p28/p7d/74344115.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p28/p7d/74344115.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0f/p98/74344642.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p66/36326744.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-smart-air-fryer-bhr7357eu-6-5-l-chernyi-118273472/',
  },
  {
    id: 7,
    categoryId: 4,
    likes: 0,
    name: 'Dyson Supersonic HD03 компактный фен серый',
    description:
      'Быстрое высушивание волос. Без экстремальных температур. Для разных типов волос. 4 насадки. 3 точных настройки скорости.',
    price: 350000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h52/64628753760286.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h25/h52/64628753760286.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/hcd/64628755857438.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p77/pfb/3241914.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd03-kompaktnyi-fen-1600-vt-102778112/',
  },
  {
    id: 9,
    categoryId: 4,
    likes: 0,
    name: 'Робот-пылесос Xiaomi E12 белый',
    description:
      'Xiaomi Robot Vacuum E12 — бюджетный робот-пылесос для сухой и влажной уборки, оснащенный гироскопической навигацией.',
    price: 79990,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hd4/83653397872670.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/hd4/83653397872670.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h6b/83653399281694.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h31/h43/83653400887326.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-e12-belyi-113222001/',
  },
  {
    id: 10,
    categoryId: 4,
    likes: 0,
    name: 'Портативная колонка JBL Charge 5 черный',
    description:
      'Портативная колонка с мощным звуком и хорошей батареей. Подходит для улицы и дома.',
    price: 70846,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/heb/64335998812190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h25/hf7/64336001957918.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h83/hd5/64336004808734.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-chernyi-101605350/',
  },

    {
    id: 11,
    categoryId: 1,
    likes: 0,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ зеленый',
    description: 'Яркий AMOLED экран 120 Гц, хорошая камера и стабильная работа на каждый день.',
    price: 199990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h08/86008529190942.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/h08/86008529190942.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h41/haa/86008529223710.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h96/hde/86008529289246.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-zelenyi-110044402/',
  },
  {
    id: 12,
    categoryId: 1,
    likes: 0,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: 'Новый дизайн, мощный чип, отличные фото и плавная работа iOS.',
    price: 399990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
  },
  {
    id: 13,
    categoryId: 1,
    likes: 0,
    name: 'Смартфон Xiaomi Redmi Note 13 4G 8 ГБ/128 ГБ черный',
    description: 'AMOLED 120 Гц, хорошая автономность и удобный смартфон по цене/качеству.',
    price: 89990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/ha8/85226921558046.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he3/ha8/85226921558046.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he2/h10/85226921590814.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbb/hd8/85226921623582.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-8-gb-128-gb-chernyi-116797495/',
  },

  // Laptops (categoryId: 2) -> add 4 (total 5)
  {
    id: 14,
    categoryId: 2,
    likes: 0,
    name: 'Ноутбук HP 250 G8 15.6" / 8 Гб / SSD 256 Гб / DOS / 3V5F7EA',
    description: 'Рабочий ноутбук для учебы и офисных задач: 15.6", SSD, 8 ГБ RAM.',
    price: 189990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h4d/63992135090206.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h4d/63992135090206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h08/63992137875486.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h54/haa/63992141807646.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/hp-250-g8-15-6-8-gb-ssd-256-gb-dos-3v5f7ea-102751299/',
  },
  {
    id: 15,
    categoryId: 2,
    likes: 0,
    name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / Без ОС / 15ITL6 / 82H8005GRK',
    description: 'Легкий и удобный ноутбук для учебы: 15.6", SSD 256 ГБ, 8 ГБ RAM.',
    price: 199990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h3a/66993673732126.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha7/h3a/66993673732126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h70/ha3/66993674256414.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/h03/66993674780702.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-bez-os-15itl6-82h8005grk-108090705/',
  },
  {
    id: 16,
    categoryId: 2,
    likes: 0,
    name: 'Ноутбук ASUS Vivobook 15 15.6" / 8 Гб / SSD 512 Гб / Win 11 / X1504VA-BQ2288W',
    description: 'Хороший выбор для учебы/работы: 15.6", SSD 512 ГБ, Windows 11.',
    price: 279990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p52/27692191.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pae/p52/27692191.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p92/p52/27692192.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p76/p52/27692193.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-8-gb-ssd-512-gb-win-11-x1504va-bq2288w-90nb10j2-m02v80-135583832/',
  },
  {
    id: 17,
    categoryId: 2,
    likes: 0,
    name: 'Ноутбук Acer Aspire 5 15.6" / 8 Гб / SSD 512 Гб / Win 11 / A515-56 / NX.A1GER.00A',
    description: 'Универсальный ноутбук на каждый день: 15.6", SSD 512, 8 ГБ RAM, Win 11.',
    price: 289990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h9f/64425820127262.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h57/h9f/64425820127262.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/hbe/64425822945310.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h2f/64425825173534.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/acer-aspire-5-15-6-8-gb-ssd-512-gb-win-11-a515-56-nx-a1ger-00a-106055491/',
  },

  {
    id: 18,
    categoryId: 3,
    likes: 0,
    name: 'Наушники Sony WF-1000XM4 серый',
    description: 'Премиальные TWS наушники с активным шумоподавлением и отличным звуком.',
    price: 119990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h30/64170565926942.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h28/h30/64170565926942.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h6b/64170568515614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/h37/64170571137054.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wf-1000xm4-seryi-101869247/',
  },

  {
    id: 19,
    categoryId: 3,
    likes: 0,
    name: 'Наушники JBL Tune 510BT черный',
    description: 'Удобные Bluetooth-наушники: легкие, складные, хороший бас и автономность.',
    price: 13990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/',
  },
  {
    id: 20,
    categoryId: 3,
    likes: 0,
    name: 'Наушники Samsung Galaxy Buds 2 белый',
    description: 'Компактные TWS наушники с хорошим шумоподавлением и комфортной посадкой.',
    price: 49990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hbb/64357880791070.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h5d/hbb/64357880791070.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2e/h93/64357883346974.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h1a/64357885575198.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-2-belyi-102046374/',
  },
  {
    id: 21,
    categoryId: 3,
    likes: 0,
    name: 'Наушники Apple AirPods 3 белый',
    description: 'Легкие наушники Apple с пространственным аудио и удобным кейсом.',
    price: 89990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd2/hc8/64341971140638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h67/hb0/64341974220830.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-belyi-102667744/',
  },

  {
    id: 22,
    categoryId: 4,
    likes: 0,
    name: 'Игровая приставка Sony PlayStation 5 Slim',
    description: 'Компактная версия PS5: быстрый SSD, отличная графика и игры нового поколения.',
    price: 299990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
  },
];