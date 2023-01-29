// START JQUERY

$(document).ready(function(){

	// Start Header

		// start navbar
		$('.navbuttons').click(function(){
			$(this).toggleClass('crossxs');
		});
		// end navbar


	// End Header

	// Start Login Box 
  $('.open-btn').click(function(){
    document.getElementById('form-popup').style.display ="block";
  });

  $("#formclose-btn").click(function(){
    document.getElementById('form-popup').style.display = "none";
  });
  // End Login Box 



});

// END JQUERY




// START JAVASCRIPT

// Start Student Counter Section
const getctvalues = document.querySelectorAll('.countervalues');

getctvalues.forEach(function(getctvalue){
	// console.log(getctvalue);

	getctvalue.innerHTML = '0';

	const update = function(){
		const getcttarget = +getctvalue.getAttribute('data-target');
		// console.log(getcttarget,typeof getcttarget);

		const getctcontent = +getctvalue.innerText;
		// console.log(getctcontent,typeof getctcontent);

		const incvalue = getcttarget / 100;
		// console.log(incvalue);

		if(getctcontent < getcttarget){
			getctvalue.innerHTML = getctcontent + incvalue;
		}
		// console.log(getctvalue);

		setTimeout(update,50);

	}

	update();
});

// End Student Counter Section


// Start Rating Section

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Srilanka',    8]
        ]);

        var options = {
          title: 'Internation Students',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
// End Rating Section


// Start Footer Section
const getyear = document.getElementById('getyear');

getyear.textContent = new Date().getUTCFullYear();
// End Footer Section

// END JAVASCRIPT
