(function(angular, undefined) {
    var model = {
                    "pt": {
                        "resume": "Bacharel em Ciências da Computação pela UFRJ.<br /><br />Sou desenvolvedor Android, com experiência em desenvolvimento Web.<br /><br />Motivado em encontrar as melhores formas de ganhar qualidade e produtividade, seja em termos de padrões e práticas de desenvolvimento, técnologias e ferramentas. Sempre busco novidades para atingir esse objetivo.",
                        "jobs": [
                            {
                                "location": "HE:labs",
                                "desc": "Desenvolvedor Android, atuando em pequenos times remotos ágeis multidisciplinares, com constante comunicação e colaboração dos clientes, sempre com objetivo de transformar idéias em produtos digitais, com foco total em MVP.<br /><br />Para atingir o objetivo de realizar entregas semanais de software funcional, utilizamos o framework XP com envolvimento dos clientes, para construir soluções que atendam as necessidades em termos de tempo, escopo e qualidade.<br /><br />Sempre que possível utilizamos ferramentas, padrões e tecnologias atuais do mercado, entre elas: Kotlin, MVP, TDD, Continuous Integration and Deployment, Dagger2, RxJava, Retrofit, Gson, Support Libraries, Google Play Services, LeakCanary, Stetho, Realm e entre outras.",
                                "interval": {
                                    "from": "06/2015",
                                    "to": "atual"
                                }
                            },
                            
                            {
                                "location": "Stefanini",
                                "desc": "Atuei como Analista Desenvolvedor Java, na Stefanini, em um projeto do Fundo de Garantia da Caixa Econômica Federal.<br /><br />Utilizando a plataforma Java EE (com EJB, JSF, JPA) em uma arquitetura modular com servidor de aplicação JBoss 6.3 EAP. Com uma grande integração com Banco de Dados DB2 no Back-end. Um front-end com Bootstrap, CSS e Javascript.",
                                "interval": {
                                    "from": "10/2014",
                                    "to": "05/2015"
                                }
                            },
                            
                            {
                                "location": "GPE (ScrumHalf)",
                                "desc": "Minha segunda experiência em Web foi como integrante de uma equipe de desenvolvimento Scrum. Trabalhei no desenvolvimento e manutenção do ScrumHalf.<br /><br />Utilizando Java EE (usando EJB, JSF e JPA) com servidor de aplicação JBoss 6 e 7 e banco de dados MySQL no back-end. HTML, JavaScript (MVVM usando KnockoutJS) e CSS no front-end. Com realização de testes automatizados com JUnit, Selenium e DBUnit.",
                                "interval": {
                                    "from": "12/2011",
                                    "to": "07/2014"
                                }
                            },
                            
                            {
                                "location": "COPPETEC",
                                "desc": "Comecei na área de desenvolvimento WEB com manutenção e desenvolvimento de aplicações Web.<br /><br />Utilizando parte do Java EE (usando JSP, Servlets e JDBC) com Container de Servlets Tomcat e banco de dados SQL Server no back-end. HTML, JavaScript e CSS no front-end.",
                                "interval": {
                                    "from": "07/2010",
                                    "to": "06/2011"
                                }
                            }
                        ],

                        "personal_projects": [
                            {
                                "name": "ESL Pod Client",
                                "desc": "Pequeno projeto de um player mobile Android para podcasts do site English as Second Language.",
                                "more_desc": "O objetivo principal do projeto foi o estudo da arquitetura MVP com a linguagem Kotlin.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=esl-pod-client&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
                            {
                                "name": "Github Sample",
                                "desc": "Pequeno projeto para busca de usuários e repositórios no Github.",
                                "more_desc": "O objetivo principal do projeto foi o estudo da arquitetura MVP com a linguagem Kotlin juntamente com testes unitários e testes de instrumentação.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=github-sample&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
                            {
                                "name": "Agile Planning Poker",
                                "desc": "Meu primeiro aplicativo mobile na plataforma Android, publicado na Play Store, resultante do começo do estudo na área Mobile e plataforma Android para o Projeto Final.",
                                "more_desc": "O aplicativo fornece uma série de baralhos, incluindo um baralho personalizável, para sessões de Planning Poker. Com animações que tornam o uso mais interessante.",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-tablet", "fa-university"],
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker"
                            },

                            {
                                "name": "Distributed Planning Poker",
                                "desc": "Evolução do Agile Planning Poker, que utiliza a plataforma Play Games® da Google® para permitir a integração e comunicação entre os participantes de Planning Poker em Equipes Distribuídas.",
                                "more_desc": "O aplicativo facilita a realização de sessões de Planning Poker de equipes distribuídas, não importanto a localização dos membros, fornecendo acompanhamento para as etapas de um rodada de votação, incluído um espaço para discussão de ideias.",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-users", "fa-google-plus", "fa-gamepad"],
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker.multiplayer"
                            },

                            {
                                "name": "Wear Planning Poker",
                                "desc": "O aplicativo fornece uma série de baralhos para sessões de Planning Poker, adaptado a plataforma Wearable.<br />Na presença do dispositivo com Agile Planning Poker, é possível espelhar o estado entre os aplicativos (cores e seleções).",
                                "more_desc": "Se integra opcionalmente com o dispositivo móvel (Smartphone ou Tablet) para sincronização de dados.",
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker.wear",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-clock-o"],
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=wearable-planning-poker&type=fork&count=false&size=large"
                            }
                        ]
                    },
                    "en": {
                        "resume": "Bachelor of Computer Science UFRJ.<br /><br />I'm a Android developer, with experience in Web development.<br /><br />Motivated to find the best way to increase quality and productivity, either in terms of development patterns and pratices, technologies and tools. Always search news to reach this objective.",
                        "jobs": [
                            {
                                "location": "HE:labs",
                                "desc": "Android Developer, acting in small multidisciplinary remote agile teams, with constant comunication and colaboration with clients, always with the goal to transform ideas in digital products, with total focus on MVP.<br /><br />To reach the goal of weekly releases of functional software, we use the XP framework with clients involvement, to build solutions which meets the need in terms of time and quality.<br /><br />Always possible we use current market tools, patterns and technologies, including: Kotlin, MVP, TDD, Continuous Integration and Deployment, Dagger2, Rx, Retrofit, Gson, Support Libraries, Google Play Services, LeakCanary, Stetho, Realm and much more.",
                                "interval": {
                                    "from": "06-2015",
                                    "to": "actual"
                                }
                            },
                            
                            {
                                "location": "Stefanini",
                                "desc": "I was a Java Development Analyst, in Stefanini, on a Guarantee Fund Project of Caixa Econômica Federal.<br /><br />Using Java EE platform (with EJB, JSF, JPA) with a modular architecture running on JBoss 6.3 EAP application server. With highly integration with DB2 database in back-end. In front-end, Bootstrap, CSS and Javascript.",
                                "interval": {
                                    "from": "10-2014",
                                    "to": "05-2014"
                                }
                            },
                            
                            {
                                "location": "GPE (ScrumHalf)",
                                "desc": "My Second experience on Web as part of a Scrum Team. Worked on ScrumHalf on development and maintenance.<br /><br />Using the complete Java EE (using EJB, JSF and JPA) with JBoss 6 and 7 as Application Server and MySQL in back-end. HTML, JavaScript (MVVM using KnockoutJS) and CSS in the front-end. With automated tests using Selenium, JUnit and DBUnit.",
                                "interval": {
                                    "from": "12-2011",
                                    "to": "07-2014"
                                }
                            },
                            
                            {
                                "location": "COPPETEC",
                                "desc": "Started on Web Development area with development and maintenance of an web applications.<br /><br />Using part of Java EE (using JSP, Servlets and JDBC) with Tomcat as Servlet Container and SQL Server in the back-end and HTML, JavaScript and CSS in the front-end.",
                                "interval": {
                                    "from": "07-2010",
                                    "to": "06-2011"
                                }
                            }
                        ],

                        "personal_projects": [
                            {
                                "name": "ESL Pod Client",
                                "desc": "Project of a small mobile player for English as Second Language website podcasts for Android platform.",
                                "more_desc": "The main goal was learn the use of MVP architecture and Kotlin on Android environment.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=esl-pod-client&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
                            {
                                "name": "Github Sample",
                                "desc": "Small project to search users and repositories on Github.",
                                "more_desc": "The main goal was to learn the MVP archicture with Kotlin on Android environment and applying some unit and instrumentation tests.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=github-sample&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
                            {
                                "name": "Agile Planning Poker",
                                "desc": "My first Android app, published on Google Play Store, result of the starting study on mobile area and Android Platform for my Graduate Thesis.",
                                "more_desc": "The app provides some decks, including a customizable one, for Planning Poker sessions. With animations that makes the use more interesting.",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-tablet", "fa-university"],
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker"
                            },

                            {
                                "name": "Distributed Planning Poker",
                                "desc": "Evolution of Agile Planning Poker, using the Play Games® platform from Google® to allow the integration and communication between Planning Poker session peers from Distributed Teams.",
                                "more_desc": "This app facilitates the realization of Planning Poker sessions between members of a Distributed Team, no matter the location of the peers.",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-users", "fa-google-plus", "fa-gamepad"],
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker.multiplayer"
                            },

                            {
                                "name": "Wear Planning Poker",
                                "desc": "This app provides a set of decks for Planning Poker sessions, adapted to Wearable Platform.<br />Integrates optionally with Agile Planning Poker on your Handheld (Smartphone or Tablet) to synchronize state (colors and selection).",
                                "more_desc": "Integrates optionally with Agile Planning Poker on your Handheld (Smartphone or Tablet) to synchronize state.",
                                "fa_icons": ["fa-android", "fa-mobile", "fa-clock-o"],
                                "google_play_link": "https://play.google.com/store/apps/details?id=br.com.planning.poker.wear",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=wearable-planning-poker&type=fork&count=false&size=large"
                            }
                        ]
                    },
                     
                    "globals": {
                        "interests": [
                            {"name": "Android", "sub": ["MVP", "Dagger", "RxJava", "Tests", "Kotlin", "Material Design"]},
                            {"name": "Git"},
                            {"name": "JavaEE", "sub": ["JSF", "JPA", "EJB", "Servlet's", "JSP", "JMS", "PrimeFaces", "JDBC", "REST"]},
                            {"name": "Javascript", "sub": ["KnockoutJS", "JQuery", "AngularJS", "jQuery DataTables"]},
                            {"name": "Agile Development", "sub": ["Scrum"]},
                            {"name": "CSS"},
                            {"name": "SQL", "sub": ["MySQL", "DB2"]},
                            {"name": "C++"},
                            {"name": "C"},
                            {"name": "iOS", "sub": ["Objective-C"]}
                        ]
                    },
                     
                    "_strings": {
                        "pt" : {
                            "title": "Wakim Jraige - Site Pessoal",
                            "more": "Mais",
                            "less": "Menos",
                            "personal_projects": "Projetos pessoais",
                            "google_play_badge_alt": "Medalha Google Play",
                            "google_play_badge_link": "images/pt-br_generic_rgb_wo_45.png",
                            "some_interests": "Alguns interesses",
                            "experiences": "Experiências",
                            "resume": "Resumo"
                        },
                        "en": {
                            "title": "Wakim Jraige - Web Site",
                            "more": "More",
                            "less": "Less",
                            "personal_projects": "Personal projects",
                            "google_play_badge_alt": "Google Play Badge",
                            "google_play_badge_link": "images/en_generic_rgb_wo_45.png",
                            "some_interests": "Some interests",
                            "experiences": "Experiences",
                            "resume": "Resume"
                        }
                    }
                };

    var app = angular.module('root', []);

    app.controller('main', ['$scope', '$http', '$sce', '$timeout', "localStorage", function($scope, $http, $sce, $timeout, localStorageService){
        
        $scope.strings = {};
        $scope.currentLang = '';
        $scope.projectsLoaded = false;
        
        $scope.setLocale = function(newLang) {
            angular.extend($scope, $scope.model[newLang]);
            angular.extend($scope.strings, $scope.model._strings[newLang]);
            
            $scope.currentLang = newLang;
            $scope.more = $scope.strings[$scope.moreState];
            $scope.initCarousel();
            
            localStorageService.setItem('lang', newLang);
        };

        $scope.initCarousel = function() {
            if (!$scope.projectsLoaded) return;

            $scope.owl && $scope.owl.destroy();

            $timeout(function() {
                var $carousel = $('.owl-carousel');
                $carousel.owlCarousel(
                          {
                              loop:true,
                              items: 1,
                              nav: true,
                              dots: true,
                              autoplay: true,
                              autoplayHoverPause: true
                          }
                      );

                $scope.owl = $carousel.data('owl.carousel');
            }, 1);
        };
        
        $scope.setModel = function(data) {
            $scope.model = data;
            $scope.globals = data.globals;
            
            $scope.setLocale(localStorageService.getItem('lang') || 'pt');
        };

        $scope.setModel(model);

        $timeout(function() {
                var mq = window.matchMedia("(max-width: 479px)");

                if (mq.matches) {
                  $('nav').slideAndSwipe();

                  $('nav a').click(function(e) {
                      setTimeout(function() {$('.ssm-overlay').trigger('click');}, 1);
                  });

                  $scope.projectsLoaded = true;
                  $scope.initCarousel();
                }
            }, 1);
    }]);

    app.filter('trustHtml', ['$sce', function($sce) {
        return function(input) {
            return angular.isString(input) ? $sce.trustAsHtml(input) : input;
        };
    }]);

    app.filter('trustUrl', ['$sce', function($sce) {
        return function(input) {
            return angular.isString(input) ? $sce.trustAsResourceUrl(input) : input;
        };
    }]);
})(angular);

(function($, undefined) {
    var $currentAnimation;

    $('a').on('click',
        function(e) {
            var url = this.getAttribute('href') || '';

            if (url === '') {
                return;
            }

            if(url[0] !== '#') {
                window.open(url, '_blank');
            } else {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                
                if (target.length) {
                    if ($currentAnimation) {
                        $currentAnimation.stop(false, true);
                    }

                    $currentAnimation = $('html, body').animate({
                        scrollTop: target.offset().top - 72
                    }, 1000);

                    return false;
                }
            }
        }
    );
    
    $(function() {
        var mail = ['.com', 'gmail', '@', '.jraige', 'wakim'];
        $('#mail').attr('href', 'mailto:'.concat(mail.reverse().join('')));

        var $bar = $('nav, .toolbar');

        window.addEventListener("scroll", function(event) {
            var top = this.scrollY;

            $bar.css('boxShadow', 0);

            if (top > 0) {
                $bar.css('boxShadow', "0 2px 5px 0 rgba(0, 0, 0, 0.26)");
            } else {
                $bar.css('boxShadow', "0 0 0 0 transparent");
            }
        }, false);
    });
})(jQuery);
