function sample(num) {

	var s=[];
	
s[1] ="\\subsection*{Group Theory}\n\
\\begin{enumerate}\n\
\\item \\emph{Burnside's lemma}, sometimes also called \\emph{Burnside's counting theorem, the Cauchy-Frobenius lemma} or the \\emph{orbit-counting theorem}\\\\ \n\
Let $\\wedge$ be a group action of a finite group $G$ on a finite set $X$. Then the number $t$ of orbits of the action is given by the formula\n\
\\[\n\
t=\\frac{1}{|G|}\\sum_{g\\in G}|\\text{Fix}(g)|\n\
\\]\n\
\\item For each integer $n\\ge2$, the quotient group $\\mathbb{Z}/n\\mathbb{Z}$ is a cyclic group generated by $1+n\\mathbb{Z}$ and so $\\color{red}{\\mathbb{Z}/n\\mathbb{Z}\\cong\\mathbb{Z}_n}$\n\
\\item The quotient group $\\mathbb{R}/\\mathbb{Z}$ is isomorphic to $([0,1),+_1)$, the group of real numbers in the interval $[0,1)$, under addition modulo 1.\n\
\\item \\emph{Isomorphism Theorem}. Let $\\phi\\colon(G,\\circ)\\to(H,*)$ be a homomorphism. Then the function \n\
\\[\n\
\\begin{aligned}\n\
f\\colon G/\\text{Ker}(\\phi)&\\to\\text{Im}(\\phi)\\\\ \n\
x\\text{Ker}(\\phi)&\\mapsto\\phi(x)\n\
\\end{aligned}\n\
\\]\n\
is an isomorphism, so\n\
\\[\n\
G/\\text{Ker}(\\phi)\\cong \\text{Im}(\\phi)\n\
\\]\n\
\\end{enumerate}";

s[2] = "\\subsection*{Taylor's Theorem} \n\
Let the function $f$ be an $(n+1)$-times differentiable on an open interval containing the points $a$ and $x$.\n\
Then\n\
\\[\n\
 f(x)=f(a)+f'(a)(x-a)+\\cdots+\\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)\n\
\\]\n\
where\n\
\\[\n\
 R_n(x)=\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},\n\
\\]\n\
for some $c$ between $a$ and $x$.";

s[3] = "$\\KaTeX$ doesn't have a right-align option so an extra aligned column is used for equation numbers. They are pushed to the right by \mkern spacing, default \\mkern100mu. Both align & align* environments can be used, as can \\tag and \\notag.\\\\ \\\\ \n\
\n\
\\subsection*{Align environment}\n\
\\begin{align}\n\
\\frac{\\pi}{4n^2}&=\\frac{4^n(n!)^2}{2n^2(2n)!}n(2n-1)J_{n-1}-\\frac{4^n(n!)^2}{2n^2(2n)!}2n^2J_n\\\\ \\\\ \n\
&=\\frac{4^n}{4(2n)!}\\left(\\frac{n!}{n}\\right)^22n(2n-1)J_{n-1}-\\frac{4^n(n!)^2}{(2n)!}J_n\\tag{\\ddagger}\\\\\ \\\\ \n\
&=\\frac{4^{n-1}((n-1)!)^2}{(2n-2)!}J_{n-1}-\\frac{4^n(n!)^2}{(2n)!}J_n\n\
\\end{align}\n\
\n\
\\subsection*{Align* environment}\n\
\\begin{align*}\n\
\\frac{4^N(N!)^2}{(2N)!}J_N&\\leq\\frac{4^N(N!)^2}{(2N)!}\\frac{\\pi^2}{4}\\frac{1}{2n+2}I_{2N}\\tag{*}\\\\ \\\\ \n\
&=\\frac{\\pi^2}{8(N+1)}\\frac{4^N(N!)^2}{(2N)!}I_{2N}\\\\\ \\\\ \n\
&=\\frac{\\pi^2}{8(N+1)}\\frac{\\pi}{2}\\tag{**}\\\\ \\\\ \n\
&=\\frac{\\pi^3}{16(N+1)}\n\
\\end{align*}\n\
\\begin{align}\\frac{x}{\\sin x}&\\leq\\frac{\\pi}{2}\\\\ \\\\ \n\
\\text{so}\\qquad\\qquad x&\\leq\\frac{\\pi}{2}\\sin x\n\
\\end{align}\n\
\n\
<span style=\"font-size:0.875em\">\\textit{Sample taken from} \\href{zeta2.html}{Zeta2}</span>";

s[4] = "<span style=\"font-size:0.875em\">\\textit{Examples taken from Interactive Mathematics\'} \\href{http://www.intmath.com/cg5/katex-mathjax-comparison.php}{KaTeX and MathJax Comparison Demo}</span>\n\
\\\\ \\\\ \n\
\\textit{Sum of a Series} \n\
\\begin{align}\n\
\\sum_{i=1}^{k+1}i & = \\left(\\sum_{i=1}^{k}i\\right) +(k+1)\\\\ \\\\ \n\
& = \\frac{k(k+1)}{2}+k+1 \\\\ \\\\ \n\
&= \\frac{k(k+1)+2(k+1)}{2}\\\\ \\\\ \n\
&= \\frac{(k+1)(k+2)}{2}\\\\ \\\\ \n\
&= \\frac{(k+1)((k+1)+1)}{2}\n\
\\end{align}\n\
\n\
\\textit{Product notation}\n\
\\[\n\
1 +  \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots\n\
= \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \n\
\\text{ for }\\lvert q\\rvert < 1.\n\
\\]\n\
\n\
\\textit{Cross Product}\n\
\\[\n\
\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \\begin{vmatrix}\n\
\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\[1ex] \n\
\\frac{\\partial X}{\\partial u} &  \\frac{\\partial Y}{\\partial u} & 0 \\\\[2.5ex] \n\
\\frac{\\partial X}{\\partial v} &  \\frac{\\partial Y}{\\partial v} & 0\n\
\\end{vmatrix}\n\
\\]\n\
\n\
\\textit{Maxwell's Equations}\n\
\\[\n\
\\begin{aligned}\n\
\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\ \\\\ \n\
\\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\ \\\\ \n\
\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\ \\\\ \n\
\\nabla \\cdot \\vec{\\mathbf{B}} & = 0 \n\
\\end{aligned}\n\
\\]\n\
\\emph{Greek Letters}\\\\ \n\
\\begin{align*} \n\
&\\Gamma\\ \\Delta\\ \\Theta\\ \\Lambda\\ \\Xi\\ \\Pi\\ \\Sigma\\ \\Upsilon\\ \\Phi\\ \\Psi\\ \\Omega\\\\ \n\
&\\alpha\\ \\beta\\ \\gamma\\ \\delta\\ \\epsilon\\ \\zeta\\ \\eta\\ \\theta\\ \\iota\\ \\kappa\\ \\lambda\\ \\mu\\ \\nu\\ \\xi\\ \\omicron\\ \\pi\\ \\rho\\ \\sigma\\ \\tau\\ \\upsilon\\ \\phi\\ \\chi\\ \\psi\\ \\omega\\ \\varepsilon\\ \\vartheta\\ \\varpi\\ \\varrho\\ \\varsigma\\ \\varphi  \n\
\\end{align*} \n\
 \n\
\\emph{Arrows}\\\\ \n\
\\begin{align*} \n\
&\\gets\\ \\to\\ \\leftarrow\\ \\rightarrow\\ \\uparrow\\ \\Uparrow\\ \\downarrow\\ \\Downarrow\\ \\updownarrow\\ \\Updownarrow \\\\ \n\
&\\Leftarrow\\ \\Rightarrow\\ \\leftrightarrow\\ \\Leftrightarrow\\ \\mapsto\\ \\hookleftarrow\\\\ \n\
&\\leftharpoonup\\ \\leftharpoondown\\ \\rightleftharpoons\\ \\longleftarrow\\ \\Longleftarrow\\ \\longrightarrow\\\\ \n\
&\\Longrightarrow\\ \\longleftrightarrow\\ \\Longleftrightarrow\\ \\longmapsto\\ \\hookrightarrow\\ \\rightharpoonup\\\\ \n\
&\\rightharpoondown\\ \\leadsto\\ \\nearrow\\ \\searrow\\ \\swarrow\\ \\nwarrow \n\
&\\end{align*} \n\
 \n\
\\emph{Symbols} \n\
\\begin{align*} \n\
&\\surd\\ \\barwedge\\ \\veebar\\ \\odot\\ \\oplus\\ \\otimes\\ \\oslash\\ \\circledcirc\\ \\boxdot\\ \\bigtriangleup\\\\ \n\
&\\bigtriangledown\\ \\dagger\\ \\diamond\\ \\star\\ \\triangleleft\\ \\triangleright\\ \\angle\\ \\infty\\ \\prime\\ \\triangle \n\
\\end{align*}";

s[5]="$\\KaTeX$ supports RGB colours eg $\\color{#6D351A}{\\verb=\\color{#6D351A} Auburn =\\rule{3em}{2ex}}$ (see \\href{http://latexcolor.com/}{LaTeX Color Definitions}) plus 147 named colours below:\\\\ \\\\ \n\
$\\scriptsize \n\
\\begin{array}{lr|lr|lr|lr|} \n\
\\text{aliceblue}&\\color{aliceblue}{\\rule{3em}{2ex}}& \n\
\\text{antiquewhite}&\\color{antiquewhite}{\\rule{3em}{2ex}}& \n\
\\text{aqua}&\\color{aqua}{\\rule{3em}{2ex}}& \n\
\\text{aquamarine}&\\color{aquamarine}{\\rule{3em}{2ex}}\\\\ \n\
\\text{azure}&\\color{azure}{\\rule{3em}{2ex}}& \n\
\\text{beige}&\\color{beige}{\\rule{3em}{2ex}}& \n\
\\text{bisque}&\\color{bisque}{\\rule{3em}{2ex}}& \n\
\\text{black}&\\color{black}{\\rule{3em}{2ex}}\\\\ \n\
\\text{blanchedalmond}&\\color{blanchedalmond}{\\rule{3em}{2ex}}& \n\
\\text{blue}&\\color{blue}{\\rule{3em}{2ex}}& \n\
\\text{blueviolet}&\\color{blueviolet}{\\rule{3em}{2ex}}& \n\
\\text{brown}&\\color{brown}{\\rule{3em}{2ex}}\\\\ \n\
\\text{burlywood}&\\color{burlywood}{\\rule{3em}{2ex}}& \n\
\\text{cadetblue}&\\color{cadetblue}{\\rule{3em}{2ex}}& \n\
\\text{chartreuse}&\\color{chartreuse}{\\rule{3em}{2ex}}& \n\
\\text{chocolate}&\\color{chocolate}{\\rule{3em}{2ex}}\\\\ \n\
\\text{coral}&\\color{coral}{\\rule{3em}{2ex}}& \n\
\\text{cornflowerblue}&\\color{cornflowerblue}{\\rule{3em}{2ex}}& \n\
\\text{cornsilk}&\\color{cornsilk}{\\rule{3em}{2ex}}& \n\
\\text{crimson}&\\color{crimson}{\\rule{3em}{2ex}}\\\\ \n\
\\text{cyan}&\\color{cyan}{\\rule{3em}{2ex}}& \n\
\\text{darkblue}&\\color{darkblue}{\\rule{3em}{2ex}}& \n\
\\text{darkcyan}&\\color{darkcyan}{\\rule{3em}{2ex}}& \n\
\\text{darkgoldenrod}&\\color{darkgoldenrod}{\\rule{3em}{2ex}}\\\\ \n\
\\text{darkgray}&\\color{darkgray}{\\rule{3em}{2ex}}& \n\
\\text{darkgrey}&\\color{darkgrey}{\\rule{3em}{2ex}}& \n\
\\text{darkgreen}&\\color{darkgreen}{\\rule{3em}{2ex}}& \n\
\\text{darkkhaki}&\\color{darkkhaki}{\\rule{3em}{2ex}}\\\\ \n\
\\text{darkmagenta}&\\color{darkmagenta}{\\rule{3em}{2ex}}& \n\
\\text{darkolivegreen}&\\color{darkolivegreen}{\\rule{3em}{2ex}}& \n\
\\text{darkorange}&\\color{darkorange}{\\rule{3em}{2ex}}& \n\
\\text{darkorchid}&\\color{darkorchid}{\\rule{3em}{2ex}}\\\\ \n\
\\text{darkred}&\\color{darkred}{\\rule{3em}{2ex}}& \n\
\\text{darksalmon}&\\color{darksalmon}{\\rule{3em}{2ex}}& \n\
\\text{darkseagreen}&\\color{darkseagreen}{\\rule{3em}{2ex}}& \n\
\\text{darkslateblue}&\\color{darkslateblue}{\\rule{3em}{2ex}}\\\\ \n\
\\text{darkslategray}&\\color{darkslategray}{\\rule{3em}{2ex}}& \n\
\\text{darkslategrey}&\\color{darkslategrey}{\\rule{3em}{2ex}}& \n\
\\text{darkturquoise}&\\color{darkturquoise}{\\rule{3em}{2ex}}& \n\
\\text{darkviolet}&\\color{darkviolet}{\\rule{3em}{2ex}}\\\\ \n\
\\text{deeppink}&\\color{deeppink}{\\rule{3em}{2ex}}& \n\
\\text{deepskyblue}&\\color{deepskyblue}{\\rule{3em}{2ex}}& \n\
\\text{dimgray}&\\color{dimgray}{\\rule{3em}{2ex}}& \n\
\\text{dimgrey}&\\color{dimgrey}{\\rule{3em}{2ex}}\\\\ \n\
\\text{dodgerblue}&\\color{dodgerblue}{\\rule{3em}{2ex}}& \n\
\\text{firebrick}&\\color{firebrick}{\\rule{3em}{2ex}}& \n\
\\text{floralwhite}&\\color{floralwhite}{\\rule{3em}{2ex}}& \n\
\\text{forestgreen}&\\color{forestgreen}{\\rule{3em}{2ex}}\\\\ \n\
\\text{fuchsia}&\\color{fuchsia}{\\rule{3em}{2ex}}& \n\
\\text{gainsboro}&\\color{gainsboro}{\\rule{3em}{2ex}}& \n\
\\text{ghostwhite}&\\color{ghostwhite}{\\rule{3em}{2ex}}& \n\
\\text{gold}&\\color{gold}{\\rule{3em}{2ex}}\\\\ \n\
\\text{goldenrod}&\\color{goldenrod}{\\rule{3em}{2ex}}& \n\
\\text{gray}&\\color{gray}{\\rule{3em}{2ex}}& \n\
\\text{grey}&\\color{grey}{\\rule{3em}{2ex}}& \n\
\\text{green}&\\color{green}{\\rule{3em}{2ex}}\\\\ \n\
\\text{greenyellow}&\\color{greenyellow}{\\rule{3em}{2ex}}& \n\
\\text{honeydew}&\\color{honeydew}{\\rule{3em}{2ex}}& \n\
\\text{hotpink}&\\color{hotpink}{\\rule{3em}{2ex}}& \n\
\\text{indianred}&\\color{indianred}{\\rule{3em}{2ex}}\\\\ \n\
\\text{indigo}&\\color{indigo}{\\rule{3em}{2ex}}& \n\
\\text{ivory}&\\color{ivory}{\\rule{3em}{2ex}}& \n\
\\text{khaki}&\\color{khaki}{\\rule{3em}{2ex}}& \n\
\\text{lavender}&\\color{lavender}{\\rule{3em}{2ex}}\\\\ \n\
\\text{lavenderblush}&\\color{lavenderblush}{\\rule{3em}{2ex}}& \n\
\\text{lawngreen}&\\color{lawngreen}{\\rule{3em}{2ex}}& \n\
\\text{lemonchiffon}&\\color{lemonchiffon}{\\rule{3em}{2ex}}& \n\
\\text{lightblue}&\\color{lightblue}{\\rule{3em}{2ex}}\\\\ \n\
\\text{lightcoral}&\\color{lightcoral}{\\rule{3em}{2ex}}& \n\
\\text{lightcyan}&\\color{lightcyan}{\\rule{3em}{2ex}}& \n\
\\text{lightgoldenrodyellow}&\\color{lightgoldenrodyellow}{\\rule{3em}{2ex}}& \n\
\\text{lightgray}&\\color{lightgray}{\\rule{3em}{2ex}}\\\\ \n\
\\text{lightgrey}&\\color{lightgrey}{\\rule{3em}{2ex}}& \n\
\\text{lightgreen}&\\color{lightgreen}{\\rule{3em}{2ex}}& \n\
\\text{lightpink}&\\color{lightpink}{\\rule{3em}{2ex}}& \n\
\\text{lightsalmon}&\\color{lightsalmon}{\\rule{3em}{2ex}}\\\\ \n\
\\text{lightseagreen}&\\color{lightseagreen}{\\rule{3em}{2ex}}& \n\
\\text{lightskyblue}&\\color{lightskyblue}{\\rule{3em}{2ex}}& \n\
\\text{lightslategray}&\\color{lightslategray}{\\rule{3em}{2ex}}& \n\
\\text{lightslategrey}&\\color{lightslategrey}{\\rule{3em}{2ex}}\\\\ \n\
\\text{lightsteelblue}&\\color{lightsteelblue}{\\rule{3em}{2ex}}& \n\
\\text{lightyellow}&\\color{lightyellow}{\\rule{3em}{2ex}}& \n\
\\text{lime}&\\color{lime}{\\rule{3em}{2ex}}& \n\
\\text{limegreen}&\\color{limegreen}{\\rule{3em}{2ex}}\\\\ \n\
\\text{linen}&\\color{linen}{\\rule{3em}{2ex}}& \n\
\\text{magenta}&\\color{magenta}{\\rule{3em}{2ex}}& \n\
\\text{maroon}&\\color{maroon}{\\rule{3em}{2ex}}& \n\
\\text{mediumaquamarine}&\\color{mediumaquamarine}{\\rule{3em}{2ex}}\\\\ \n\
\\text{mediumblue}&\\color{mediumblue}{\\rule{3em}{2ex}}& \n\
\\text{mediumorchid}&\\color{mediumorchid}{\\rule{3em}{2ex}}& \n\
\\text{mediumpurple}&\\color{mediumpurple}{\\rule{3em}{2ex}}& \n\
\\text{mediumseagreen}&\\color{mediumseagreen}{\\rule{3em}{2ex}}\\\\ \n\
\\text{mediumslateblue}&\\color{mediumslateblue}{\\rule{3em}{2ex}}& \n\
\\text{mediumspringgreen}&\\color{mediumspringgreen}{\\rule{3em}{2ex}}& \n\
\\text{mediumturquoise}&\\color{mediumturquoise}{\\rule{3em}{2ex}}& \n\
\\text{mediumvioletred}&\\color{mediumvioletred}{\\rule{3em}{2ex}}\\\\ \n\
\\text{midnightblue}&\\color{midnightblue}{\\rule{3em}{2ex}}& \n\
\\text{mintcream}&\\color{mintcream}{\\rule{3em}{2ex}}& \n\
\\text{mistyrose}&\\color{mistyrose}{\\rule{3em}{2ex}}& \n\
\\text{moccasin}&\\color{moccasin}{\\rule{3em}{2ex}}\\\\ \n\
\\text{navajowhite}&\\color{navajowhite}{\\rule{3em}{2ex}}& \n\
\\text{navy}&\\color{navy}{\\rule{3em}{2ex}}& \n\
\\text{oldlace}&\\color{oldlace}{\\rule{3em}{2ex}}& \n\
\\text{olive}&\\color{olive}{\\rule{3em}{2ex}}\\\\ \n\
\\text{olivedrab}&\\color{olivedrab}{\\rule{3em}{2ex}}& \n\
\\text{orange}&\\color{orange}{\\rule{3em}{2ex}}& \n\
\\text{orangered}&\\color{orangered}{\\rule{3em}{2ex}}& \n\
\\text{orchid}&\\color{orchid}{\\rule{3em}{2ex}}\\\\ \n\
\\text{palegoldenrod}&\\color{palegoldenrod}{\\rule{3em}{2ex}}& \n\
\\text{palegreen}&\\color{palegreen}{\\rule{3em}{2ex}}& \n\
\\text{paleturquoise}&\\color{paleturquoise}{\\rule{3em}{2ex}}& \n\
\\text{palevioletred}&\\color{palevioletred}{\\rule{3em}{2ex}}\\\\ \n\
\\text{papayawhip}&\\color{papayawhip}{\\rule{3em}{2ex}}& \n\
\\text{peachpuff}&\\color{peachpuff}{\\rule{3em}{2ex}}& \n\
\\text{peru}&\\color{peru}{\\rule{3em}{2ex}}& \n\
\\text{pink}&\\color{pink}{\\rule{3em}{2ex}}\\\\ \n\
\\text{plum}&\\color{plum}{\\rule{3em}{2ex}}& \n\
\\text{powderblue}&\\color{powderblue}{\\rule{3em}{2ex}}& \n\
\\text{purple}&\\color{purple}{\\rule{3em}{2ex}}& \n\
\\text{red}&\\color{red}{\\rule{3em}{2ex}}\\\\ \n\
\\text{rosybrown}&\\color{rosybrown}{\\rule{3em}{2ex}}& \n\
\\text{royalblue}&\\color{royalblue}{\\rule{3em}{2ex}}& \n\
\\text{saddlebrown}&\\color{saddlebrown}{\\rule{3em}{2ex}}& \n\
\\text{salmon}&\\color{salmon}{\\rule{3em}{2ex}}\\\\ \n\
\\text{sandybrown}&\\color{sandybrown}{\\rule{3em}{2ex}}& \n\
\\text{seagreen}&\\color{seagreen}{\\rule{3em}{2ex}}& \n\
\\text{seashell}&\\color{seashell}{\\rule{3em}{2ex}}& \n\
\\text{sienna}&\\color{sienna}{\\rule{3em}{2ex}}\\\\ \n\
\\text{silver}&\\color{silver}{\\rule{3em}{2ex}}& \n\
\\text{skyblue}&\\color{skyblue}{\\rule{3em}{2ex}}& \n\
\\text{slateblue}&\\color{slateblue}{\\rule{3em}{2ex}}& \n\
\\text{slategray}&\\color{slategray}{\\rule{3em}{2ex}}\\\\ \n\
\\text{slategrey}&\\color{slategrey}{\\rule{3em}{2ex}}& \n\
\\text{snow}&\\color{snow}{\\rule{3em}{2ex}}& \n\
\\text{springgreen}&\\color{springgreen}{\\rule{3em}{2ex}}& \n\
\\text{steelblue}&\\color{steelblue}{\\rule{3em}{2ex}}\\\\ \n\
\\text{tan}&\\color{tan}{\\rule{3em}{2ex}}& \n\
\\text{teal}&\\color{teal}{\\rule{3em}{2ex}}& \n\
\\text{thistle}&\\color{thistle}{\\rule{3em}{2ex}}& \n\
\\text{tomato}&\\color{tomato}{\\rule{3em}{2ex}}\\\\ \n\
\\text{turquoise}&\\color{turquoise}{\\rule{3em}{2ex}}& \n\
\\text{violet}&\\color{violet}{\\rule{3em}{2ex}}& \n\
\\text{wheat}&\\color{wheat}{\\rule{3em}{2ex}}& \n\
\\text{white}&\\color{white}{\\rule{3em}{2ex}}\\\\ \n\
\\text{whitesmoke}&\\color{whitesmoke}{\\rule{3em}{2ex}}& \n\
\\text{yellow}&\\color{yellow}{\\rule{3em}{2ex}}& \n\
\\text{yellowgreen}&\\color{yellowgreen}{\\rule{3em}{2ex}}\n\
\\end{array}\n\
$\\\\ \\\\";

s[5] = s[5]+"\n"+samplecolour();

s[6]=sample6();
s[7]=sample7();
s[8]=sample8();
s[9]=sample9();

 var t=[];
 t[num] = document.getElementById("sample"+num).value;

	var text = document.getElementById("formula").value;
	if (text == "") {
		document.getElementById("formula").value = s[num];	

	} else {
		var ta = document.getElementById("formula");
		var scrollheight1 = ta.scrollHeight;
		ta.scrollTop = ta.scrollHeight;
		linkno = linkno + 1;
		document.getElementById("href").href = '#' + linkno;
		ta.value=text + '\\\\ \\\\ \n\n<!-- ' + t[num].toUpperCase() +' --> \n\n<hr><a name=' + linkno +'></a> \n' + s[num];
		var scrollheight2 = ta.scrollHeight;
		ta.scrollTop= scrollheight1 + 0.01 * (scrollheight2 - scrollheight1);
	}
	delimiters();
}

