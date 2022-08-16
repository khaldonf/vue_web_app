<script >
export default {
  data(){
    return{
       nav_menu_pressed : false,
       open: false,
    }
  },

  

  created() {
    window.addEventListener("click", this.close);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  
  methods:{
    menuFocus(){       
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {
          this.nav_menu_pressed = !this.nav_menu_pressed   
          if (this.nav_menu_pressed) {            
            setTimeout(() => {
              this.$refs.nav_elements.classList.add("opened")             
              },50)            
          }else{
            setTimeout(() => {
              this.$refs.nav_elements.classList.remove("opened")
            }, 50)
            console.log(this.$refs.nav_elements.classList.value)      
            }
      }
    },

    home_clicked() {     
      this.nav_menu_pressed = true
      this.menuFocus()
    },

    metal_flex_hose_hovered(){
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.metal_flex_hose_list.style.opacity = "1"
      this.$refs.metal_flex_hose_list.style.visibility = "visible"
      this.$refs.metal_flex_hose_list.style.marginTop = "5px"
        this.$refs.metal_flex_hose.style.color = "#de0000"
      }
    },

    metal_flex_hose_leaved(){
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.metal_flex_hose_list.style.opacity = "0"
      this.$refs.metal_flex_hose_list.style.visibility = "hidden"
      this.$refs.metal_flex_hose.style.color = "white"
      } 
    },

    expansion_joints_hovered() {
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.expansion_joints_list.style.opacity = "1"
      this.$refs.expansion_joints_list.style.visibility = "visible"
      this.$refs.expansion_joints_list.style.marginTop = "5px"
      }
    },

    expansion_joints_leaved() {
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.expansion_joints_list.style.opacity = "0"
      this.$refs.expansion_joints_list.style.visibility = "hidden"
      this.$refs.expansion_joints.style.color = "white"
      }
    },

    flexible_hose_machine_hovered() {
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.flexible_hose_machine_list.style.opacity = "1"
      this.$refs.flexible_hose_machine_list.style.visibility = "visible"
      this.$refs.flexible_hose_machine_list.style.marginTop = "5px"
      }
    },

    flexible_hose_machine_leaved() {
      let x = window.matchMedia("(min-width: 900px)")
      if (x.matches) {
      this.$refs.flexible_hose_machine_list.style.opacity = "0"
      this.$refs.flexible_hose_machine_list.style.visibility = "hidden"
        this.$refs.flexible_hose_machine.style.color = "white"
      }
    },

    metal_flex_hose_clicked() {
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches){
        this.$refs.nav_menu_pressed = false       
          this.$refs.navbar.appendChild(this.$refs.metal_flex_hose_list)
        setTimeout(() => {
          this.$refs.metal_flex_hose_list.classList.add("metal_flex_hose_list_opened")
        }, 50)         
          this.menuFocus()
      }
    },

    expansion_joints_clicked() {
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {
        this.$refs.nav_elements_pressed = false
        this.$refs.navbar.appendChild(this.$refs.expansion_joints_list)
        setTimeout(() => {
          this.$refs.expansion_joints_list.classList.add("expansion_joints_list_opened")
        }, 50)     
        this.menuFocus()
      }
    },

    flexible_hose_machine_clicked() {
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {
        this.$refs.nav_elements_pressed = false
        this.$refs.navbar.appendChild(this.$refs.flexible_hose_machine_list)
        setTimeout(() => {
          this.$refs.flexible_hose_machine_list.classList.add("flexible_hose_machine_list_opened")
        }, 50)
        this.menuFocus()
      }
    },

    metalFlexHoseBackArrow(){
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {                
        setTimeout(() => {
          this.$refs.metal_flex_hose_list.classList.remove("metal_flex_hose_list_opened")
        }, 50) 
        this.$refs.nav_menu_pressed = false
          this.menuFocus()
      }
    },

    expansionJointsBackArrow() {
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {
        setTimeout(() => {
          this.$refs.expansion_joints_list.classList.remove("expansion_joints_list_opened")
        }, 50) 
        this.$refs.nav_elements_pressed = true
        this.menuFocus()
      }
    },

    flexibleHoseMachineBackArrow() {
      let x = window.matchMedia("(max-width: 900px)")
      if (x.matches) {
        setTimeout(() => {
          this.$refs.flexible_hose_machine_list.classList.remove("flexible_hose_machine_list_opened")
        }, 50)      
        this.$refs.nav_elements_pressed = true
        this.menuFocus()
      }
    },

    metal_flex_hose_list_clicked(){
      setTimeout(() => {
        this.$refs.metal_flex_hose_list.classList.remove("metal_flex_hose_list_opened")
      }, 50) 
      this.metal_flex_hose_leaved()
    },

    expansion_joints_list_clicked() {
      setTimeout(() => {
        this.$refs.expansion_joints_list.classList.remove("expansion_joints_list_opened")
      }, 50)
      this.expansion_joints_leaved()
    },

    flexible_hose_machine_list_clicked() {
      setTimeout(() => {
        this.$refs.flexible_hose_machine_list.classList.remove("flexible_hose_machine_list_opened")
      }, 50)
      this.flexible_hose_machine_leaved()
    },

    close(e) {
      if ((!this.$refs.nav_elements.contains(e.target)) && (!this.$refs.nav_menu.contains(e.target)) && (!this.$refs.metal_flex_hose_list.contains(e.target)) && (!this.$refs.expansion_joints_list.contains(e.target)) && (!this.$refs.flexible_hose_machine_list.contains(e.target))) {
      
        this.nav_menu_pressed = true
        this.menuFocus()
        setTimeout(() => {
          this.$refs.metal_flex_hose_list.classList.remove("metal_flex_hose_list_opened")
        }, 50) 

        setTimeout(() => {
          this.$refs.expansion_joints_list.classList.remove("expansion_joints_list_opened")
        }, 50) 

        setTimeout(() => {
          this.$refs.flexible_hose_machine_list.classList.remove("flexible_hose_machine_list_opened")
        }, 50)

      } 
    }
  }
}
</script>

