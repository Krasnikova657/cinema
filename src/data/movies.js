const movies = [
  {
    id: 1,
    title: "Втеча з Шоушенка",
    description: "Невинно засуджений чоловік планує втечу з в'язниці.",
    genre: "Драма",
    date: "2025-04-20",
    time: "19:00",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 2,
    title: "Форрест Гамп",
    description: "Історія життя простого чоловіка з великим серцем.",
    genre: "Драма",
    date: "2025-04-21",
    time: "20:00",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    id: 3,
    title: "Темний лицар",
    description: "Бетмен протистоїть Джокеру, який тероризує Готем.",
    genre: "Екшн",
    date: "2025-04-22",
    time: "21:00",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Початок",
    description: "Група професіоналів виконує складну місію у світі снів.",
    genre: "Фантастика",
    date: "2025-04-23",
    time: "22:00",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
    id: 5,
    title: "Матриця",
    description: "Програміст дізнається правду про реальність.",
    genre: "Фантастика",
    date: "2025-04-24",
    time: "18:00",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 6,
    title: "Кримінальне чтиво",
    description: "Переплетення історій злочинців у Лос-Анджелесі.",
    genre: "Кримінал",
    date: "2025-04-25",
    time: "20:30",
    poster: "https://upload.wikimedia.org/wikipedia/uk/8/82/Pulp_Fiction_cover.jpg"
  },
  {
    id: 7,
    title: "Гладіатор",
    description: "Римський генерал стає гладіатором, щоб помститися.",
    genre: "Історичний",
    date: "2025-04-26",
    time: "19:30",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    id: 8,
    title: "Титанік",
    description: "Трагічна історія кохання на борту «Титаніка».",
    genre: "Драма",
    date: "2025-04-27",
    time: "21:00",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 9,
    title: "Зелена миля",
    description: "Охоронець в'язниці знайомиться з незвичайним ув'язненим.",
    genre: "Драма",
    date: "2025-04-28",
    time: "20:00",
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg"
  },
  {
    id: 10,
    title: "Володар перснів: Братство персня",
    description: "Група героїв вирушає знищити могутній перстень.",
    genre: "Фентезі",
    date: "2025-04-29",
    time: "18:30",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  },
  {
    id: 11,
    title: "Зоряні війни: Нова надія",
    description: "Молодий фермер приєднується до повстанців проти Імперії.",
    genre: "Фантастика",
    date: "2025-04-30",
    time: "19:00",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  },
  {
    id: 12,
    title: "Пірати Карибського моря: Прокляття Чорної перлини",
    description: "Капітан Джек Спарроу шукає скарб і стикається з проклятими піратами.",
    genre: "Пригоди",
    date: "2025-05-01",
    time: "20:00",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png"
  },
  {
    id: 13,
    title: "Інтерстеллар",
    description: "Група астронавтів шукає новий дім для людства.",
    genre: "Фантастика",
    date: "2025-05-02",
    time: "21:30",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    id: 14,
    title: "Ла-Ла Ленд",
    description: "Історія музиканта і акторки, що шукають успіх у Лос-Анджелесі.",
    genre: "Мюзикл",
    date: "2025-05-03",
    time: "18:45",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
  },
  {
    id: 15,
    title: "Джокер",
    description: "Поступове перетворення звичайної людини на Джокера.",
    genre: "Психологічна драма",
    date: "2025-05-04",
    time: "22:00",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 16,
    title: "Месники: Завершення",
    description: "Герої намагаються повернути світ після знищення половини всесвіту.",
    genre: "Супергеройський",
    date: "2025-05-05",
    time: "20:15",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  }
];

export default movies;
