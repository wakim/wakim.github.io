(function(angular, undefined) {
    var model = {
                    "pt": {
                        "school": "Bacharel em Ciências da Computação pela UFRJ",
                        "resume": "Sou desenvolvedor Android, com experiência em desenvolvimento Web.<br /><br />Motivado em encontrar as melhores formas de ganhar qualidade e produtividade, seja em termos de padrões e práticas de desenvolvimento, técnologias e ferramentas. Sempre busco novidades para atingir esse objetivo.",
                        "jobs": [
                            {
                                "location": "HE:labs",
                                "desc": "Desenvolvedor Android, atuando em pequenos times remotos ágeis multidisciplinares, com constante comunicação e colaboração dos clientes, sempre com objetivo de transformar idéias em produtos digitais, com foco total em MVP.<br /><br />Para atingir o objetivo de realizar entregas semanais de software funcional, utilizamos o framework XP com envolvimento dos clientes, para construir soluções que atendam as necessidades em termos de tempo, escopo e qualidade.<br /><br />Sempre que possível utilizamos ferramentas, padrões e tecnologias atuais do mercado, entre elas: Kotlin, MVP, TDD, Continuous Integration and Deployment, Dagger2, RxJava, Retrofit, Gson, Support Libraries, Google Play Services, LeakCanary, Stetho, Realm e entre outras.",
                                "interval": "06/2015 - dias atuais",
                                "activities": [
                                    "Planejar, projetar e desenvolver entregas semanais de software funcional"
                                ]
                            },
                            {
                                "location": "Stefanini",
                                "desc": "Analista Desenvolvedor Java, trabalhando no projeto do Fundo de Garantia da Caixa Econômica Federal.",
                                "interval": "10/2014 - 05/2015",
                                "activities": [
                                    "Projetar e desenvolver os módulos do sistema do Fundo de Garantia, seguindo especificações em caso de uso",
                                    "Desenvolvimento Back-end com Java, utilizando JSF, EJB 3 e JPA",
                                    "Desenvolvimento Front-end com Javascript (jQuery e plugins), CSS3 (Bootstrap) em componentes PrimeFaces",
                                    "Banco de dados DB2 para armazenamento de dados",
                                    "Uso do servidor JBoss 6.3 EAP como servidor de aplicação"
                                ]
                            },
                            {
                                "location": "GPE (ScrumHalf)",
                                "desc": "Desenvolvedor Java Web trabalhando como integrante de uma equipe de desenvolvimento Scrum. Trabalhei no desenvolvimento e manutenção do SaaS ScrumHalf.",
                                "interval": "12/2011 - 07/2014",
                                "activities": [
                                    "Planejar, projetar, desenvolver e testar o ScrumHalf",
                                    "Desenvolvimento Back-end com Java, utilizando JSF, EJB 3, JPA e JMS",
                                    "Testes funcionais utilizando JUnit, Selenium e DBUnit",
                                    "Desenvolvimento Front-end com Javascript (KnockoutJS), CSS3 em componentes PrimeFaces",
                                    "Armazenamento de dados por banco de dados MySQL",
                                    "Uso do servidor JBoss 6 e 7 como servidor de aplicação",
                                    "Lançamento de versões do ScrumHalf, com mudanças significativas, informando as mudanças para os usuários",
                                    "Suporte aos usuários, respondendo dúvidas e resolvendo bugs"
                                ]
                            },
                            {
                                "location": "COPPETEC",
                                "desc": "Desenvolvedor Java Web, trabalhando com manutenção e desenvolvimento de aplicações web sociais da marinha.",
                                "interval": "07/2010 - 06/2011",
                                "activities": [
                                    "Projetar e desenvolver funcionalidades nos sitemas internos do Abrigo do marinheiro DSS/AMN",
                                    "Desenvolvimento Back-end com Java, utilizando JSP, Servlets e JDBC",
                                    "Desenvolvimento Front-end com Javascript e CSS",
                                    "Armazenamento de dados em banco de dados MS SQL Server",
                                    "Uso do servidor Tomcat como Servlet container",
                                    "Suporte aos usuários, respondendo dúvidas e resolvendo bugs"
                                ]
                            }
                        ],

                        "personal_projects": [
                            {
                                "name": "Kotlin MVP Starter",
                                "desc": "Pequeno projeto demonstrando a arquitetura MVP no Android.",
                                "more_desc": "O objetivo principal é fornecer um guia para novos projetos, seguindo a arquitetura MVP com Dagger2, RxJava, Kotlin e Unit Tests.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=kotlin-mvp-starter&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
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
                        "school": "Bachelor of Computer Science UFRJ",
                        "resume": "I'm a Android developer, with experience in Web development.<br /><br />Motivated to find the best way to increase quality and productivity, either in terms of development patterns and pratices, technologies and tools. Always search news to reach this objective.",
                        "jobs": [
                            {
                                "location": "HE:labs",
                                "desc": "Android Developer, acting in small multidisciplinary remote agile teams, with constant comunication and colaboration with clients, always with the goal to transform ideas in digital products, with total focus on MVP.<br /><br />To reach the goal of weekly releases of functional software, we use the XP framework with clients involvement, to build solutions which meets the need in terms of time and quality.<br /><br />Always possible we use current market tools, patterns and technologies, including: Kotlin, MVP, TDD, Continuous Integration and Deployment, Dagger2, Rx, Retrofit, Gson, Support Libraries, Google Play Services, LeakCanary, Stetho, Realm and much more.",
                                "interval": "06-2015 - actual",
                                "activities": [
                                    "Plan, design e develop weekly deliveries of functional mobile software"
                                ]
                            },
                            {
                                "location": "Stefanini",
                                "desc": "Java Development Analyst, working on a Guarantee Fund Project of Caixa Econômica Federal.",
                                "interval": "10-2014 - 05-2015",
                                "activities": [
                                    "Design and develop Garantee Fund modules, following the use cases especifications",
                                    "Back-end Development using Java with JSF, EJB 3 and JPA",
                                    "Front-end Development using Javascript (jQuery and plugins), XHTML, CSS3 (Bootstrap) in PrimeFaces components",
                                    "Database Engine DB2 for Data Storage",
                                    "JBoss 6.3 EAP as Application Server"
                                ]
                            },
                            {
                                "location": "GPE (ScrumHalf)",
                                "desc": "Java Web Developer as part of a Scrum Team. Working on SaaS ScrumHalf on development and maintenance.",
                                "interval": "12-2011 - 07-2014",
                                "activities": [
                                    "Plan, design, develop and test ScrumHalf",
                                    "Back-end development using Java with JSF, EJB 3, JPA and JMS",
                                    "Functional tests using JUnit, Selenium and DBUnit",
                                    "Front-end development with Javascript (KnockoutJS), HTML5 and CSS3 in PrimeFaces components",
                                    "Database Engine MySQL",
                                    "JBoss 6 and 7 as Application Server",
                                    "Rollout new ScrumHalf releases, with significant changes, notifying changes to users",
                                    "Users support, answering questions and resolving bugs"
                                ]
                            },
                            {
                                "location": "COPPETEC",
                                "desc": "Java Web Developer, working with development and maintenance of brazilian navy social web applications.",
                                "interval": "07-2010 - 06-2011",
                                "activities": [
                                    "Design and develop features for internal applications of \"Abrigo do marinheiro\" DSS/AMN",
                                    "Back-end development with Java, using JSP, Servlets and JDBC",
                                    "Front-end development with Javascript, XHTML and CSS",
                                    "Database engine MS SQL Server",
                                    "Tomcat as Servlet Container",
                                    "Users support, answering questions and resolving bugs"
                                ]
                            }
                        ],

                        "personal_projects": [
                            {
                                "name": "Kotlin MVP Starter",
                                "desc": "Small project demonstrating the MVP architecture for Android.",
                                "more_desc": "The main goal is to provide a prototype for new Android projects. Using MVP architecture with Dagger2, RxJava, Kotlin and Unit Tests.",
                                "github_source": "http://ghbtns.com/github-btn.html?user=wakim&repo=kotlin-mvp-starter&type=fork&count=false&size=large",
                                "fa_icons": ["fa-android", "fa-mobile"]
                            },
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
                            {"name": "JavaEE", "sub": ["JSF", "JPA", "EJB", "Servlet's", "JSP", "JMS", "PrimeFaces", "JDBC", "REST"]},
                            {"name": "Javascript", "sub": ["KnockoutJS", "JQuery", "AngularJS", "jQuery DataTables"]},
                            {"name": "Agile Development", "sub": ["Scrum"]},
                            {"name": "Git"},
                            {"name": "HTML5", "sub": ["CSS3"]},
                            {"name": "SQL", "sub": ["MySQL", "DB2", "Postgres"]},
                            {"name": "C/C++"},
                            {"name": "iOS"}
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
                            "some_interests": "Tecnologias de interesse",
                            "experiences": "Experiências",
                            "resume": "Resumo",
                            "main_activities": "Principais atividades"
                        },
                        "en": {
                            "title": "Wakim Jraige - Web Site",
                            "more": "More",
                            "less": "Less",
                            "personal_projects": "Personal projects",
                            "google_play_badge_alt": "Google Play Badge",
                            "google_play_badge_link": "images/en_generic_rgb_wo_45.png",
                            "some_interests": "Technologies of interest",
                            "experiences": "Experiences",
                            "resume": "Resume",
                            "main_activities": "Main Activies"
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
                var mq = window.matchMedia("(max-width: 767px)");

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
