var savedtext = '';
var toggle = -1;
var linkno = 0;
var maxno = 9; // no. of buttons
//set up macros for katex.render. No parameters
var macrobj={};
macrobj.macros= {
   "\\N": "\\mathbb{N}",
   "\\Q": "\\mathbb{Q}",
   "\\R": "\\mathbb{R}",
   "\\C": "\\mathbb{C}",
   "\\xvec": "x_1, x_2,\\ldots, x_n",
   "\\lxvec": "x_1+x_2+\\cdots+x_n",
   "\\lyvec": "y_1+y_2+\\cdots+y_k",
   "\\upint": "\\mkern13mu\\overline{\\vphantom{\\intop}\\mkern7mu}\\mkern-20mu\\int",
   "\\lowint": "\\underline{\\vphantom{\\intop}\\mkern7mu}\\mkern-10mu\\int"
   };	
   
//	var macrobjd=Object.assign({}, macrobj); //not supported in IE
//	var macrobjd = macrobj; // only creates a reference not a new copy so properties will be the same
var macrobjd =Object.create(macrobj);
macrobjd.displayMode = true;

// if require extra options as at https://katex.org/docs/options.html put them here
// eg
/*
macrobjd.trust = false;
macrobj.trust = false;
macrobj.throwOnError = false;
macrobj.errorColor="#00FF00";
*/

function clearme() {
   document.getElementById("formula").value = "";
   document.getElementById("formula2").textContent = "";
   document.getElementById("result").innerHTML = "";
   document.getElementById("time_taken").style.visibility = "hidden";
   document.getElementById("next").style.visibility = "hidden";
   document.getElementById("formula").readOnly = false;
   document.getElementById("formula").style.backgroundColor = '';
   document.getElementById("extra").readOnly = false;
   document.getElementById("extra").style.backgroundColor = '';
   document.getElementById("original").checked = true;
   savedtext = '';
   disable(false);
   document.getElementById("result").style.border = "none";	
   linkno = 0;
   document.getElementById("scrollbox").style.visibility = "hidden";
}

function delimiters() {
       var text=document.getElementById("formula").value;		
       var answer_a=document.getElementById("answerA").value;	
       var answer_b=document.getElementById("answerB").value;	
       var answer_c=document.getElementById("answerC").value;	
       var answer_d=document.getElementById("answerD").value;	
       console.log(answer_a)	

//    if (answer_a==""){
//        document.getElementById("result").style.border = "none";
//        document.getElementById("answer-a").style.border = "none";
//        document.getElementById("answer-b").style.border = "none";
//        document.getElementById("answer-c").style.border = "none";
//        document.getElementById("answer-d").style.border = "none";
//        document.getElementById("formula").style.display='block'
//    } else {
//        document.getElementById("result").style.border = "1px solid blue";
//        document.getElementById("result").style.padding = "10px";
//        if (linkno > 0) {document.getElementById("next").style.visibility = "visible";}
//        document.getElementById("scrollbox").style.visibility = "visible";
//        document.getElementById("time_taken").style.visibility = "visible";
//        document.getElementById("answer-a").style.border = "1px solid blue";
//        document.getElementById("answer-a").style.padding = "10px";
//        if (linkno > 0) {document.getElementById("next").style.visibility = "visible";}
//        document.getElementById("scrollbox").style.visibility = "visible";
//        document.getElementById("time_taken").style.visibility = "visible";
//        disable(true);
//   }
   document.getElementById("result").innerHTML = myRender(text);
   document.getElementById("answer-a").innerHTML = myRender(answer_a);
   document.getElementById("answer-b").innerHTML = myRender(answer_b);
   document.getElementById("answer-c").innerHTML = myRender(answer_c);
   document.getElementById("answer-d").innerHTML = myRender(answer_d);
   myonload()
}

