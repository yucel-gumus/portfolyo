import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import ReactIcon from "../public/assets/icons/yapayzeka.svg";
import ReactNativeIcon from "./../public/assets/icons/reactnative.svg";
import NodeJsIcon from "./../public/assets/icons/nodejs.svg";
import JavaScriptIcon from "./../public/assets/icons/javascript.svg";
import NetCoreIcon from "./../public/assets/icons/nextjs.svg";
import PythonIcon from "./../public/assets/icons/django.svg";

const navLinks = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "work",
    title: "Deneyimlerim",
  },
  {
    id: "skills",
    title: "Yeteneklerim",
  },
  {
    id: "certificate",
    title: "Sertifikalarım",
  },
  {
    id: "projects",
    title: "Kişisel Projelerim",
  },
];

const services = [
  {
    title: "React Developer",
    icon: <ReactIcon />,
  },
  {
    title: "AI Developer",
    icon: <ReactNativeIcon />,
  },
  {
    title: "NodeJs Developer",
    icon: <NodeJsIcon />,
  },
  {
    title: "Javascript Developer",
    icon: <JavaScriptIcon />,
  },
  {
    title: "ASP.NET Core Developer",
    icon: <NetCoreIcon />,
  },
  {
    title: "Python Developer",
    icon: <PythonIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
    },
    {
      name: "C#",
      icon: "/assets/tech/web3.png",
    },
  ],
  frameworks: [
    {
      name: "Django",
      icon: "/assets/tech/dj.png",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.png",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
    },
    {
      name: "ASP.NET Core",
      icon: "/assets/tech/mvc.png",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
    },
    {
      name: "React Native",
      icon: "/assets/tech/native.png",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
    },
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensor.png",
    },
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch.png",
    },
    {
      name: "Keras",
      icon: "/assets/tech/keras.png",
    },
    {
      name: "REST API",
      icon: "/assets/tech/rest.jpeg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
    },
    {
      name: "Jira",
      icon: "/assets/tech/jira.png",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgre.png",
    },
    {
      name: "Microsoft SQL",
      icon: "/assets/tech/mssql.jpeg",
    },
  ],
};

const experiences = [
  {
    title: "Yazılım Geliştirme Uzman Yardımcısı",
    company_name: "Turkuvaz Medya Grubu",
    company_website: "https://www.turkuvazmedyagrubu.com.tr/",
    icon: "/assets/company/tmg.jpeg",
    iconBg: "#E6DEDD",
    date: "Ağustos 2023 - Devam Ediyor",
    points: [
      "Şirket bünyesinde bulunan markaların (ATV, Aspor, Ahaber, Takvim, Fotomaç, Sabah vs.) web sitelerini geliştirme ve optimize etme",
      "Turkuvaz Akademi uygulamasının tasarlanması ve geliştirilmesi (CRUD işlemleri,döküman ve video yükleme, sınav oluşturma ve sınava girme işlemlerinde etkin rol aldım)",
      "Turkuvapp mobil ve web uygulamasının geliştirilmesi ve kullanıcı bazlı dönüşlerde iyileştirilme",
    ],
  },
  {
    title: "Yazılım Geliştirme Mühendisi",
    company_name: "Interdata (Pavo Group)",
    company_website: "https://www.interdata.com.tr/",
    icon: "/assets/company/ınterdata.png",
    iconBg: "#E6DEDD",
    date: "Ağustos 2022 - Nisan 2023",
    points: [
      "Araç Takip Sistemi projesinde gerçek zamanlı konum takibi, sensör veri işleme ve raporlama,CRUD işlemleri aşamalarında etkin rol aldım.",
      "Şirket bünyesinde bulunan tüm firmalarda kullanılmak üzere proje test ve takip web uygulamasının CRUD işlemleri,raporlama ve izleme aşamalarını gerçekleştirdim",
      "Kapsamlı bir test otomasyon projesi geliştirerek, hata tespit süresini %40 azalttım ve yazılım kalitesini artırdım",
    ],
  },
  {
    title: "Mühendis Subay",
    company_name: "Harita Genel Müdürlüğü",
    company_website: "https://www.harita.gov.tr/",
    icon: "/assets/company/hgm.png",
    iconBg: "#E6DEDD",
    date: "Eylül 2021 - Temmuz 2022",
    points: [
      "Tematik haritalar ve yüzey analizleri oluşturma. (ArcGIS, QGIS)",
      "Uydu ve İHA görüntüleri işleme, harita katmanları oluşturma.",
      "İHA ve Uydu görüntülerini kullanarak Web ve mobil için  Cesşum  ile 3D Harita Uygulaması geliştirme",
    ],
  },
];

