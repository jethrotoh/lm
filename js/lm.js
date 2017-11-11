/*============================Speed Up================================*/
function SpeedUpConverter1min(valNum) {
  	document.getElementById("output1min").value = (valNum * 1) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter3min(valNum) {
  	document.getElementById("output3min").value = (valNum * 3) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter5min(valNum) {
  	document.getElementById("output5min").value = (valNum * 5) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter10min(valNum) {
  	document.getElementById("output10min").value = (valNum * 10) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter15min(valNum) {
  	document.getElementById("output15min").value = (valNum * 15) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter30min(valNum) {
  	document.getElementById("output30min").value = (valNum * 30) / 60;
  	totalSpeedUp();
}

function SpeedUpConverter60min(valNum) {
  	document.getElementById("output60min").value = valNum;
  	totalSpeedUp();
}

function SpeedUpConverter3hr(valNum) {
  	document.getElementById("output3hr").value = valNum * 3;
  	totalSpeedUp();
}

function SpeedUpConverter8hr(valNum) {
  	document.getElementById("output8hr").value = valNum * 8;
  	totalSpeedUp();
}

function SpeedUpConverter15hr(valNum) {
  	document.getElementById("output15hr").value = valNum * 15;
  	totalSpeedUp();
}

function SpeedUpConverter24hr(valNum) {
  	document.getElementById("output24hr").value = valNum * 24;
  	totalSpeedUp();
}

function SpeedUpConverter3d(valNum) {
  	document.getElementById("output3d").value = valNum * 3;
  	totalSpeedUp();
}

function SpeedUpConverter7d(valNum) {
  	document.getElementById("output7d").value = valNum * 7;
  	totalSpeedUp();
}

function SpeedUpConverter30d(valNum) {
  	document.getElementById("output30d").value = valNum * 30;
  	totalSpeedUp();
}
/* Add all Speed up together*/
function totalSpeedUp() {
	var min1 = document.getElementById("output1min").value;
	var min3 = document.getElementById("output3min").value;
	var min5 = document.getElementById("output5min").value;
	var min10 = document.getElementById("output10min").value;
	var min15 = document.getElementById("output15min").value;
	var min30 = document.getElementById("output30min").value;
	var min60 = document.getElementById("output60min").value;
	var hr3 = document.getElementById("output3hr").value;
	var hr8 = document.getElementById("output8hr").value;
	var hr15 = document.getElementById("output15hr").value;
	var hr24 = document.getElementById("output24hr").value;
	var d3 = document.getElementById("output3d").value;
	var d7 = document.getElementById("output7d").value;
	var d30 = document.getElementById("output30d").value;

   	if (min1 == "")
   		min1 = 0;
   	if (min3 == "")
   		min3 = 0;
   	if (min5 == "")
   		min5 = 0;
   	if (min10 == "")
   		min10 = 0;
   	if (min15 == "")
   		min15 = 0;
   	if (min30 == "")
   		min30 = 0;
   	if (min60 == "")
   		min60 = 0;
   	if (hr3 == "")
   		hr3 = 0;
   	if (hr8 == "")
   		hr8 = 0;
   	if (hr15 == "")
   		hr15 = 0;
   	if (hr24 == "")
   		hr24 = 0;
   	if (d3 == "")
   		d3 = 0;
   	if (d7 == "")
   		d7 = 0;
   	if (d30 == "")
   		d30 = 0;

   	var totalHours = parseFloat(min1) + parseFloat(min3) + parseFloat(min5) + parseFloat(min10) + parseFloat(min15) + parseFloat(min30) + parseFloat(min60) 
   					+ parseFloat(hr3) + parseFloat(hr8) + parseFloat(hr15) + parseFloat(hr24);
   	var totalDays = (totalHours / 24) + parseFloat(d3) + parseFloat(d7) + parseFloat(d30);

   	if (!isNaN(totalDays)){
   		document.getElementById("outputTotalSpeedUp").value = totalDays;
   	}
}

/*=========================End of Speed Up============================*/

/*=====================Research Speed Up==============================*/
function SpeedUpConverterR5min(valNum) {
    document.getElementById("outputR5min").value = (valNum * 5) / 60;
    totalResearchSpeedUp();
}

function SpeedUpConverterR10min(valNum) {
    document.getElementById("outputR10min").value = (valNum * 10) / 60;
    totalResearchSpeedUp();
}

function SpeedUpConverterR15min(valNum) {
    document.getElementById("outputR15min").value = (valNum * 15) / 60;
    totalResearchSpeedUp();
}

function SpeedUpConverterR30min(valNum) {
    document.getElementById("outputR30min").value = (valNum * 30) / 60;
    totalResearchSpeedUp();
}

function SpeedUpConverterR60min(valNum) {
    document.getElementById("outputR60min").value = valNum;
    totalResearchSpeedUp();
}

function SpeedUpConverterR3hr(valNum) {
    document.getElementById("outputR3hr").value = valNum * 3;
    totalResearchSpeedUp();
}

function SpeedUpConverterR8hr(valNum) {
    document.getElementById("outputR8hr").value = valNum * 8;
    totalResearchSpeedUp();
}

function SpeedUpConverterR15hr(valNum) {
    document.getElementById("outputR15hr").value = valNum * 15;
    totalResearchSpeedUp();
}

function SpeedUpConverterR24hr(valNum) {
    document.getElementById("outputR24hr").value = valNum * 24;
    totalResearchSpeedUp();
}

function SpeedUpConverterR3d(valNum) {
    document.getElementById("outputR3d").value = valNum * 3;
    totalResearchSpeedUp();
}

function SpeedUpConverterR7d(valNum) {
    document.getElementById("outputR7d").value = valNum * 7;
    totalResearchSpeedUp();
}

function SpeedUpConverterR30d(valNum) {
    document.getElementById("outputR30d").value = valNum * 30;
    totalResearchSpeedUp();
}
/* Add all Speed up together*/
function totalResearchSpeedUp() {
  var minR5 = document.getElementById("outputR5min").value;
  var minR10 = document.getElementById("outputR10min").value;
  var minR15 = document.getElementById("outputR15min").value;
  var minR30 = document.getElementById("outputR30min").value;
  var minR60 = document.getElementById("outputR60min").value;
  var hrR3 = document.getElementById("outputR3hr").value;
  var hrR8 = document.getElementById("outputR8hr").value;
  var hrR15 = document.getElementById("outputR15hr").value;
  var hrR24 = document.getElementById("outputR24hr").value;
  var dR3 = document.getElementById("outputR3d").value;
  var dR7 = document.getElementById("outputR7d").value;
  var dR30 = document.getElementById("outputR30d").value;

    if (minR5 == "")
      minR5 = 0;
    if (minR10 == "")
      minR10 = 0;
    if (minR15 == "")
      minR15 = 0;
    if (minR30 == "")
      minR30 = 0;
    if (minR60 == "")
      minR60 = 0;
    if (hrR3 == "")
      hrR3 = 0;
    if (hrR8 == "")
      hrR8 = 0;
    if (hrR15 == "")
      hrR15 = 0;
    if (hrR24 == "")
      hrR24 = 0;
    if (dR3 == "")
      dR3 = 0;
    if (dR7 == "")
      dR7 = 0;
    if (dR30 == "")
      dR30 = 0;

    var totalRHours = parseFloat(minR5) + parseFloat(minR10) + parseFloat(minR15) + parseFloat(minR30)
                    + parseFloat(minR60) + parseFloat(hrR3) + parseFloat(hrR8) + parseFloat(hrR15) + parseFloat(hrR24);
    var totalRDays = (totalRHours / 24) + parseFloat(dR3) + parseFloat(dR7) + parseFloat(dR30);

    if (!isNaN(totalRDays)){
      document.getElementById("outputTotalRSpeedUp").value = totalRDays;
    }
}