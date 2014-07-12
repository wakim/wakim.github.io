(function(lang){
	var texts = {};

	texts.pt = {
		"ver-no-github": "Ver no Github",
		"sub-title": "Site Pessoal",
		"resume": "Resumo",
		"resume-1": "Graduado em Bacharelado em Ci&ecirc;ncias da Computa&ccedil;&atilde;o pela UFRJ.",
		"resume-2": "Sou desenvolvedor Full Stack, especialmente nas &aacute;reas Web e Mobile. Motivado por novas t&eacute;cnologias, ferramentas e pr&aacute;ticas, voltadas para melhoria no desenvolvimento, aumento de produtividade e inova&ccedil;&atilde;o em solu&ccedil;&otilde;es.",
		"resume-3": "Comecei na &aacute;rea de desenvolvimento WEB com manutenção e desenvolvimento de aplica&ccedil;&otilde;es Web utilizando parte do JavaEE (JSP, Servlets e JDBC) no back-end. HTML, JavaScript e CSS no front-end.",
		"resume-4": "Minha segunda experi&ecirc;ncia em Web foi com JavaEE, utilizando EJB, JSF e JPA (Hibernate) no back-end. HTML, JavaScript (MVVM usando KnockoutJS) e CSS no front-end.",
		"resume-5": "Meu interesse por Mobile surgiu motivado pelo Projeto Final, serviu como uma oportunidade para explorar o mundo Android. Possuo um app publicado e alguns em desenvolvimento (nas horas livres), originados de estudos utilizando sempre os padrões da plataforma.",
		"projects": "Projetos",
		"projects-1": "Meu primeiro aplicativo mobile na plataforma Android, publicado na Play Store, resultante do começo do estudo na área Mobile e plataforma Android para o Projeto Final.",
		"projects-2": "Evolução do Agile Planning Poker, que utiliza a plataforma Play Games&reg; da Google&reg; para permitir a integração e comunicação entre os participantes de Planning Poker em Equipes Distribuídas.",
	};

	texts.en = {
		"ver-no-github": "View on Github",
		"sub-title": "Personal Website",
		"resume": "Resume",
		"resume-1": "Graduado em Bacharelado em Ci&ecirc;ncias da Computa&ccedil;&atilde;o pela UFRJ.",
		"resume-2": "Sou desenvolvedor Full Stack, especialmente nas &aacute;reas Web e Mobile. Motivado por novas t&eacute;cnologias, ferramentas e pr&aacute;ticas, voltadas para melhoria no desenvolvimento, aumento de produtividade e inova&ccedil;&atilde;o em solu&ccedil;&otilde;es.",
		"resume-3": "Comecei na &aacute;rea de desenvolvimento WEB com manutenção e desenvolvimento de aplica&ccedil;&otilde;es Web utilizando parte do JavaEE (JSP, Servlets e JDBC) no back-end. HTML, JavaScript e CSS no front-end.",
		"resume-4": "Minha segunda experi&ecirc;ncia em Web foi com JavaEE, utilizando EJB, JSF e JPA (Hibernate) no back-end. HTML, JavaScript (MVVM usando KnockoutJS) e CSS no front-end.",
		"resume-5": "Meu interesse por Mobile surgiu motivado pelo Projeto Final, serviu como uma oportunidade para explorar o mundo Android. Possuo um app publicado e alguns em desenvolvimento (nas horas livres), originados de estudos utilizando sempre os padrões da plataforma.",
		"projects": "Projetos",
		"projects-1": "Meu primeiro aplicativo mobile na plataforma Android, publicado na Play Store, resultante do começo do estudo na área Mobile e plataforma Android para o Projeto Final.",
		"projects-2": "Evolução do Agile Planning Poker, que utiliza a plataforma Play Games&reg; da Google&reg; para permitir a integração e comunicação entre os participantes de Planning Poker em Equipes Distribuídas.",
	};

	if(lang === 'pt') {
		window.text_mapping = texts.pt;
	} else {
		window.text_mapping = texts.en;
	}
})(window.lang || 'pt');
