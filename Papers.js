<script>
	function fillCircle()
	{
	  var canvas = document.getElementById("canvas2");
	  var context = canvas.getContext("2d");
	  context.beginPath();
	  context.fillStyle="#FF4422"
	  context.arc(80, 80, 70, 0, 2 * Math.PI);
	  context.fill();
	}
	fillCircle(); 
</script>
