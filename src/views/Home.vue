 
<template>
  <body>
  <div class="image-one">
    <div class="caption">
      <div>SUPER FROG</div>
      <div>Request SuperFrog for your day!</div>
    </div>
  </div>
  <div class="between">
    <div class="container center">
      <div class="row">
        <div class="col-sm p-4">
          
          <div class="h1 text-uppercase font-weight-bold ">Pricing</div>
          <div>
              ALL appearances are paid. Prices are based on a 1 hour appearance;
          </div>
          <RouterLink to="/price">View Pricing</RouterLink>
        </div>
        <div class="col-sm p-4">
           
          <div class="h1 text-uppercase font-weight-bold">Range</div>
          <div>We only service requests that are within 100 mile radius from Amon G. Carter Stadium.</div>
        </div>
        <div class="col-sm p-4">
          
          <div class="h1 text-uppercase font-weight-bold">Request</div>
          <div>Request TCU Spirit from a calendar of available dates.</div>
          <RouterLink to="/request">Request Now!</RouterLink>
        </div>
  </div>
</div>
    </div>
  <div class="image-two">
  </div>
  <div class="between">
    <div class=" container center p-5">
        <div>ABOUT US</div>
        <hr>
        <div>One of the most unique mascots in college sports, you can find SuperFrog at TCU football, basketball, baseball games and other TCU events! Have Super Frog be a part of your event by clicking “SuperFrog Appearance Request” & “Appearance Terms and Conditions” under Important Links. You can keep up with SuperFrog by following him on his Twitter and Instagram accounts through the respective links on the right of this page.</div>

    </div>
  </div>
  <div class="image-three"></div>
</body>
</template>

<script>
export default {
}
</script>

<style>
 * {
  margin: 0;
  padding: 0;
}
body {
  font-family: poppins, sans-serif;
  height: 100%;
}
.icons{
    width: 90px; 
    margin-bottom: 30px;
}
.image-one,
.image-two,
.image-three {
  position: relative;
  opacity: 0.80;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.image-one {
  background-image: url(../assets/images/frog_bg1.jpeg);
  min-height: 800px;
}
.image-two {
  background-image: url(../assets/images/frog_bg2.jpg);
  min-height: 500px;
}
.image-three {
  background-image: url(../assets/images/frog_bg3.jpeg);
  min-height: 600px;
}
.caption {
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  text-align: center;
}
.caption div {
  padding: 5px 30px;
  color: lavenderblush;
  font-size: 3rem;
  font-weight: bold;
}
.caption div:nth-child(2){
    font-size:1.5rem;
}
.between {
    position: relative; 
  text-align: center;
  padding: 3.5rem;
  line-height: 1.8;
  height: 60vh;
}
.center{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%); 
}

</style>