const file = document.querySelector("#file")
const download=document.getElementById("download")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#img").src = reader.result;
     var original = reader.result;
  })
  reader.readAsDataURL(this.files[0]);
})
var image = document.querySelector('img');
		var filterControls = document.querySelectorAll('input[type=range]');
    
		function applyFilter() {
			var computedFilters = '';
			filterControls.forEach(function(item, index) {
				computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
			});
			image.style.filter = computedFilters;
      
		};
    const reader = new FileReader(); 
reader.addEventListener('load', () => {
    image.src = reader.result; 
    originalData = reader.result;
});

    
    function originalData()
    {
      document.querySelector("#img").src = original;
    }
    function upload()
    {
      var def=document.querySelector("#img")
    }
    function refresh()
    {
      
      document.getElementsById("blur").value=document.getElementById("blur").defaultValue;
      var image = document.querySelector('img');
      applyFilter();
      console.log(document.getElementsById("blur").value);
      
      
    }
    