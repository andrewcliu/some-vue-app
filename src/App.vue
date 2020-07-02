<template>
		<div>
			<Navbar/>
		  <div class="container">
		  	<!-- this is where our routes would come in -->
		  	<!-- THREE -->
		  	<router-view/>
		  </div>
	 </div>
</template>

<script>
import Navbar from './components/Navbar';
import '../node_modules/materialize-css/dist/css/materialize.min.css'; 
import '../node_modules/materialize-css/dist/js/materialize.min.js'; 

// after adding Navbar in the components, add into template

export default {
  name: 'App',
  components:{
  	Navbar
  }
}
</script>
