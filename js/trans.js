const lngs = {
    hu: { nativeName: 'HU' },
    en: { nativeName: 'EN' }
  };
  
  const rerender = () => {
    $('body').localize();
  }
  
  $(function () {
    i18next
      .init({
        debug: false,
        fallbackLng: 'hu',
        resources: {
            en: {
                translation: {
                  input: {
                    placeholder: "a placeholder",
                  },
                  nav: {
                    home: "Home",
                    about: "About me",
                    skills: "Skills",
                    schools: "Schools",
                    jobs: "Jobs",
                    hobbies: "Hobbies",
                    contact: "Contact me",
                  },
                  colormode: {
                    light: "Light",
                    dark: "Dark",
                    auto: "Auto",
                  },
                  introduction: {
                    line1: "Hello, I'm Klaudia",
                    line2: "Webdeveloper",
                  },
                  download: {
                    cv: "Download CV",
                  },
                  more: {
                    about: "Scroll down and get to know me",
                  },
                  about: {
                    line1: "About me",
                    line2: "As a beginner, my main goal is to expand my knowledge. I quickly learn new things. My aim is to complete my tasks to the best of my ability. My strength is web development, both in building graphical interfaces and writing background elements. Overall, as a highly motivated and dedicated professional, I believe I am capable of achieving excellent results. My skills, experience, and personal qualities can be valuable tools for any organization or team.",
                  },
                  skills: {
                    title: "Skills",
                  },
                  langs: {
                    title: "Languages",
                    lang1: "Hungarian",
                    lang2: "English",
                  },
                  schools: {
                    title: "Education",
                    line1: "High School",
                    line2: "2015. September - 2019. June",
                    line4: "Qualifications",
                    line5: "2019. September - 2020. June",
                  },
                  jobs: {
                    title: "Jobs",
                    line1: "2021 June -",
                    line2: "Front-end developer",
                  },
                  hobbies: {
                    title: "Hobbies",
                    numberOne: "Gaming",
                    line1: "Games allow people to unwind, relieve stress, or simply have fun with their friends and family.",
                    numberTwo: "Working out",
                    line2: "Exercise is not only important for health and well-being, but it also provides an opportunity to meet new people or strengthen friendships during workouts.",
                    numberFour: "Make-up",
                    line4: "Makeup as a hobby provides people with the opportunity to express their creativity and self-expression through the use of cosmetics.",
                  },
                  contact: {
                    title: "Message me",
                    first: "First name",
                    last: "Last name",
                    text: "Message",
                    submit: "Send message",
                  },
                },
              },
              hu: {
                translation: {
                  input: {
                    placeholder: "egy helytartó",
                  },
                  nav: {
                    home: "Főoldal",
                    about: "Rólam",
                    skills: "Készségek",
                    schools: "Tanulmányok",
                    jobs: "Munkahelyek",
                    hobbies: "Hobbik",
                    contact: "Kapcsolat",
                  },
                  colormode: {
                    light: "Világos",
                    dark: "Sötét",
                    auto: "Auto",
                  },
                  introduction: {
                    line1: "Hello, Klaudia vagyok",
                    line2: "Webfejlesztő",
                  },
                  download: {
                    cv: "Önéletrajz letöltése",
                  },
                  more: {
                    about: "Görgess lejjebb és ismerj meg jobban",
                  },
                  about: {
                    line1: "Rólam",
                    line2: "Pályakezdőként legfőbb célom bővíteni a tudásom. Gyorsan elsajátítom az új ismereteket. Célom, hogy a feladataim a legjobb tudásom szerint végezzem el. Erősségem a webfejlesztés, grafikus felületek felépítése és háttérelemek megírása egyaránt. Összességében magas szintű motivációval és elkötelezettséggel rendelkező szakemberként hiszem, hogy képes vagyok kiváló eredmények elérésére. A készségeim, tapasztalataim és személyes tulajdonságaim együttesen értékes eszközök lehetnek bármely szervezet vagy csapat számára.",
                  },
                  skills: {
                    title: "Készségek",
                  },
                  langs: {
                    title: "Nyelvek",
                    lang1: "Magyar",
                    lang2: "Angol",
                  },
                  schools: {
                    title: "Tanulmányok",
                    line1: "Középiskola",
                    line2: "2015. Szeptember - 2019. Június",
                    line4: "Szakképesítés",
                    line5: "2019. Szeptember - 2020. Június",
                  },
                  jobs: {
                    title: "Munkahelyek",
                    line1: "2021 Június -",
                    line2: "Front-end fejlesztő",
                  },
                  hobbies: {
                    title: "Hobbik",
                    numberOne: "Játékok",
                    line1: " A játékok lehetővé teszik az emberek számára, hogy kikapcsolódjanak, stresszt levezessenek, vagy éppen szórakozzanak barátaikkal és családjukkal.",
                    numberTwo: "Edzés",
                    line2: "Az edzés nem csak az egészség és a jó közérzet szempontjából fontos, hanem lehetőséget ad arra is, hogy új embereket ismerjünk meg, vagy éppen megerősítsük barátságainkat az edzések során.",
                    numberFour: "Smink",
                    line4: "A sminkelés mint hobbi lehetőséget ad az embereknek arra, hogy kifejezzék kreativitásukat és önkifejezésüket a smink segítségével.",
                  },
                  contact: {
                    title: "Üzenj nekem",
                    first: "Keresztnév",
                    last: "Vezetéknév",
                    text: "Üzenet",
                    submit: "Küldés",
                  },
                },
              },
        }
      }, (err, t) => {
        if (err) return console.error(err);
  
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $('#languageSwitcher').append(opt);
        });
        $('#languageSwitcher').change((a, b, c) => {
          const chosenLng = $(this).find("option:selected").attr('value');
          i18next.changeLanguage(chosenLng, () => {
            rerender();
          });
        });
  
        rerender();
      });
  });
