function sample9() {
    text="\
    \\subsection*{Some new features in version 0.13.0} \n\
    $\\begin{array}{ll}   \n\
    \\verb=\\mathstrut= &\\dfrac{1+\\dfrac{1}{n\\mathstrut}}{2+\\dfrac{1\\mathstrut}{n}}\\text{ vs }\\dfrac{1+\\dfrac{1}{n}}{2+\\dfrac{1}{n}},\\quad\\sqrt{\\mathstrut 3} + \\sqrt{\\mathstrut\\alpha}\\text{ vs  }\\sqrt{3} + \\sqrt{\\alpha}\\\\[5ex] \n\
    \\verb=\\begin{pmatrix*}[r]-1&2\\\\3&-4\\end{pmatrix*}=&\\begin{pmatrix*}[r]-1&2\\\\3&-4\\end{pmatrix*}\\\\ \n\
    \\text{similarly }\\verb=bmatrix*, Bmatrix*, vmatrix*, Vmatrix*}=\\\\ \n\
    \\verb=align=&\\begin{align}x+1&=2\\\\y^2-y&=2 \\end{align} \n\
    \\end{array}$\\\\ \n\
    $\\verb=equation=\\\\[-5ex]$ \n\
    \\[\\begin{equation}x+1=2\\end{equation}\\] \n\
    $\\verb=equation=\\\\[-5ex]$ \n\
    \\[\\begin{equation}y^2-y=2\\end{equation}\\] \n\
    \\\\ \n\
    <hr>  \n\
    \\subsection*{Some new features in version 0.12.0}   \n\
     \n\
    $\\begin{array}{ll}   \n\
    \\verb=\\begin{rcases}=\\\\[-2ex]  \n\
    \\verb=\\int_0^1 x^2\\,dx & \\text{ for } x>0\\\\=&\\begin{rcases} \n\
    \\int_0^1 x^2\\,dx & \\text{ for } x>0\\\\ \n\
    x^3 & \\text{else}\\\\ \n\
    \\end{rcases} \\quad \\Rightarrow \\cdots\\\\[-2ex] \n\
    \\verb=x^3 & \\text{else}=\\\\ \n\
    \\verb=\\end{rcases}\\quad \\Rightarrow \\cdots=\\\\[1ex] \n\
    \\verb=\\begin{drcases}=\\\\[-4ex] \n\
    \\verb=\\int_0^1 x^2\\,dx & \\text{ for } x>0\\\\=&\\begin{drcases} \n\
    \\int_0^1 x^2\\,dx & \\text{ for } x>0\\\\[2ex] \n\
    x^3 & \\text{else} \n\
    \\end{drcases} \\quad \\Rightarrow \\cdots\\\\[-4ex] \n\
    \\verb=x^3 & \\text{else}=\\\\ \n\
    \\verb=\\end{drcases} \\quad \\Rightarrow \\cdots=\\\\[2ex] \n\
    \\verb=\\bra{\\phi} \\ket{\\psi} \\braket{\\phi\\vert\\psi}= &\\bra{\\phi} \\ket{\\psi} \\braket{\\phi\\vert\\psi}\\\\[1ex] \n\
    \\verb=\\Bra{\\dfrac{\\partial^2}{\\partial t^2}}= & \\Bra{\\dfrac{\\partial^2}{\\partial t^2}}\\\\[1ex] \n\
    \\verb=\\ket{a}= \\Ket{\\dfrac{a}{1}}= & \\ket{a}= \\Ket{\\dfrac{a}{1}}\\\\ \n\
    \\verb=\\minuso= & \\minuso \n\
    \\end{array}$\\\\\\\\ \n\
    <hr> \n\
    \\subsection*{Some new features in version 0.11.0} \n\
    \n\
    $\\begin{array}{ll} \n\
    \\verb=\\operatorname*{foo}_1^2= & \\displaystyle \\operatorname*{foo}_1^2 \\\\[2ex] \n\
    \\verb!\\plim_{n\\to\\infty}X_n=X! & \\plim_{n\\to\\infty}X_n=X \\\\[3ex] \n\
    \\verb=\\begin{smallmatrix}1&2\\\\3&4\\end{smallmatrix}= & \\begin{smallmatrix}1&2\\\\3&4\\end{smallmatrix}\\\\[2ex] \n\
    \\verb=\\sum_{\\substack{1\\leq i,\\,j\\leq n = & \n\
    \\displaystyle\\sum_{\\substack{1\\leq i,\\,j\\leq n\\\\[1ex]i\\neq j}} f(i,j)\\\\[-5ex] \n\
    \\verb=\\\\[1ex]i\\neq j}} f(i,j=\\\\[3ex] \n\
    \\verb=\\sum_{\\begin{subarray}{c}1\\leq i,\\,j\\leq n= & \\displaystyle\\sum_{\\begin{subarray}{c}1\\leq i,\\,j\\leq n\\\\[1ex]i\\neq j\\end{subarray}} f(i,j)\\\\[-5ex] \n\
    \\verb=\\\\[1ex]i\\neq j\\end{subarray}} f(i,j)= \n\
    \\end{array}$ \\\\\\\\ \n\
    <hr>\n\
    \\subsection*{Some new features in version 0.10.2} \n\
    \n\
    $\\begin{array}{ll} \n\
    \\verb=\\llbracket x \\rrbracket= & \\qquad \\llbracket x \\rrbracket \\\\ \n\
    \\verb=\\lBrace x \\rBrace= & \\qquad \\lBrace x \\rBrace \n\
    \\end{array}$ \\\\\\\\ \n\
    <hr>\n\
    \\subsection*{Some new features in version 0.10.1} \n\
    \n\
    $\\begin{array}{ll} \n\
    \\text{mhchem extension } \\verb=\\ce= & \\ce{Zn^2+ \n\
    <=>[\\ce{+ 2OH-}][\\ce{+ 2H+}]  \n\
    {\\underset{\\text{amphoteric Hydroxid}}{\\ce{Zn(OH)2 v}}} %group!  \n\
    <=>[\\ce{+ 2OH-}][\\ce{+ 2H+}]  \n\
    {\\underset{\\text{Hydroxozikat}}{\\ce{[Zn(OH)4]^2-}}}% group!  \n\
    }\\\\\\\\ \n\
    \\verb=\\argmax,\\argmin= &\\argmax,\\argmin\\\\ \n\
    \\verb=\\textbackslash, \\textasciicircum= & \\text{\\textbackslash} \\text{\\textasciicircum} \n\
    \\end{array}$ \\\\\\\\ \n\
    <hr>\n\
    \\subsection*{Some new features in version 0.10.0} \n\
    \n\
    $\\begin{array}{ll} \n\
    \\verb=\\widecheck= & \\widecheck{123}\\\\ \n\
    \\verb=\\hline= & \\begin{array}{|c|c|}\\hline \n\
    1&2\\\\ \\hline \n\
    3& 4\\\\\\hline \n\
    \\end{array}\\\\ \n\
    \\verb=\\newline and \\\\ in inline formula a\\\\b= & a\\\\ \n\
    &b \\\\ \n\
    \\verb=\\gdef macros= \\\\ \n\
    {\\color{coral}\\verb=Warning! gdef persists across rendering=} \\\\[-0.5ex] \n\
    {\\color{coral}\\verb=so affects everything that follows=}\\\\ \n\
    \\verb=\\gdef\\Rstar{\\mathbb{R}^*}\\Rstar= & \\gdef\\Rstar{\\mathbb{R}^*}\\Rstar\\\\ \n\
    \\verb=\\gdef\\myx#1{x_{#1}}\\myx1+\\myx2= & \\gdef\\myx#1{x_{#1}}\\myx1+\\myx2\\\\ \n\
    \\verb|\\gdef\\formula#1#2{#1^2-#2^2=(#1+#2)(#1-#2)}|\\\\ \n\
    \\verb=\\formula{x}{y}= & \\gdef\\formula#1#2{#1^2-#2^2=(#1+#2)(#1-#2)}\\formula{x}{y}\\\\ \n\
    \\verb=\\def,\\newcommand,\\providecommand,=\\\\ \n\
    \\verb=\\renewcommand=\\\\ \n\
    \\verb=\\def\\Z{\\mathbb{Z}}\\Z= & \\def\\Z{\\mathbb{Z}}\\Z\\\\ \n\
    \\verb=\\renewcommand{\\Z}{\\mathbb{Z}^+}\\Z= & \\renewcommand{\\Z}{\\mathbb{Z}^+}\\Z\\\\[2ex] \n\
    \\verb=\\providecommand{\\arraystretch}{1.5}=\\\\[-5ex] \n\
    &\\providecommand{\\arraystretch}{1}\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix} \\providecommand{\\arraystretch}{1.5}\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\\\\\\\ \n\
    \\verb=: & \\hdashline= & \\providecommand{\\arraystretch}{1}\\left(\\begin{array}{ccc:c}1&2&3&0\\\\4&5&6&0\\\\\\hdashline 7&8&9&0\\end{array}\\right)\\\\\\\\ \n\
    \\verb=\\cfrac= & \\dfrac{\\sqrt{5}+1}{2}=1+\\cfrac{1}{1+\\cfrac{1}{1+\\cfrac{1}{ 1+\\cfrac{1}{1+\\cdots}}}} \\\\ \n\
    \\verb=\\pmb= & \\pmb{\\mu}\\\\ \n\
    \\verb=\\oiint \\oiiint= & \\oiint \\ \\oiiint \\\\[1ex] \n\
    \\verb=\\genfrac= &\\genfrac{[}{]}{1.5pt}{0}{x}{y} \\\\[2ex]\n\
    \\verb=\\mathnormal= & \\mathnormal{def} \\\\ \n\
    \\verb=\\color{00ff00}= \\text{ or } \\verb=\\color{#00ff00}= & \\color{00ff00}\\text{green}\\color{black}\\text{ or }\\color{#00ff00}\\text{green} \n\
    \\end{array}$ \n\
    \\[\\hspace{-15.5em}\\verb=\\tag=\\hspace{21em}x=y\\tag{*}\\] \n\
    <hr>\n\
    \\subsection*{Some new features in version 0.9.0} \n\
    \n\
    $\\begin{array}{ll} \n\
    \\verb=\\dots= & a_1\\dots a_n\\ a_{1\\dots n}\\  a_1+\\dots+a_n\\\\ \n\
    \\verb=\\verb= & \\verb=\\mathrlap=\\\\ \n\
    \\verb=%= \\text{ comment} & \\verb=x % comment=\\\\ \n\
    & \\verb=y= \\quad \\text{ shows as } xy\\\\ \n\
    \\verb=\\colorbox= &  \\colorbox{lightblue}{box} \\\\ \n\
    \\verb=\\fcolorbox= &\\fcolorbox{red}{lightblue}{box}\\\\ \n\
    \\verb=\\operatorname= & \\operatorname{Im} f\\\\ \n\
    \\verb=\\raisebox= & \\text{baseline \\raisebox{1ex}{high} and \\raisebox{-1ex}{low}} \\\\[1ex] \n\
    \\verb=\\smash= & \\sqrt{x}+\\sqrt{y}+\\sqrt{z}\\text{ with smash gives }\\sqrt{x}+\\sqrt{\\smash[b]{y}}+\\sqrt{z} \\\\[1ex] \n\
    \\verb=alignedat= \\\\[-3ex]&\\begin{alignedat}{2} \n\
    x& = y_1-y_2+y_3-y_5+y_8-\\dots \n\
    &\\quad& \\text{by (3.21)}\\\\ \n\
    & = y\\circ y^* && \\text{by Theorem 1}\\\\ \n\
    & = y(0) y && \\text {by Axiom 1.} \n\
    \\end{alignedat}\\\\ \n\
    \\verb=\\text= & \\text{\\i, \\j, \\ae, \\AE, \\oe, \\OE, \\o, \\O, \\ss, \\P, \\S, \\aa, \\AA}\\\\ \n\
    \\verb=\\boldsymbol= &\\boldsymbol{ab}\\ \\mathbf{a}\\boldsymbol{\\cdot}\\mathbf{b} \\\\ \n\
    \\verb=\\textit{\\textbf{abc}}= &\\textit{\\textbf{abc}} \\\\ \n\
    \\text{logos} & \\TeX\\ \\LaTeX\\ \\KaTeX \\\\ \n\
    \\text{italic Greek capital letters}&\\varGamma\\ \\varDelta\\ \\varTheta\\ \\varLambda\\ \\varXi\\ \n\
    \\varPi\\ \\varSigma\\ \\varUpsilon\\ \\varPhi\\ \\varPsi\\ \\varOmega \\\\ \n\
    \\text{underline in text mode} & \\text{\\underline{text}} \\\\ \n\
    \\text{reaction arrows} & A\\xrightleftarrows{a} B\\xrightequilibrium{b} C \\xleftequilibrium{c} D \n\
    \\end{array}$  \\\\\\\\ \n\
    <hr>\n\
    "
    return text;
    }
    