<template>
  <div>
    <div class="navbar" ref="navbar">

      <div class="nav_menu" ref="nav_menu" @click="menuFocus" @click.prevent="toggle">
        <i class="fa fa-bars"></i>
      </div>
      <div class="nav_elements" ref="nav_elements">
        <ul>
          <li @click="home_clicked" ref="home">
            <router-link style="text-decoration: none; color: inherit;" to="/">
              Home
            </router-link>
          </li>
          <li class="metal_flex_hose" ref="metal_flex_hose" @click="metal_flex_hose_clicked"
            @mouseover="metal_flex_hose_hovered" @mouseleave="metal_flex_hose_leaved">
            Metal Flex Hose
            <ul class="metal_flex_hose_list" ref="metal_flex_hose_list">
              <ul class="metal_flex_hose_list_first_col" ref="metal_flex_hose_list_first_col">
                <li class="back_arrow" @click="metalFlexHoseBackArrow">
                  <i class="fa fa-arrow-right"></i>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=standard_pitch>
                    Standard Pitch
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=open_pitch>
                    Open Pitch
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=close_pitch>
                    Closed Pitch
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Braided_Hose_Combination>
                    Braided Hose Combinations
                  </router-link>
                </li>
              </ul>
              <ul class="metal_flex_hose_list_second_col" ref="metal_flex_hose_list_second_col">
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Headed_Hose>
                    Headed Hoses
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Welding_Pipe_Connection>
                    Welding Pipe connection
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Threaded_Connection>
                    Threaded Connection
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Flange_Connection>
                    Flange Connection
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Steam_Jacketed>
                    Stream Jacketed
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Headed_Hose_Combination>
                    Headed Hose Combinations
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Heating_and_Cooling_System>
                    Heating and Cooling System
                  </router-link>
                </li>
                <li>
                  <router-link @click="metal_flex_hose_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Copper_Connection>
                    Copper Connection Flex Hoses
                  </router-link>
                </li>
              </ul>
            </ul>
          </li>
          <li class="expansion_joints" ref="expansion_joints" @click="expansion_joints_clicked"
            @mouseover="expansion_joints_hovered" @mouseleave="expansion_joints_leaved">
            Expansion Joints
            <ul class="expansion_joints_list" ref="expansion_joints_list">
              <ul class="expansion_joints_list_first_col" ref="expansion_joints_list_first_col">
                <li class="back_arrow" @click="expansionJointsBackArrow">
                  <i class="fa fa-arrow-right"></i>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Fixed_Flange>
                    Fixed Flange
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Welding_Neck>
                    Welding Neck
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Limit_Rod_Delitation>
                    Limit Rod / Dilatation
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Externally_Pressurized>
                    Externally Pressurized
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Welding_Neck_Pressurized>
                    Welding Neck Pressurized
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Flanged_Pressurized>
                    Flanged Pressurized
                  </router-link>
                </li>
              </ul>
              <ul class="expansion_joints_list_second_col">
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Special_Applications>
                    Special Applications
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Welding_Neck_Expansion_Joints>
                    Welding Neck Expansion Joints
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Flanged_Expansion_Joints>
                    Flanged Expansion Joints
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Cardan_Artiqulated>
                    Cardan Articulated
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Cardan_Artiqulated_Flanged>
                    Cardan Articulated Flanged
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Welding_Neck_Cardan_Artiqulated>
                    Welding Neck Cardan Articulated
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Lens_Expansion_Joints>
                    Lens Expansion Joints
                  </router-link>
                </li>
                <li>
                  <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                    to=Rubber_Expansion_Joints>
                    Rubber Expansion Joints
                  </router-link>
                </li>
              </ul>
            </ul>
          </li>
          <li class="flexible_hose_machine" ref="flexible_hose_machine" @click="flexible_hose_machine_clicked"
            @mouseover="flexible_hose_machine_hovered" @mouseleave="flexible_hose_machine_leaved">
            Flexible Hose Machine
            <ul class="flexible_hose_machine_list" ref="flexible_hose_machine_list">
              <li class="back_arrow" @click="flexibleHoseMachineBackArrow">
                <i class="fa fa-arrow-right"></i>
              </li>
              <li>
                <router-link @click="flexible_hose_machine_list_clicked" style="text-decoration: none; color: inherit;"
                  to=Machine_specification>
                  Specification Of Machine
                </router-link>
              </li>
              <li>
                <router-link @click="flexible_hose_machine_list_clicked" style="text-decoration: none; color: inherit;"
                  to=Video>
                  Video
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <img src="./assets/logo_red.jpg" alt="bayir tech logo">
    </div>
  </div>


