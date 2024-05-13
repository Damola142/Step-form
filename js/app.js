totalVal = "" ;


function toStepTwo () {
	dName = document.querySelector ("input#name") ;
	dEmail = document.querySelector ("input#email") ;
	dNumber = document.querySelector ("input#number") ;
	
	msg1 = document.querySelector ("div.label span.m1") ;
	msg2 = document.querySelector ("div.label span.m2") ;
	msg3 = document.querySelector ("div.label span.m3") ;
	

	if (dName.value.length > 0) {
		if (dEmail.value.length > 0) {
			if (dNumber.value.length > 0) {
				toNextStep () ;
			} else {}
		} else {}
	} else {}
	
	
	requiredField (dName, msg1) ;
	requiredField (dEmail, msg2) ;
	requiredField (dNumber, msg3) ;
}


function requiredField (a, b) {
	if (a.value.length === 0) {
		b.style.display = "block" ;
		a.style.border = "1.5px solid var(--strawberryRed)" ;
	} else{}
}



function inputFocus (a, b) {
	a.style.display = "none" ;
	b.style.border = "1.5px solid var(--purplishBlue)" ;
	
	b.addEventListener ('blur', function(){
		b.style.border = "1.5px solid var(--lightGray)" ;
	});
	
}



function selectPlan (a) {
	oldSelected = document.querySelector ("div#selectedPlan") ;
	
	oldSelected.removeAttribute ("id", "selectedPlan") ;
	
	setTimeout (function () {
		a.setAttribute ("id", "selectedPlan") ;
	}, 10) ;
}



selectedPlanDur = "monthly" ;


function selectPlanDuration (a) {
	selectedPlanDuration = document.querySelector ("span#selectedPlanDuration") ;
	
	arcade = document.querySelector ("div.plans div.plan:nth-of-type(1) div span:nth-of-type(2)") ;
	advanced = document.querySelector ("div.plans div.plan:nth-of-type(2) div span:nth-of-type(2)") ;
	pro = document.querySelector ("div.plans div.plan:nth-of-type(3) div span:nth-of-type(2)") ;
	
	freeInfoI = document.querySelector ("span.freeInfoI") ;
	freeInfoII = document.querySelector ("span.freeInfoII") ;
	freeInfoIII = document.querySelector ("span.freeInfoIII") ;
	
	divPlanDivI = document.querySelector ("div.divPlanDivI") ;
	divPlanDivII = document.querySelector ("div.divPlanDivII") ;
	divPlanDivIII = document.querySelector ("div.divPlanDivIII") ;
	
	addOn1 = document.querySelector ("div.add-on:nth-of-type(1) span.add-onVal") ;
	addOn2 = document.querySelector ("div.add-on:nth-of-type(2) span.add-onVal") ;
	addOn3 = document.querySelector ("div.add-on:nth-of-type(3) span.add-onVal") ;

	
	selectedPlanDuration.removeAttribute ("id", "selectedPlanDuration") ;
	
	setTimeout (function () {
		a.setAttribute ("id", "selectedPlanDuration") ;
	}), 10 ;
	
	
	switchBox = document.querySelector ("div.switchMoYr span:nth-of-type(2) span") ;
	
	if (selectedPlanDur === "monthly") {
		selectedPlanDur = "yearly" ;
		switchBox.style.margin = "0 0 0 1.06rem" ;
		
		arcade.textContent = "$90/yr" ;
		advanced.textContent = "$120/yr" ;
		pro.textContent = "$150/yr" ;
		
		freeInfoI.style.display = "block" ;
		freeInfoII.style.display = "block" ;
		freeInfoIII.style.display = "block" ;
		
		divPlanDivI.style.height = "3.7rem" ;
		divPlanDivII.style.height = "3.7rem" ;
		divPlanDivIII.style.height = "3.7rem" ;
		
		addOn1.textContent = "+$10/yr" ;
		addOn2.textContent = "+$20/yr" ;
		addOn3.textContent = "+$20/yr" ;
		
		document.querySelector ("div.total span:nth-of-type(1)").textContent = "Total (per year)" ;
		
	} else {
		selectedPlanDur = "monthly" ;
		switchBox.style.margin = "0" ;
		
		arcade.textContent = "$9/mo" ;
		advanced.textContent = "$12/mo" ;
		pro.textContent = "$15/mo" ;
		
		freeInfoI.style.display = "none" ;
		freeInfoII.style.display = "none" ;
		freeInfoIII.style.display = "none" ;
		
		divPlanDivI.style.height = "2.4rem" ;
		divPlanDivII.style.height = "2.4rem" ;
		divPlanDivIII.style.height = "2.4rem" ;
		
		addOn1.textContent = "+$1/mo" ;
		addOn2.textContent = "+$2/mo" ;
		addOn3.textContent = "+$2/mo" ;
		
		document.querySelector ("div.total span:nth-of-type(1)").textContent = "Total (per month)" ;
	}
}


totalAdd = 0 ;

