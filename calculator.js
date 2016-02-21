/*HW5_calculator of web2.0, qiangbo_14331229,group 11*/
/*the .js of the calculator*/

  
/*to act the input command*/
window.onload=function(){
    var if_equal_operate=0; 

	document.getElementById("command9").onclick=function(){command(9)};
	document.getElementById("command8").onclick=function(){command(8)};
	document.getElementById("command7").onclick=function(){command(7)};
	document.getElementById("command6").onclick=function(){command(6)};
	document.getElementById("command5").onclick=function(){command(5)};
	document.getElementById("command4").onclick=function(){command(4)};
	document.getElementById("command3").onclick=function(){command(3)};
	document.getElementById("command2").onclick=function(){command(2)};
	document.getElementById("command1").onclick=function(){command(1)};
	document.getElementById("command0").onclick=function(){command(0)};
	document.getElementById("command_doit").onclick=function(){command('.')};
	document.getElementById("command_add").onclick=function(){command('+')};
	document.getElementById("command_de").onclick=function(){command('-')};
	document.getElementById("command_sup").onclick=function(){command('*')};
	document.getElementById("command_div").onclick=function(){command('/')};
	document.getElementById("command_left").onclick=function(){command('(')};
	document.getElementById("command_right").onclick=function(){command(')')};

	document.getElementById("square").onclick=function(){square()};
	document.getElementById("cube").onclick=function(){cube()};
	document.getElementById("sqrt").onclick=function(){sqrt()};
	document.getElementById("absolute").onclick=function(){absolute()};
	document.getElementById("clearscreen").onclick=function(){clearscreen()};
	document.getElementById("factorial").onclick=function(){factorial()};
	document.getElementById("sinf").onclick=function(){sinf()};
	document.getElementById("cosf").onclick=function(){cosf()};
	document.getElementById("tanf").onclick=function(){tanf()};
	document.getElementById("del").onclick=function(){del()};
	document.getElementById("randomf").onclick=function(){randomf()};
	document.getElementById("logf").onclick=function(){logf()};
	document.getElementById("expf").onclick=function(){expf()};
	document.getElementById("roundf").onclick=function(){roundf()};
    
	function command(number){
	    var str=String(document.getElementById("var_storage").value);
		str=(str!="0") ? ((if_equal_operate==0) ? str : str) : "0";
		str=str + String(number);
		if (str[0] == '0'&&(str[1] == '.'||
			str[1] == '+'||
			str[1] == '-'||
			str[1] == '*'||
			str[1] == '/')) {
		    document.getElementById("var_storage").value= str;
		} else if (str[0] == '0'){
			document.getElementById("var_storage").value=str.substr(1,str.length);
		} else {
			 document.getElementById("var_storage").value= str;
			}		 
		if_equal_operate=0;
	} 

	/*there are some the function to calculator the number*/
	function square() {
		document.calculator.var_storage.value = eval("document.calculator.var_storage.value"
		 + "*" + "document.calculator.var_storage.value");
	}

	function cube() {
		document.calculator.var_storage.value = eval("document.calculator.var_storage.value"
		 + "*" + "document.calculator.var_storage.value"
		 + "*" + "document.calculator.var_storage.value");
	}

	function sqrt() {
		document.calculator.var_storage.value = Math.sqrt( eval("document.calculator.var_storage.value"));
	}

	function absolute() {
		document.calculator.var_storage.value = Math.abs( eval("document.calculator.var_storage.value"));
	}

	function factorial() {
		var number = eval("document.calculator.var_storage.value");
		var add = 1;
		for (var i = 1; i <= number; i++) {
	        add = add * i;
		}
		document.calculator.var_storage.value = add;
	}

	function del(){
		var str=String(document.calculator.var_storage.value); 
		str=(str!="0") ? str : ""; 
		str=str.substr(0,str.length-1); 
		str=(str!="") ? str : "0"; 
		document.calculator.var_storage.value=str; 
	}

	function sinf() {
		document.calculator.var_storage.value = Math.sin( eval("document.calculator.var_storage.value"));
	}

	function cosf() {
		document.calculator.var_storage.value = Math.cos( eval("document.calculator.var_storage.value"));
	}

	function tanf() {
		document.calculator.var_storage.value = Math.tan( eval("document.calculator.var_storage.value"));
	}

	function expf() {
		document.calculator.var_storage.value = Math.exp( eval("document.calculator.var_storage.value"));
	}

	function logf() {
		document.calculator.var_storage.value = Math.log( eval("document.calculator.var_storage.value"));
	}

	function randomf() {
		document.calculator.var_storage.value = Math.random();
	}

	function roundf() {
		document.calculator.var_storage.value = Math.round( eval("document.calculator.var_storage.value"));
	}

	function clearscreen(){
	document.calculator.var_storage.value="0"; 
	} 

	document.getElementById("equal").onclick =  function() {
	if_equal_operate=1; 

    var str=String(document.calculator.var_storage.value); 
    try {
        for (var i = 0; i < str.length - 1; i++) {
         	if (str[i] == '/'&&str[i+1] == '/'||
                str[i] == '+'&&str[i+1] == '-'||
                str[i] == '-'&&str[i+1] == '-'||
                str[i] == '*'&&str[i+1] == '-'||
                str[i] == '/'&&str[i+1] == '-'
         		) {
         		document.calculator.var_storage.value = 0;
         		throw "Expression Error!Please try again...";
         	}
        }
    }
    catch(exception) {
	    alert(exception);
	}

   	try  {
	    if (eval(document.calculator.var_storage.value));
	    }

	catch(exception) {
	    alert(exception);
	    }

	var ss = document.calculator.var_storage.value;
	document.calculator.var_storage.value=parseFloat(eval(ss).toFixed(8));
}

};

	