function viewQuestion(){
    let  questionList=document.querySelector('.question-list')
    fetch('http://localhost:8080/api/demotest')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        questionList.innerHTML+=`<h3 style='text-align:center;margin-bottom:10px;'>Matematika fanidan test savollari</h3>`
        data.forEach((item,index)=>{
           if(index!==0){
            questionList.innerHTML+=`
                <div class='question'><span style='margin-right:10px'>${index+1}</span><span>${myRender(item.test_text.question)}</span></div>
                <div><span>${myRender(item.test_text.answer_a)}</span></div>
                <div><span>${myRender(item.test_text.answer_b)}</span></div>
                <div><span>${myRender(item.test_text.answer_c)}</span></div>
                <div><span>${myRender(item.test_text.answer_d)}</span></div>
             `
           }else{
            questionList.innerHTML+=`
                <div><span>${index+1}</span><span>${myRender(`$${item.test_text.question}$`)}</span></div>
                <div><span>${myRender(item.test_text.answer_a)}</span></div>
                <div><span>${myRender(item.test_text.answer_b)}</span></div>
                <div><span>${myRender(item.test_text.answer_c)}</span></div>
                <div><span>${myRender(item.test_text.answer_d)}</span></div>
             `
           }
        })
        myonload()
    })
}

function disable(onoff) {
   for (var i = 1; i <= maxno; i++) {
       document.getElementById('sample'+i).disabled = onoff;
   }
   document.getElementById('Clear').disabled = onoff;
   /*		
   if (onoff==true) {
       document.getElementById("result").style.border = "1px solid blue";
       document.getElementById("result").style.padding = "10px";
   } else {
       document.getElementById("result").style.border = "none";
       document.getElementById("next").style.visibility = "hidden";			
   }
   */
}

function dokatex(d) { 
    var x = document.getElementsByClassName('maths');  
   for (var i = 0; i < x.length; i++) {
       x[i].innerHTML = x[i].innerHTML.replace(/<br>/g, "\\\\");
       x[i].innerHTML = x[i].innerHTML.replace(/&amp;/g, "&");
       // allow \(...\) inside \text
       x[i].innerHTML = x[i].innerHTML.replace(/\\\(/g, '$');
       x[i].innerHTML = x[i].innerHTML.replace(/\\\)/g, '$'); 
       // let KaTeX do bold and italics in maths mode
       x[i].innerHTML = x[i].innerHTML.replace(/<em>([\s\S]+?)<\/em>/g, '\\textit{$1}');
       x[i].innerHTML = x[i].innerHTML.replace(/<strong>([\s\S]+?)<\/strong>/g, '\\textbf{$1}');
       x[i].textContent = newcommand(x[i].textContent);
     try {
       if(x[i].tagName == "DIV"){
           //displayMode is true
           t= katex.render(x[i].textContent,x[i],macrobjd,); 
       } else {
           t= katex.render(x[i].textContent,x[i],macrobj);
       }
   }
     catch(err) {
       x[i].style.color = 'red';
       x[i].textContent= escapeHTML(err);
     }
   }
}

function escapeHTML(unsafeText) {
   var div = document.createElement('div');
   div.innerText = unsafeText;
   return div.innerHTML;
}

function fix() {
   if (document.getElementById("fixed").checked==true) {
       document.getElementById("radio").style.position="fixed";
       document.getElementById("radio").style.width="69%";
       document.getElementById("extrabr").innerHTML="<br /><br />";
   } else {
       document.getElementById("radio").style.position="static";
       document.getElementById("radio").style.width="100%";
       document.getElementById("extrabr").innerHTML="";
   }
}

function link(txt) {	
   txt = txt.replace(/\\href\{([\s\S]+?)\}\{([\s\S]+?)\}/g,'<a href="$1">$2</a>');
/*		txt = txt.replace(/<a href=([\s\S]+?)\}/g, '<a href=$1</a>'); */
   return txt;
}