const certificates = [
  {
    description:
      "Python ,Docker,FastApi  uyguladığım bir eğitim projesi tamamladım",
    name: "Full Python Project",
    company: "Superpeer",
    image: "/assets/certificates/pythın.png",
    url: "https://superpeer.com/certificate/cobanov/j8u1qLJDpmW5UjR5P2eF",
  },
  {
    description:
      "Python , Tensorflow eğitimleri aldım ve bu bilgileri Veri Bilimi projesi için kullandım  ",
    name: "Veri Bilimi için Python ve Tensorflow",
    company: "BTK",
    image: "/assets/certificates/btk.png",
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=lK1h7MYDBl",
  },
  {
    description:
      "Python , Cifar10 veri seti kullanarak görüntü analizi yapan yapay zeka modeli eğitimi aldım ",
    name: "Yapay Zekaya Giriş",
    company: "Global AI Hub Aygaz",
    image: "/assets/certificates/ai.png",
    url: "https://courses.10million.ai/saas-certificate/12CEAAEBB-12CEAAF18-2F44F70/",
  },
  {
    description:
      "Python , Google Colab ile dataset üzerinden veri analizi yaparak eğitimi tamamladım ",
    name: "veri Analizi",
    company: "Global AI Hub Akabnk",
    image: "/assets/certificates/data.png",
    url: "https://courses.10million.ai/saas-certificate/12CE9C719-12CE9C776-2F44F70/",
  },
];

