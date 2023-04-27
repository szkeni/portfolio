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
        debug: true,
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
                  },
                  introduction: {
                    line1: "Hello, I'm Klaudia",
                    line2: "Webdeveloper",
                    line3: "loremipsum",
                  },
                  download: {
                    cv: "Download CV",
                  },
                  more: {
                    about: "Scroll down and get to know me",
                  },
                  about: {
                    line1: "About me",
                    line2: "loremipsum",
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
                    line2: "2015. september - 2019. june",
                    line4: "After High School",
                    line5: "2019. september - 2020. june",
                  },
                  jobs: {
                    title: "Jobs",
                    line1: "2021 June -",
                    line2: "Front-end developer",
                  },
                  hobbies: {
                    title: "Hobbies",
                    numberOne: "Gaming",
                    line1: "loremipsum",
                    numberTwo: "Working out",
                    line2: "loremipsum",
                    numberThree: "Movies",
                    line3: "loremipsum",
                    numberFour: "Make-up",
                    line4: "loremipsum",
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
                  },
                  introduction: {
                    line1: "Hello, Klaudia vagyok",
                    line2: "Webfejlesztő",
                    line3: "loremipsum",
                  },
                  download: {
                    cv: "Önéletrajz letöltése",
                  },
                  more: {
                    about: "Görgess lejjebb és ismerj meg jobban",
                  },
                  about: {
                    line1: "Rólam",
                    line2: "loremipsum",
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
                    line2: "2015. szeptember - 2019. június",
                    line4: "Szakképesítés",
                    line5: "2019. szeptember - 2020. június",
                  },
                  jobs: {
                    title: "Munkahelyek",
                    lang1: "2021 Június -",
                    lang2: "Front-end fejlesztő",
                  },
                  hobbies: {
                    title: "Hobbik",
                    numberOne: "Játékok",
                    line1: "loremipsum",
                    numberTwo: "Edzés",
                    line2: "loremipsum",
                    numberThree: "Filmek",
                    line3: "loremipsum",
                    numberFour: "Smink",
                    line4: "loremipsum",
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