function myonload() {
   // http://qnimate.com/measuring-web-page-performance-using-modern-javascript-apis/
   // High Resolution Time API(performance.now())

 if("performance" in window) {
     if("now" in window.performance || "mozNow" in window.performance || "msNow" in window.performance || "oNow" in window.performance || "webkitNow" in window.performance) {
         var start_time = performance.now() || performance.mozNow() || performance.msNow() || performance.oNow() || performance.webkitNow();
         dokatex();
         var end_time = performance.now() || performance.mozNow() || performance.msNow() || performance.oNow() || performance.webkitNow();
         document.getElementById("time_taken").innerHTML = "Time taken to render formul&aelig; : " + Math.round(end_time - start_time) +" ms";
     } else {
          document.getElementById("time_taken").innerHTML = "High Resolution Time API not supported";
     }
 } else {
     document.getElementById("time_taken").innerHTML = "Page Performance API not supported";
 }
}

function myRender(txt) {
   txt = doalign(txt);
   txt = txt.replace(/\\\$/g, '\%\%');
   txt = txt.replace(/\\\\/g, "<br>");
   txt = txt.replace(/\$([\s\S]+?)\$/g, '<span class=\"maths\">$1</span>');
   txt = txt.replace(/\\\[/g, '<div class=\"maths\">');
   txt = txt.replace(/\\\]/g, '</div>');
/*		txt = txt.replace(/\\\(/g, '<span class=\"maths\">');
   txt = txt.replace(/\\\)/g, '</span>'); */
   txt = txt.replace(/\%\%/g, '\$');
   txt = txt.replace(/\\emph\{([\s\S]+?)\}/g, '<em>$1</em>');
   txt = txt.replace(/\\textit\{([\s\S]+?)\}/g, '<em>$1</em>');
   txt = txt.replace(/\\textbf\{([\s\S]+?)\}/g, '<strong>$1</strong>');
   txt = txt.replace(/\\sample\*\{([\s\S]+?)\}/g, '<h3>$1</h3>');
   txt = txt.replace(/\\subsection\*\{([\s\S]+?)\}/g, '<h4>$1</h4>');
   txt = txt.replace(/\\subsubsection\*\{([\s\S]+?)\}/g, '<h5>$1</h5>');
   txt = link(txt);
   txt = txt.replace(/\\begin\{enumerate\}([\s]+?)\\item/g,'<ol>$1<li>');
   txt = txt.replace(/\\item/g, '</li><li>');
   txt = txt.replace(/\\end\{enumerate\}/g,'</li></ol>')
   txt = txt.replace(/\\includegraphics\{([\s\S]+?)\}/g, ' <img src=\"$1\">');
   txt = txt.replace(/&/g, '&amp;');
   txt = txt.replace(/&amp;nbsp;/g, '&nbsp;');
   txt = txt.replace(/<script([\s\S]+?)>/g, '&lt;script$1&gt;');
   txt = txt.replace(/<\/script>/g, '&lt;\/script&gt;'); 
   txt = txt.replace(/<iframe([\s\S]+?)>/g, '&lt;iframe$1&gt;');
   txt = txt.replace(/<\/iframe>/g, '&lt;\/iframe&gt;');			
   document.getElementById("formula2").textContent = txt.replace(/&amp;/g, '&');
   return txt;
}

function newcommand (text) {
/* Replaced by macros in katex
   var newcommands = "\
    \NN, \mathbb{N}; \
    \QQ, \mathbb{Q}; \
    \RR, \mathbb{R}; \
    \CC, \mathbb{C}; \
    \\xvec, x_1\\comma x_2\\comma\\ldots\\comma x_n; \
    \\lxvec, x_1+x_2+\\cdots+x_n; \
    \\lyvec, y_1+y_2+\\cdots+y_k";
   var splitcommands = newcommands.split(";");
   for (var i = 0; i < splitcommands.length; i++) {
       var eachcommand=splitcommands[i].split(",");
       for (var j = 0; j< eachcommand.length; j++){
           eachcommand[j]=eachcommand[j].trim();
       }
       var regexp = new RegExp("\\"+eachcommand[0], "g");
       text=text.replace(regexp,eachcommand[1]);
       text = text.replace(/\\comma/g,",") 
   } 
*/
       text=newcommandwithoneparam(text);	
       text=newcommandwithtwoparams(text);

   return text;
}