const projects = [
  {
    name: "ChatBot Pro",
    description:
      "Google Gemini Pro modeli entegre edilmiş gradio arayüzü ile sohbet edebileceğiniz sorular sorabileceğiniz chatbot uygulamamı hugging face space üzerinden yayınlayarak kullanıcılarla paylaşılması sağlanmıştır.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/cahtbot.png",
    deployed_link: "https://huggingface.co/spaces/yucelgumus61/ChatBotPro",
    source_code_link: "https://github.com/yucel-gumus/ChatBotPro",
  },

  {
    name: "MultiSelect Component",
    description:
      "Rick and Morty API'sini kullanarak veri çektiğim ve bu veriyi bir multiselect (çoklu seçim) bileşeninde listelediğim bir React projesi geliştirdim. Bu bileşen, kullanıcıların listedeki öğeleri seçmesine ve seçimlerini geri almasına olanak tanıyor. Tüm bu işlevsellikler, herhangi bir harici kütüphane kullanılmadan tamamen kendi implementasyonumla gerçekleştirildi.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/rickandmorty.png",
    source_code_link: "https://github.com/yucel-gumus/RickAndMorty_MultiSelect",
    deployed_link: "https://yucel-gumus.github.io/RickAndMorty_MultiSelect/",
  },
  {
    name: "Cesium ile Drone Simülasyonu",
    description:
      "Cesium kütüphanesi kullanarak 3D harita üzerinde 3D drone modelini oluşturma ve bu drone için ilk önce belirli bir irtifaya çıkarma daha sonra rota oluşturma ve bu rota sonucunda başlangıç irtifasına geri gelerek indirme işlemleri ile yere inişinin sağlanması üzerine simülasyon oluşturuldu",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "cesium",
        color: "green-text-gradient",
      },
      {
        name: "glb model",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/cesiumdrone.png",
    source_code_link: "https://github.com/yucel-gumus/cesium-drone.github.io",
    deployed_link: "https://yucel-gumus.github.io/cesium-drone.github.io/",
  },
  {
    name: "Gemini Chat ve Resim Analizi",
    description:
      "Gemini apisi kullanarak sohbet edebileceğiniz veya resim yükleyerek resim üzerinden analizler ,sohbetler edebileceğiniz bir yapay zeka entegrasyonu projesidir.Projenim Node.js tarafı vercel üzerinden yayımlanmıştır. React tarafı ise netlify üzerinden yayımlanmıştır.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
      { name: "Netlify", color: "blue-text-gradiet" },
    ],
    image: "/assets/projects/gemini.png",
    source_code_link: "https://github.com/yucel-gumus/gemini-chat-react",
    deployed_link: "https://gemini-chat-image.netlify.app/",
  },
  {
    name: "Gemini-1.5 Flash ile Resim Analizi",
    description:
      "Gemini-1.5 Flash  kullanarak resim yükleyerek resim üzerinden analizler ,sohbetler edebileceğiniz bir yapay zeka entegrasyonu projesidir.Projenin backend tarafı flask ile yazılmış frontend tarafında javascript kullanılmıştır ve proje pythonanywhere üzerinden canlıya alınmıştır",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "pythonanywhere",
        color: "pink-text-gradient",
      },
      { name: "python", color: "blue-text-gradiet" },
    ],
    image: "/assets/projects/Flask.png",
    source_code_link: "https://github.com/yucel-gumus/gemini-1.5-flash_Flask",
    deployed_link: "https://yucelgumus.pythonanywhere.com/",
  },
  {
    name: "Python Görüntü Sınıflandırma",
    description:
      " Python ile at , kuş , kedi ve köpek resimlerinden oluşan dataseti  eğiterek kullanıcının seçtiği  görüntünün ne olduğunu  ilgili dataset çerçevesinde tahmin ederek oranıyla beraber listeyen uygula. Bu uygulamayı gradio ile bir arayüze taşıma ve hugging face space üzerinde yayınlayarak açık kaynak olarak paylaşımı yapılmıştır.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
      { name: "embedding", color: "blue-text-gradiet" },
    ],
    image: "/assets/projects/imageclassifier.png",
    source_code_link: "https://github.com/yucel-gumus/image_classifier_gradio",
    deployed_link:
      "https://huggingface.co/spaces/yucelgumus61/image_classifier",
  },
  {
    name: "Benzer filmleri bulma NLTK Projesi",
    description:
      "Doğal Dil İşleme ve cosinus benzerlik matrisi kullanarak 5000 film bilgilerinin bulunduğu veri üzerinden cosine_similarity ile veriseti üzerindeki metin benzerliklerinden faydalanılarak  girilen filme göre en yakın benzerlikte ki filmlerin 5 tanesini bulan bir uygulama geliştirdim.Bu uygulamaya arayüz olarak gradio entegra ettim ve hugging face space üzerinden kullanıma açtım.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
      {
        name: "NLTK",
        color: "pink-text-gradient",
      },
      { name: "cosine_similarity", color: "blue-text-gradiet" },
    ],
    image: "/assets/projects/nltk.png",
    source_code_link: "https://github.com/yucel-gumus/NLTK",
    deployed_link: "https://huggingface.co/spaces/yucelgumus61/NTLK",
  },
  {
    name: "Resim Derinlik Analizi",
    description:
      "Yüklenen resmin zoe depth modeli kullanılarak derinlik analizini yapan gradio uygulaması yapıldı.Yapılan bu uygulama hugging face space üzerinden paylaşıma sunuldu. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
      {
        name: "ZoeDepth",
        color: "pink-text-gradient",
      },
      { name: "CV2", color: "blue-text-gradiet" },
    ],
    image: "/assets/projects/depth.png",
    source_code_link: "https://github.com/yucel-gumus/Depth_Estimation_Gradio",
    deployed_link:
      "https://huggingface.co/spaces/yucelgumus61/Zoe_DeptAnalyzer",
  },

  {
    name: "Türkiye Haritası",
    description:
      "Bu projenin amacı Türkiye sınırları ve il sınırlarına dayalı olarak oluşturulan harita da alana tıklayınca hangi il olduğu ve ilin alanını belirtmektir.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "leaflet",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/turkeymap.png",
    deployed_link: "https://yucel-gumus.github.io/turkey-map.github.io/",
    source_code_link: "https://github.com/yucel-gumus/turkey-map.github.io",
  },
];

const personalInfo = {
  name: "Yücel",
  fullName: "Yücel Gümüş",
  email: "yucelgumus61@yahoo.com",
  role: "Software Developer",
  about: `Düzce Üniversitesi Bilgisayar Mühendisliği bölümünden mezun olduktan sonra,
   Turkuvaz Medya Grubu ve Interdata (Pavo Group) gibi firmalarda yazılım geliştirme alanında deneyim kazandım.
    Web ve mobil uygulama geliştirme, API entegrasyonu ve coğrafi bilgi sistemleri (CBS) üzerine çalıştım.
     Özellikle, ASP.NET Core , React.js ve Javascript gibi teknolojilerde yetkinim. Hobi olarak Python ile kişisel projeler yaparak kendimi geliştirmeye devam ediyorum.`,
  projectsIntro: `Yazılım geliştirme tutkumla hobi olarak çeşitli projeler geliştirdim ve GitHub'da paylaştım. 
  Şimdi bu projeleri web sitemde sergiliyorum. Her proje, öğrendiğim yeni teknikleri uygulayarak kendimi geliştirdiğim bir deneyimi temsil ediyor.
   Projelerimi inceleyerek ilham alabilir ve GitHub'daki detaylarına göz atabilirsiniz.`,
};

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/yucel-gumus",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/yucel-gumus-81718b1b7/",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  certificates,
  projects,
  socials,
  personalInfo,
};
