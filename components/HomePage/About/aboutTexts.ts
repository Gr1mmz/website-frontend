import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaFigma} from "react-icons/fa";
import {SiRedux, SiWebpack, SiNextdotjs, SiSass, SiTypescript, SiAdobephotoshop, SiWebstorm} from "react-icons/si";

export const aboutTexts = {
  about: "Привет. Меня зовут Михаил. Мне 26 лет. Я из города Иркутск. Того самого, что рядом с Байкалом." +
    " Веб-разработкой я увлекаюсь уже более двух лет. Изначально мне была просто интересна тема создания сайтов и" +
    " то, как они устроены изнутри. Позже это увлечение переросло в желание создавать какие-то продукты, будь то какое-то веб-приложение или просто красивая кнопка на сайте. Ниже вы сможете ознакомиться с моими работами и выбрать удобный способ связи со мной.",
  accordions: [
    {
      id: 1,
      header: "Образование",
      content: [
        {
          btnTitle: "Высшее образование",
          title: "Корпоративные информационные системы и технологии",
          helpText: "Магистратура. Иркутский национальный исследовательский технический университет",
          year: "2017 - 2019",
        },
        {
          btnTitle: "HTML Academy",
          title: "Онлайн-тренажер по верстке",
          helpText: "Онлайн курсы",
          year: "2020",
        },
        {
          btnTitle: "Udemy",
          title: "JavaScript разработчик",
          helpText: "Онлайн курс",
          year: "2021",
        },
        {
          btnTitle: "IT-KAMASUTRA",
          title: "Путь самурая",
          helpText: "Онлайн курс",
          year: "2021",
        },
      ]
    },
    {
      id: 2,
      header: "Опыт работы",
      content: [
        {
          btnTitle: "Специалист по ИБ",
          title: "Специалист по информационной безопасности",
          helpText: "Иркутский национальный исследовательский технический университет",
          year: "2018 - 2019",
        },
        {
          btnTitle: "Руководитель IT-отдела",
          title: "Руководитель IT-отдела",
          helpText: "Министерство образования Иркутской области",
          year: "2019-2020",
        },
        {
          btnTitle: "Координатор проектов",
          title: "Координатор проектов",
          helpText: "АНО Диалог-регионы",
          year: "2020-н.в.",
        },
        {
          btnTitle: "Стартап",
          title: "Frontend-разработчик",
          helpText: "Участие в стартапе по разработке образовательной платформы",
          year: "2022-н.в",
        },
      ]
    }
  ],
  tags: [
    {icon: FaHtml5, color: "#E64C18", label: "HTML"},
    {icon: FaCss3Alt, color: "#2196F3", label: "CSS"},
    {icon: SiSass, color: "#cd6699", label: "SASS/SCSS"},
    {icon: FaJsSquare, color: "#FFDF00", label: "JavaScript"},
    {icon: FaReact, color: "#5ADAFD", label: "React"},
    {icon: SiRedux, color: "#764abc", label: "Redux"},
    {icon: SiWebpack, color: "#764abc", label: "Webpack"},
    {icon: SiNextdotjs, color: "#000", label: "Next.JS"},
    {icon: SiTypescript, color: "#2f72bc", label: "TypeScript"},
    {icon: FaGit, color: "#e44c30", label: "Git"},
    {icon: FaFigma, color: "#000", label: "Figma"},
    {icon: SiAdobephotoshop, color: "#001d33", label: "Photoshop"},
    {icon: SiWebstorm, color: "#0babcc", label: "WebStorm"},
  ]
}