function pickAddOn (a) {	
	order = a.getAttribute ("order") ;
	divSumm = document.querySelector ("div.summ") ;
	rName = document.querySelector (`span.name${order}`).textContent ;
	rVal = document.querySelector (`span#val${order}`).textContent ;
	val = document.querySelector (`span#${a.getAttribute ("value")}`).textContent.substr (2, 1) ;
	
	if (selectedPlanDur === "monthly") {
		val = val ;
	} else {
		val = val * 10 ;
	}

	if (a.getAttribute ("id") === "picked") {
		a.removeAttribute ("id", "picked") ;
		
		addOn = document.querySelector (`div.addOn${order}`) ;
		
		addOn.remove () ;
		
		totalAdd = (totalAdd * 1) - (val * 1) ;
		
	} else {
		a.setAttribute ("id", "picked") ;
		
		const addOn = document.createElement ("div") ;
		addOn.setAttribute ("class", `addOn${order}`) ;
		
			const addOnName = document.createElement ("span") ;
			addOnName.textContent = rName ;
			addOn.appendChild (addOnName) ;
			
			const addOnVal = document.createElement ("span") ;
			addOnVal.setAttribute ("class", `val${order}`) ;
			addOnVal.textContent = rVal ;
			addOn.appendChild (addOnVal) ;
		
		divSumm.appendChild (addOn) ;
		
		totalAdd = (totalAdd * 1) + (val * 1) ;
		
		
	}
	
		
	if (selectedPlanDur === "monthly") {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/mo` ;
	} else {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/yr` ;
	}
	
}




step = 1 ;


function initialStep () {
	initialStepP = document.querySelector (`div#step${step}`) ;
	initialStepSh = document.querySelector ("span#presentStep") ;
	
	initialStepP.style.display = "none" ;
	initialStepSh.removeAttribute ("id", 'presentStep') ;	
}


function newStep () {
	newStepP = document.querySelector (`div#step${step}`) ;
	newStepSh = document.querySelector (`span.step${step}`) ;
	
	newStepP.style.display = "block" ;
	newStepSh.setAttribute ("id", "presentStep") ;
}


totalAddOn = 0 ;

function toNextStep (a) {
	initialStep () ;
	
	setTimeout (function () {
		step = (step * 1) + 1 ;
		
		newStep () ;
	}), 10 ;



	planName = document.querySelector ("div#selectedPlan div span:nth-of-type(1)").textContent ;
	planNameVw = document.querySelector ("div.st div span:nth-of-type(1)") ;
	planVal = document.querySelector ("div#selectedPlan div span:nth-of-type(2)").textContent ;
	planValVw = document.querySelector ("div.summ div div + span ") ;
	
	
	planValVw.textContent = planVal ;
	
	if (selectedPlanDur === "monthly") {
		planNameVw.textContent = `${planName} (Monthly)` ;
	} else {
		planNameVw.textContent = `${planName} (Yearly)` ;
	}
	
	
	
	if (a.getAttribute ("id") === "step2") {
		if (document.querySelector ("div.st div span:first-child").textContent.substr (0, 7) === "Archade") {
			totalVal = document.querySelector ("div.st span.val").textContent.substr (1,1) ;		
		} else {
			totalVal = document.querySelector ("div.st span.val").textContent.substr (1,2) ;
		}
		
		
		if (selectedPlanDur === "monthly") {
			totalVal = totalVal ;
		} else {
			totalVal = totalVal * 10 ;
		}
		
	} else {}
	
		
	if (a.id === "step3") {	
		totalAddOn = totalAdd * 1 ;	
		
		totalVal = (totalVal * 1) + (totalAddOn * 1) ;
	} else {}
	
	
	if (selectedPlanDur === "monthly") {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/mo` ;
	} else {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/yr` ;
	}
	
}


function toPreviousStep (a) {
	initialStep () ;
	
	setTimeout (function () {
		step = (step * 1) - 1 ;
		
		newStep () ;
	}), 10 ;
	
	
	if (a.id === "step44") {
		totalVal = (totalVal * 1) - (totalAddOn * 1) ;
		
		setTimeout (function () {
			totalAddOn = 0 ;
		}), 10 ;
	} else {}
	
	
	if (a.id === "step33") {
		totalVal = 0 ;
		
		document.querySelector ("#picked").removeAttribute ("id", "picked") ;
		
		setTimeout (function () {
			document.querySelector ("#picked").removeAttribute ("id", "picked") ;
		}), 10 ;
		
		setTimeout (function () {
			document.querySelector ("#picked").removeAttribute ("id", "picked") ;
		}), 10 ;
		
		document.querySelector (".addOn3").remove () ;
		document.querySelector (".addOn2").remove () ;
		document.querySelector (".addOn1").remove () ;
		
		
		totalAdd = 0 ;
	} else {}
	
	
	
	if (selectedPlanDur === "monthly") {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/mo` ;
	} else {
		document.querySelector ("div.total span:nth-of-type(2)").textContent = `+$${totalVal}/yr` ;
	}
	
}


function confirm () {
	document.querySelector (".thankYou").style.display = "block" ;
	document.querySelector ("#step4").style.display = "none" ;
}


function check () {
	document.write (totalVal)
}