import { createRouter, createWebHashHistory } from "vue-router";
import Standard_Pitch from '../components/Standard_Pitch.vue'
import Open_Pitch from '../components/Open_Pitch.vue'
import Close_Pitch from '../components/Close_Pitch.vue'
import Braided_Hose_Combination from '../components/Braided_Hose_Combination.vue'
import Headed_Hose from '../components/Headed_Hose.vue'
import Welding_Pipe_Connection from '../components/Welding_Pipe_Connection.vue'
import Threaded_Connection from '../components/Threaded_Connection.vue'
import Flange_Connection from '../components/Flange_Connection.vue'
import Steam_Jacketed from '../components/Steam_Jacketed.vue'
import Headed_Hose_Combination from '../components/Headed_Hose_Combination.vue'
import Heating_and_Cooling_System from '../components/Heating_and_Cooling_System.vue'
import Copper_Connection from '../components/Copper_Connection.vue'
import Fixed_Flange from '../components/Fixed_Flange.vue'
import Welding_Neck from '../components/Welding_Neck.vue'
import Limit_Rod_Delitation from '../components/Limit_Rod_Delitation.vue'
import Externally_Pressurized from '../components/Externally_Pressurized.vue'
import Welding_Neck_Pressurized from '../components/Welding_Neck_Pressurized.vue'
import Flanged_Pressurized from '../components/Flanged_Pressurized.vue'
import Special_Applications from '../components/Special_Applications.vue'
import Welding_Neck_Expansion_Joints from '../components/Welding_Neck_Expansion_Joints.vue'
import Flanged_Expansion_Joints from '../components/Flanged_Expansion_Joints.vue'
import Cardan_Artiqulated from '../components/Cardan_Artiqulated.vue'
import Cardan_Artiqulated_Flanged from '../components/Cardan_Artiqulated_Flanged.vue'
import Welding_Neck_Cardan_Artiqulated from '../components/Welding_Neck_Cardan_Artiqulated.vue'
import Lens_Expansion_Joints from '../components/Lens_Expansion_Joints.vue'
import Rubber_Expansion_Joints from '../components/Rubber_Expansion_Joints.vue'
import Machine_Specification from '../components/Machine_Specification.vue'
import Video from '../components/Video.vue'
import CardItem from '../components/CardItem.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: CardItem,
  },

  {
    path: "/standard_pitch",
    name: "Standard_Pitch",
    component: Standard_Pitch,
  },

  {
    path: "/open_pitch",
    name: "Open_Pitch",
    component: Open_Pitch,
  },

  {
    path: "/close_pitch",
    name: "Close_Pitch",
    component: Close_Pitch,
  },

  {
    path: "/Braided_Hose_Combination",
    name: "Braided_Hose_Combination",
    component: Braided_Hose_Combination,
  },

  {
    path: "/Headed_Hose",
    name: "Headed_Hose",
    component: Headed_Hose,
  },

  {
    path: "/Welding_Pipe_Connection",
    name: "Welding_Pipe_Connection",
    component: Welding_Pipe_Connection,
  },

  {
    path: "/Threaded_Connection",
    name: "Threaded_Connection",
    component: Threaded_Connection,
  },

  {
    path: "/Flange_Connection",
    name: "Flange_Connection",
    component: Flange_Connection,
  },

  {
    path: "/Steam_Jacketed",
    name: "Steam_Jacketed",
    component: Steam_Jacketed,
  },

  {
    path: "/Headed_Hose_Combination",
    name: "Headed_Hose_Combination",
    component: Headed_Hose_Combination,
  },

  {
    path: "/Heating_and_Cooling_System",
    name: "Heating_and_Cooling_System",
    component: Heating_and_Cooling_System,
  },

  {
    path: "/Copper_Connection",
    name: "Copper_Connection",
    component: Copper_Connection,
  },

  {
    path: "/Fixed_Flange",
    name: "Fixed_Flange",
    component: Fixed_Flange,
  },

  {
    path: "/Welding_Neck",
    name: "Welding_Neck",
    component: Welding_Neck,
  },

  {
    path: "/Limit_Rod_Delitation",
    name: "Limit_Rod_Delitation",
    component: Limit_Rod_Delitation,
  },

  {
    path: "/Externally_Pressurized",
    name: "Externally_Pressurized",
    component: Externally_Pressurized,
  },

  {
    path: "/Welding_Neck_Pressurized",
    name: "Welding_Neck_Pressurized",
    component: Welding_Neck_Pressurized,
  },

  {
    path: "/Flanged_Pressurized",
    name: "Flanged_Pressurized",
    component: Flanged_Pressurized,
  },

  {
    path: "/Special_Applications",
    name: "Special_Applications",
    component: Special_Applications,
  },

  {
    path: "/Welding_Neck_Expansion_Joints",
    name: "Welding_Neck_Expansion_Joints",
    component: Welding_Neck_Expansion_Joints,
  },

  {
    path: "/Flanged_Expansion_Joints",
    name: "Flanged_Expansion_Joints",
    component: Flanged_Expansion_Joints,
  },

  {
    path: "/Cardan_Artiqulated",
    name: "Cardan_Artiqulated",
    component: Cardan_Artiqulated,
  },

{
    path: "/Cardan_Artiqulated_Flanged",
    name: "Cardan_Artiqulated_Flanged",
    component: Cardan_Artiqulated_Flanged,
  },


 {
    path: "/Welding_Neck_Cardan_Artiqulated",
    name: "Welding_Neck_Cardan_Artiqulated",
    component: Welding_Neck_Cardan_Artiqulated,
  },


  {
    path: "/Lens_Expansion_Joints",
    name: "Lens_Expansion_Joints",
    component: Lens_Expansion_Joints,
  },

   {
    path: "/Rubber_Expansion_Joints",
    name: "Rubber_Expansion_Joints",
    component: Rubber_Expansion_Joints,
  },

    {
    path: "/Machine_Specification",
    name: "Machine_Specification",
    component: Machine_Specification,
  },

   {
    path: "/Video",
    name: "Video",
    component: Video,
  },


];


const router  = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router