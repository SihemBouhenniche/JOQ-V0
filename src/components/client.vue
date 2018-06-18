<template >
<div v-if="principal">
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark nav-page">
      <a class="navbar-brand brand" href="#app">JOQ</a>
    </nav>
	<div class="container-fluid container-page">
		<br><br><br><br><br>
  		<div class="tab-content cadre container-page1" id="nav-tabContent ">
   			<div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" aria-expanded="true">
	       		<br><br><br>
	      		<h1 >Welcome Back</h1>
	      		<form  class ="form-style" style="padding-top: 0px;">
		  			<div class="form-group">
		    			<label for="email">ID</label>
		   	    		<input type="email" class="form-control" placeholder="Enter ID" id="id">
		  			</div>
		  			<div class="form-group">
		   	   	    	<label for="pwd">Password</label>
		   	    		<input type="password" class="form-control" placeholder="Enter password" id="pwd">
		 	 		</div>
		  			<div class="form-group form-check">
		   				<label class="form-check-label">
		      				<input class="form-check-input" type="checkbox"> Remember me
		    			</label>
		  			</div>
		  			<div class="form-group">
			 			<a href="#" v-on:click="forgotPwd"> Forgot your password?</a>
			 			<a href="#" style="float: right;"  v-on:click="Signin"> Not a member?</a>
			 		</div>
		  			<button type="submit" class="btn btn-info">Sign In</button>
		 		</form>
   	 		</div>
   	 		<div class="tab-pane fade " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" aria-expanded="false">
     			<br><br><br>
      			<h1 >Welcome Back</h1>
      			<form  class ="form-style" style="padding-top: 0px;">
  					<div class="form-group">
    					<label for="email">Email</label>
   	    				<input type="email" class="form-control" placeholder="Enter email" id="email">
  					</div>
  					<div class="form-group">
   	   	    			<label for="pwd">Password</label>
   	    				<input type="password" class="form-control" placeholder="Enter password" id="password">
 	 				</div>
  					<div class="form-group form-check">
   						<label class="form-check-label">
      						<input class="form-check-input" type="checkbox"> Remember me
    					</label>
  					</div>
  					<div class="form-group">
	 					<a href="#" :click="forgotPwd"> Forgot your password?</a>
	 					<a href="#" style="float: right;" :click="Signin"> Not a member?</a>
	 				</div>
  					<button type="submit" class="btn btn-info">Sign In</button>
	 			</form>
	 		</div>
	 	</div>
  		<nav class="nav nav-tabs cadre-nav container-page2" id="nav-tab" role="tablist">
    		<a class="nav-item nav-link active border1" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="home" aria-expanded="true">Entreprise</a>
    		<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="profile" aria-expanded="false">Individual</a>   
 		</nav>
	</div>
 </div>

<div v-if="pwdoublie">
	<forgotpwd></forgotpwd>
</div>

<div v-if="sign">
	<signinfree></signinfree>
</div>

</template>
<script >
	import Forgotpwd from './Forgotpwd'
  	import Signinfree from './Signinfree'
	export default{
		props : {
			pwdoublie : {
				type : Boolean,
				default : false
			},
			sign: {
				type : Boolean,
				default : false
			},
			principal : {
				type : Boolean,
				default : true
			}
		},
		components:{
			Forgotpwd,
			Signinfree
		},
		methods:{
			Signin(){
				console.log('siiisi')
				this.principal=false,
				this.sign=true
			},
			forgotPwd(){
				console.log(this.pwdoublie)
				this.principal=false,
				this.pwdoublie=true
			}
		}

	}
</script>
<style scoped>
.nav-page{
    font-family: 'Oswald', sans-serif;
    font-size: 1.3em;
  }
  .brand{
    letter-spacing: 2px;
    font-size: 1.5em;
    font-weight: 700;
  }
.cadre{
	position: absolute;
	left:300px;
	width: 800px;
	border:solid 1px #b4b7ba;
	border-radius: 20px;
}
.cadre-nav{
	position: absolute;
	left:300px;
	width: 800px;
	
}
/*.border1{
	border-top:solid 1px #b4b7ba;
	border-left:solid 1px #b4b7ba;
	border-right: solid 1px #b4b7ba;
	border-radius: 5px;
}*/

.form-style{

	padding: 40px;
	padding-top: 100px;

	
}
.container-page{
	background-color: #f0ede5;
	min-height: 100vh;
	overflow: hidden;
}
.container-page1{
	background-color: #ffffff;
	overflow: hidden;

}
.container-page2{
	background-color: #f0ede5;

}

h1{
	text-align: center;
	font-family: 'Oswald', sans-serif;
	color: #17a2b8;

}

label{
	font-family: 'Oswald', sans-serif;
}
a{
	font-family: 'Oswald', sans-serif;
}
</style>