function newcommandwithoneparam (text) {
   var newcommandsp = "\
//		Replaced by KaTeX \
//		\\overrightarrow, \\begin{matrix}\\longrightarrow\\\\[-1ex]$1\\\\[-1ex]\\end{matrix}; \
   \\Span, \\langle $1 \\rangle;\\lvec, $1_1+$1_2+\\cdots+$1_k";
   var splitcommandsp = newcommandsp.split(";");
   for (var i = 0; i < splitcommandsp.length; i++) {
       var eachcommandp=splitcommandsp[i].split(",");
       for (var j = 0; j< eachcommandp.length; j++){
           eachcommandp[j]=eachcommandp[j].trim();
       }
       var regexp = new RegExp("\\" +eachcommandp[0]+"\{(.+?)\}", "g");
       text=text.replace(regexp,eachcommandp[1]);
       text = text.replace(/\\comma/g,",")				
   } 
   return text;	

}

   function newcommandwithtwoparams (text) {
   /*
           txt = txt.replace(/\\href\{([\s\S]+?)\}\{/g,'<a href="$1">');
           txt = txt.replace(/<a href=([\s\S]+?)\}/g, '<a href=$1</a>');
   return txt;
   */
   
       var newcommandspp = "\
       \\gen, \\langle #1\\comma#2\\rangle=\\{#1^i#2^j:#1\\comma #2\\in G\\comma 1\\leq i\\comma j\\leq n\\}";
       var splitcommandspp = newcommandspp.split(";");
       for (var i = 0; i < splitcommandspp.length; i++) {
           var eachcommandpp=splitcommandspp[i].split(",");
           for (var j = 0; j< eachcommandpp.length; j++){
               eachcommandpp[j]=eachcommandpp[j].trim();
           }
           text = text.replace(/\}\{/g,'###');
           t=text.match(/\\gen\{(.*?)\}/g);
           if (t == null){return text.replace(/###/g, '\}\{')};
           pattern = /[^{}]*(?=\})/g;
           for (k=0; k<t.length; k++){
               p=t[k].match(pattern);
               q=p[0].split('###');
               temp=eachcommandpp[1];
               temp=temp.replace(/#1/g,q[0]);
               temp=temp.replace(/#2/g,q[1]);
               var regexp = new RegExp("\\" +eachcommandpp[0]+"\{(.+?)\}");
               text=text.replace(regexp,temp);
           }
           text = text.replace(/###/g, '\}\{');
           text = text.replace(/\\comma/g,",");
       } 
       return text;	
   
}
/*
function newcommand (text) {
   var newcommands = "\NN, \mathbb{N}; \QQ,\mathbb{Q}; \RR,\mathbb{R}; \CC,\mathbb{C}; \\xvec, x_1\\comma x_2\\comma\\ldots\\comma x_n;\\lxvec, x_1+x_2+\\cdots+x_n; \\lyvec, y_1+y_2+\\cdots+y_k; \\overrightarrow, \\begin{matrix}\\longrightarrow\\\\[-1ex]#1\\\\[-1ex]\\end{matrix}";
   var splitcommands = newcommands.split(";");
   for (var i = 0; i < splitcommands.length; i++) {
       var eachcommand=splitcommands[i].split(",");
       for (var j = 0; j< eachcommand.length; j++){eachcommand[j]=eachcommand[j].trim();
       
       
       //eachcommand[j]=eachcommand[j].replace("\ b","\b");
       if (i==7 && j == 1) {
       //eachcommand[j]=text.replace(/\\overrightarrow\{([\s\S]+?)\}/g, '\\begin{matrix}\\longrightarrow\\\\[-1ex]$1\\\\[-1ex]\\end{matrix}');
       
       var param=text.match(/\\overrightarrow\{(.*)\}/);
       console.log(param[1]);
       //console.log(test1.match((/\\overrightarrow\{([\s\S]+?)\}/g);
       //console.log(testing);
               //	console.log(eachcommand[j]);
       console.log(eachcommand[0]);			
       eachcommand[0]=eachcommand[0]+"\{"+param[1]+"\}";
       console.log(eachcommand[0]);
       eachcommand[1]=eachcommand[1].replace("#1",param[1]);
       //console.log(eachcommand[0]+" Â£ "+eachcommand[1]);
       //eachcommand[0]=eachcommand[0].replace(/\{([\s\S]+?)\}/g, '');
       //console.log(eachcommand[0]);
       }
       }
       //console.log(text);
       
       var regexp = new RegExp("\\"+eachcommand[0], "g");
       text=text.replace(regexp,eachcommand[1]);
       //console.log(regexp + " " + eachcommand[1]);
       text = text.replace(/\\comma/g,",")
       //text = text.replace(/\\\\/g,"\\")
       text=text.replace("\\\\b","\\b");
       //console.log(text);
       text=text.replace(/\\overrightarrow\{([\s\S]+?)\}/g, '\\begin{matrix}\\longrightarrow\\\\[-1ex]$1\\\\[-1ex]\\end{matrix}');

   } 
   return text;
}	
*/

function scrollresult() {
   if (document.getElementById("scrollme").checked==false) {
       document.getElementById("result").style.height="auto";
   } else {
       document.getElementById("result").style.height="400px";
   }
}

function showcolourorder() {
   var x = document.getElementById('colourorder');
   var y = document.getElementById('buttonorder');
   if (x.style.display === 'none') {
       x.style.display = 'inline';
       y.innerHTML = 'Hide';
   } else {
       x.style.display = 'none';
       y.innerHTML = 'Show';
   }
   }
   
function switchit() {
   toggle = document.getElementById("original").checked;
   if (toggle == false) {
       savedtext = document.getElementById("formula").value;
       document.getElementById("formula").value = document.getElementById("formula2").textContent;
       document.getElementById("formula").readOnly = true;
       document.getElementById("formula").style.backgroundColor = '#EBEBEB';
       document.getElementById("extra").readOnly = true;
       document.getElementById("extra").style.backgroundColor = 'gainsboro';
       document.getElementById("extra").style.opacity = 0.5;
       disable(true);
   } else {
       document.getElementById("formula").value = savedtext; //undoRender(document.getElementById("formula").value);
       document.getElementById("formula").readOnly = false;
       document.getElementById("formula").style.backgroundColor = '';
       document.getElementById("extra").readOnly = false;
       document.getElementById("extra").style.backgroundColor = '';
       document.getElementById("extra").style.backgroundColor = '';
       document.getElementById("extra").style.opacity = 1;
       savedtext = '';
       disable(false);
   }
}

function undoRender(txt) { //not used now 
   txt = txt.replace(/[$]+?/g, '\\$');
   txt = txt.replace(/<span class="maths">([\s\S]+?)<\/span>/g, '$$$1$$');
   txt = txt.replace(/<div class="maths">([\s\S]+?)<\/div>/g, '\\[$1\\]');
   return txt;
}    

 window.startup = function(){
document.getElementById("formula").addEventListener("keyup", function() {
   delimiters();
});
document.getElementById("answerA").addEventListener("keyup", function() {
   delimiters();
});
document.getElementById("answerB").addEventListener("keyup", function() {
   delimiters();
});
document.getElementById("answerC").addEventListener("keyup", function() {
   delimiters();
});
document.getElementById("answerD").addEventListener("keyup", function() {
   delimiters();
});


document.getElementById("extra").addEventListener("keyup", function() {
   delimiters();
});
};  

function doalign(textnum) {
extra = "{\\mkern" + document.getElementById("extra").value + "mu}";
textnum = textnum.replace(/\\begin\{align\}/g, '<number>');
textnum = textnum.replace(/\\end\{align\}/g, '</number>');
textnum = textnum.replace(/\\nonumber/g, '\\notag');

textnum = textnum.replace(/\\begin\{align\*\}/g, '<numberstar>');
textnum = textnum.replace(/\\end\{align\*\}/g, '</numberstar>');
document.getElementById("formula2").innerHTML = textnum;

tn = document.getElementById("formula2");

// keep track of equation numbers
eqno = 1;

// align 
numberlist = tn.getElementsByTagName("number");

// each align environment
for (var i = 0; i < numberlist.length; i++) {
   var sublist = numberlist[i].textContent;
   // get rid of  spaces in double line breaks
   sublist = sublist.replace(/\\\\([ ]+)\\\\/g,'\\\\\\\\');
   // put each line into an array
     var subarray = sublist.split('\\\\'); 
   // add some text to move numbers to right and on left to maintain centering
   subarray[0] = extra+subarray[0] + extra;
   // remove last line break
   subarray[subarray.length-1]=subarray[subarray.length-1].slice(0, -1);

   // check if line contains \notag, \tag, empty, last line
   // very messy but works!
     for (var j = 0; j < subarray.length; j++) {					  		
         if (subarray[j].indexOf('\\notag')==-1) {  // no \notag
             if (subarray[j].indexOf('\\tag')>-1) { // has \tag
                 v = subarray[j].match(new RegExp(/\\tag\{(.*)\}/));
                 if (j==0) {
                     subarray[j]=subarray[j].replace(extra,'');
                     v = subarray[j].match(new RegExp(/\\tag\{(.*)\}/));
                     subarray[j]=extra + subarray[j].replace(v[0], extra + ' & (' + v[1] + ')') + '\\\\';
                 } else {
                     subarray[j]=subarray[j].replace(v[0], ' & (' + v[1] + ')') + '\\\\';
                 }
             } else { // no \tag
                 if (subarray[j]==''){ // empty line
                     subarray[j]=subarray[j]+'\\\\';
                 } else {
                   subarray[j]=subarray[j]+' & (' + eqno + ')';
                   if  (j < subarray.length-1){ // not last line
                       subarray[j]=subarray[j]+ '\\\\';
                   }
                   eqno = eqno + 1;
               }
           }
       } else {
       subarray[j]=subarray[j].replace('\\notag','') + '\\\\';
   }
}			
   numberlist[i].textContent = '\n\\\[\n\\begin\{aligned\}' + subarray.join('') + '\n\\end\{aligned\}\n\\\]\n';
   
}


number2list = tn.getElementsByTagName("numberstar");
// each align* environment
for (var i = 0; i < number2list.length; i++) {
   var sub2list = number2list[i].textContent;
   // get rid of  spaces in line breaks
   sub2list = sub2list.replace(/\\\\([\s]+)\\\\/g,'\\\\\\\\');
   // put each line into an array
     var sub2array = sub2list.split('\\\\'); 
   // add some text to move numbers to right
   //sub2array[0] = sub2array[0] + extra;

     for (var j = 0; j < sub2array.length; j++) {
             if (sub2array[j].indexOf('\\tag')>-1) { // has \tag
                 v = sub2array[j].match(new RegExp(/\\tag\{(.*)\}/));
                 if (j==0) {
                     //sub2array[j]=sub2array[j].replace(extra,'');
                     v = sub2array[j].match(new RegExp(/\\tag\{(.*)\}/));
                     sub2array[j]=extra + sub2array[j].replace(v[0], extra + ' & (' + v[1] + ')') + '\\\\';
                 } else {
                     sub2array[j]=sub2array[j].replace(v[0], ' & (' + v[1] + ')') + '\\\\';
                 }
             } else { // no \tag
               sub2array[j]=sub2array[j]+'\\\\';
           }
   }
   number2list[i].textContent = '\n\\\[\n\\begin\{aligned\}' + sub2array.join('') + '\n\\end\{aligned\}\n\\\]\n';
}

 return tn.innerHTML;
}