</template>

<style scoped>

.navbar{
  height: 400px;
  width: 100%;
  background-image: url('./assets/header.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-size:cover;
  box-shadow:   0px 0px 50px rgb(126, 119, 119);
  border-radius: 0px 0px 50px 50px;
  display: flex;
  justify-content: end;
}
.nav_menu{
  display: none;
}

.nav_elements {
  margin-top: 30px;
  margin-right: 100px;
  /* border: 1px solid red; */
}

.nav_elements li {
  float: left;
  margin-right: 50px;
  list-style-type: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  color: white;
  transition: color 0.5s ease-in;
}

.nav_elements > ul > li:hover{
  cursor: pointer;
  color: #de0000;
  padding-bottom: 20px;
}

.logo{
  position: relative;
  margin-top: 20px ;
  margin-left: 150px;

}
.logo img{
  margin-top: 20px;
  margin-left: 200px;
  width: 250px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #de0000;
}

.metal_flex_hose{
  position: relative;
}

.expansion_joints{
  position: relative;
}

.flexible_hose_machine{
  position: relative;
}

.metal_flex_hose_list{
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: #f1f1f1;
  width: 475px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  cursor: default;
}

.expansion_joints_list {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: #f1f1f1;
  width: 475px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  cursor: default;
}

.flexible_hose_machine_list {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: #f1f1f1;
  width: 225px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  cursor: default;
}

.metal_flex_hose_list li{
  color: rgb(86, 86, 86);
  padding: 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left:  0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 16px;
  transition: all 0.25s ease;
}

li.back_arrow{
  display: none;
}

ul.expansion_joints_list_first_col>li.back_arrow{
    display: none;
}

li.flexible_hose_machine>ul>li.back_arrow{
      display: none;
}
.back_arrow>i{
  color: #de0000;
}

.expansion_joints_list li {
  color: rgb(86, 86, 86);
  padding: 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left: 0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 16px;
  transition: all 0.5s ease;
}

.flexible_hose_machine_list li {
  color: rgb(86, 86, 86);
  padding: 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left: 0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 16px;
  transition: all 0.5s ease;
}

.metal_flex_hose_list li:hover{
  border-left:  5px solid #de0000;
  border-block-start-width: 5x;
  color: rgb(86, 86, 86);
  cursor:pointer;
}

.expansion_joints_list li:hover {
  border-left: 5px solid #de0000;
  border-block-start-width: 5x;
  color: rgb(86, 86, 86);
  cursor: pointer;
}

.flexible_hose_machine_list li:hover {
  border-left: 5px solid #de0000;
  border-block-start-width: 5x;
  color: rgb(86, 86, 86);
  cursor: pointer;
}


.flexible_hose_machine_list li {
  width: 100%;
}


.metal_flex_hose_list_first_col{
  float: left;
  width: 50%;
}

.expansion_joints_list_first_col {
  float: left;
  width: 50%;
}

.metal_flex_hose_list_first_col li{
width: 100%;  
}

.expansion_joints_list_first_col li {
  width: 100%;
}

.metal_flex_hose_list_second_col {
  float: right;
  width: 50%;
}

.expansion_joints_list_second_col {
  float: right;
  width: 50%;
}

.metal_flex_hose_list_second_col li {
  width: 100%;
}

.expansion_joints_list_second_col li {
  width: 100%;
}

@media only screen and (max-width: 1680px) {

  .navbar {
      height: 320px;
    }
  .logo img {     
      margin-left: 0px;
      width: 200px;
      height: auto;
    }

.nav_elements li {      
  font-size: 18px;
  transition: color 0.5s ease-in;
}

.metal_flex_hose_list {         
  width: 445px;
  transform: translateX(-10px);
}

.expansion_joints_list {        
  width: 425px;
  transform: translateX(-10px);
}

.flexible_hose_machine_list {          
  transform: translateX(-10px);
  width: 200px;
}


.metal_flex_hose_list li {         
  font-size: 14px;
  transition: all 0.25s ease;
}

.expansion_joints_list li {       
  font-size: 14px;
  transition: all 0.5s ease;
}

.flexible_hose_machine_list li {         
  font-size: 14px;
  transition: all 0.5s ease;
}
}


@media only screen and (max-width: 1040px) {

.navbar {
  height: 300px;
  width: 100%;
  justify-content: end;
      border-radius: 0px 0px 30px 30px;
        box-shadow: 0px 0px 30px rgb(126, 119, 119);
}

.metal_flex_hose:hover .metal_flex_hose_list {
  visibility: visible;
  opacity: 1;
  display: block;
  margin-top: 5px;
}

.nav_elements li {
  font-size: 16px;
  transition: color 0.5s ease-in;
}

/* 
.logo img {
  position: absolute;
  left: 0;
  margin-top: 30px;
  margin-left: 20px;
  width: 150px;
  height: auto;
  border-radius: 10px;
  border: 1px solid #de0000;
} */

.logo {
  position: relative;
  margin-top: 20px;
  margin-left: 100px;

}

.logo img {
  margin-top: 20px;
  margin-left: 0px;
  width: 200px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #de0000;
}

.nav_elements {
  margin-left: 100px;
}

.metal_flex_hose_list li {
  font-size: 14px;
  transition: all 0.25s ease;
}

.expansion_joints_list li {
  font-size: 14px;
  transition: all 0.5s ease;
}

.flexible_hose_machine_list li {
  font-size: 14px;
  transition: all 0.5s ease;
}

}


@media only screen and (max-width: 900px) {

.navbar {
  height: 250px;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 0px 0px 30px rgb(126, 119, 119);
}

.nav_menu{
  display: block;
  position: absolute;
  right: 0;
  padding: 25px 30px 0 0 ;
  font-size: 20px;
  color: white;
}

#app>div>div.navbar>div.nav_menu>i:hover{
  cursor: pointer;
}

.nav_elements{
  opacity: 0;
  visibility: hidden;
  margin: 50px 5px 0 0 ;
  position: absolute;
  right: 0;
  z-index: 2;
  background-color: #f1f1f1;
  border-radius: 10px;
  width: auto;
  height: auto;
  overflow:hidden;
  transition: all 0.5s ease-in-out;
}

.opened{
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.nav_elements>ul>li {
  float: none;
  padding: 5px 15px 5px 5px;
  margin: 5px 15px 5px 7px;
  list-style-type: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  color: rgb(86, 86, 86);
  transition: all 0.25s ease;
}

.nav_elements>ul>li:hover {
  cursor: pointer;
  border-left: 5px solid #de0000;
  color: rgb(86, 86, 86);
  border-block-start-width: 0px;
  padding-bottom: 5px;
}

.metal_flex_hose:hover .metal_flex_hose_list {
  visibility: hidden;
  opacity: 0;
  margin-top: 5px;
}

.metal_flex_hose_list{
      transform: translateX(0px);
      margin: 50px 5px 0 0;
      width: auto;
      height: auto;
      padding: auto;
      display: block;
      z-index: 10;
      position: absolute;
      right: 0;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s ease-in-out;
}

.metal_flex_hose_list_opened{
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.expansion_joints_list {
  transform: translateX(0px);
  margin: 50px 5px 0 0;
  width: auto;
  height: auto;
  padding: auto;
  display: block;
  z-index: 10;
  position: absolute;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.expansion_joints_list_opened {
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.flexible_hose_machine_list {
  transform: translateX(0px);
  margin: 50px 5px 0 0;
  width: auto;
  height: auto;
  padding: auto;
  display: block;
  z-index: 10;
  position: absolute;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.flexible_hose_machine_list_opened {
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.metal_flex_hose_list li:not(:first-child) {
  color: rgb(86, 86, 86);
  padding: 6px 16px 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left: 0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 14px;
  transition: all 0.25s ease;
}

.expansion_joints_list li:not(:first-child) {
  color: rgb(86, 86, 86);
  padding: 6px 16px 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left: 0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 14px;
  transition: all 0.25s ease;
}

.flexible_hose_machine_list li:not(:first-child) {
  color: rgb(86, 86, 86);
  padding: 6px 16px 6px 6px;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-left: 0px solid #f1f1f1;
  margin: 5px 5px;
  font-size: 14px;
  transition: all 0.25s ease;
}

.metal_flex_hose_list li:hover {
  border-left: 5px solid #de0000;
  border-block-start-width: 5x;
  color: rgb(86, 86, 86);
  cursor: pointer;
}

.expansion_joints_list li:hover {
  border-left: 5px solid #de0000;
  color: rgb(86, 86, 86);
  cursor: pointer;
}

.flexible_hose_machine_list li:hover {
  border-left: 5px solid #de0000;
  color: rgb(86, 86, 86);
  cursor: pointer;
}

li.back_arrow{
  display: block;
}

ul.expansion_joints_list_first_col>li.back_arrow {
  display: block;
}

li.flexible_hose_machine>ul>li.back_arrow {
  display: block;
}

li.back_arrow:hover{
  border-left: 0;
}

.metal_flex_hose_list_first_col, .metal_flex_hose_list_second_col{
  display: block;
  float: none;
  width: auto;
}

.expansion_joints_list_first_col, .expansion_joints_list_second_col{
  display: block;
  float: none;
  width: auto;
}

.expansion_joints:hover .expansion_joints_list {
  visibility: hidden;
  opacity: 0;
  margin-top: 5px;
  
}


.flexible_hose_machine:hover .flexible_hose_machine_list {
  visibility: hidden;
  opacity: 0;
  margin-top: 5px;
}

.logo {
  position: relative;
  margin-top: 20px;
  margin-left: 100px;

}

.logo img {
  margin-top: 20px;
  margin-left: 0px;
  width: 180px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #de0000;
}

}

@media only screen and (max-width: 700px) {
  .navbar {
      height: 200px;
      width: 100%;
      border-radius: 0px 0px 20px 20px;
       box-shadow: 0px 0px 20px rgb(126, 119, 119);
    }

.logo {
  position: relative;
  margin-top: 20px;
  margin-left: 100px;

}

.logo img {
  margin-top: 10px;
  margin-left: 0px;
  width: 150px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #de0000;
}

}

@media only screen and (max-width: 560px) {
  .navbar {
    height: 150px;
    width: 100%;
    border-radius: 0px 0px 30px 30px;
    box-shadow: 0px 0px 30px rgb(126, 119, 119);   
  }

.logo {
  position: relative;
  margin-top: 20px;
  margin-left: 60px;

}

.logo img {
  margin-top: 10px;
  margin-left: 0px;
  width: 130px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #de0000;
}

.nav_elements>ul>li:nth-child(5) {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 20px;
  margin-right: 20px;
}

.nav_elements li {
  font-size: 16px;
  color: white;
  transition: color 0.5s ease-in;
}


}

@media only screen and (max-width: 420px) {
  .navbar {
      height: 110px;
      width: auto;
      border-radius: 0px 0px 10px 10px;
      box-shadow: 0px 0px 20px rgb(126, 119, 119);
    }

.logo {
  position: relative;
  margin-top: 20px;
  margin-left: 30px;

}

.logo img {
  margin-top: 10px;
  margin-left: 0px;
  width: 100px;
  height: auto;
  border-radius: 7px;
  border: 2px solid #de0000;
}
.nav_elements>ul>li:nth-child(5) {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
}

.nav_menu {
  display: block;
  position: absolute;
  right: 0;
  padding: 10px 10px 0 0;
  font-size: 20px;
  color: white;
}

.nav_elements{

    margin: 35px 5px 0 0;
    position: absolute;
    right: 0;
    z-index: 2;
    background-color: #f1f1f1;
    border-radius: 10px;
    width: auto;
    height: auto;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
}

}
</style>
