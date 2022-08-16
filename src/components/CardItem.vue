<script >
export default {
    name: 'CardItem',
   data() {       
       return{  
               index: 0,    
               items:[
                   {
                       id: 0,
                       title: 'Metal Flex Hose',
                       description: 'We propose the optimum solution when it comes to decoupling vibrations or compensating movements in pipeline systems.',
                       image: "metal_flex_hose",
                       alt: "metal flex hose",
                   },
                   {
                       id: 1,
                       title: 'Expansion Joints',
                       description: 'We propose the product range of expansion joints, metal bellows, pipe supports and automotive components from 34mm to 1600 mm.',
                       image: "expansion_joints",
                       alt: "expansion joints",
                   },
                   {                       
                       id: 2,
                       title: 'Flexible Hose Machine',
                       description: 'We produce machinery with our experienced team of more than 20 years in the flex hose industry. Production Scope (DN06 - DN50) Flex Hose Machine.',
                       image: "flexible_hose_machine",
                       alt: "flexible hose machine"               
                   },
               ],
       }
   },

   mounted(){              
       setInterval(this.updateCard, 5000)       
   },

   methods:{
       getUrl(_imgURL){
        return  new URL(`./assets/${_imgURL}.jpg`, import.meta.url).href
       },
       updateCard(){
           this.index = (this.index+1) % 3
       }
   }
};

</script>

<template>
    <div class="card_item">
        <div class="card_img">
            <Transition name="fade" mode="out-in">
                <img :src="getUrl(`${this.items[this.index].image}`)" :key="this.index"
                    :alt="this.items[this.index].alt">
            </Transition>
        </div>

        <div class="card_content">
            <Transition name="fade" mode="out-in">
                <h1 :key="this.index">{{this.items[this.index].title}}</h1>
            </Transition>
            <Transition name="fade" mode="out-in">
                <p :key="this.index">{{ this.items[this.index].description }}</p>
            </Transition>
        </div>

    </div>



</template>

<style scoped>






.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


.card_item {
    text-align: center;
    align-self: center;
    display: flex;
    margin: 150px auto;
    align-items: center;
    justify-content: center;
}

.card_img img {
    width: 400px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    margin-right: 10px;
}

.card_content{
        margin-left: 10px;
}

.card_content h1 {
    font-size: 35px;
    color: #de0000;
}

.card_content p {
    width: 425px;
    font-size: 18px;
    color: rgb(86, 86, 86);
}

@media only screen and (max-width: 1680px) {
    .card_item {          
            margin: 100px auto;           
        }

        .card_img img {
            width: 400px;
            height: 300px;           
        }

        .card_content h1 {
            font-size: 35px;
        }

        .card_content p {
            width: 400px;
            font-size: 16px;
        }
}

@media only screen and (max-width: 1024px) {
    .card_item {
            margin: 100px auto;
        }

.card_img img {
    width: 275px;
    height: 175px;
    border-radius: 15px;
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2);
    margin-right: 7px;
}

.card_content {
    margin-left: 10px;
}

.card_content h1 {
    font-size: 25px;
}
}

@media only screen and (max-width: 800px) {
.card_item {
        text-align: center;
        align-self: center;
        display: block;
        margin: 100px auto;
        /* align-items: center; */

    }

    .card_img img {
        width: 350px;
        height: 250px;
        /* border-radius: 15px; */
        /* box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2); */
        /* margin-right: 7px; */
        /* display: block; */
    }

    .card_content {
        /* margin-left: 10px; */
        text-align: center;
        align-items: center;
        /* display: block; */
    }

    .card_content h1 {
        font-size: 25px;
        /* align-self: center; */
        /* display: block; */
    }

    .card_content p {
        width: 350px;
        font-size: 16px;

        /* margin: 0px; */
        align-self: center;
        /* display: block; */
        margin: auto;
        /* padding: 0; */
        /* margin-left: 200px; */
        /* color: rgb(86, 86, 86); */
    }
}

@media only screen and (max-width: 680px) {
.card_item {
        text-align: center;
        align-self: center;
        display: block;
        margin: 100px auto;
        /* align-items: center; */

    }
    .card_img img {
        width: 300px;
        height: 200px;
        /* border-radius: 15px; */
        /* box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2); */
        /* margin-right: 7px; */
        /* display: block; */
    }

    .card_content {
        /* margin-left: 10px; */
        text-align: center;
        align-items: center;
        /* display: block; */
    }

    .card_content h1 {
        font-size: 20px;
        /* align-self: center; */
        /* display: block; */
    }

    .card_content p {
        width: 350px;
        font-size: 14px;
        
        /* margin: 0px; */
        align-self: center;
        /* display: block; */
        margin: auto;
        /* padding: 0; */
        /* margin-left: 200px; */
        /* color: rgb(86, 86, 86); */
    }
}


@media only screen and (max-width: 680px) {
    .card_item {
        text-align: center;
        align-self: center;
        display: block;
        margin: 100px auto;
        /* align-items: center; */

    }

    .card_img img {
        width: 300px;
        height: 200px;
        /* border-radius: 15px; */
        /* box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2); */
        /* margin-right: 7px; */
        /* display: block; */
    }

    .card_content {
        /* margin-left: 10px; */
        text-align: center;
        align-items: center;
        /* display: block; */
    }

    .card_content h1 {
        font-size: 20px;
        /* align-self: center; */
        /* display: block; */
    }

    .card_content p {
        width: 350px;
        font-size: 14px;

        /* margin: 0px; */
        align-self: center;
        /* display: block; */
        margin: auto;
        /* padding: 0; */
        /* margin-left: 200px; */
        /* color: rgb(86, 86, 86); */
    }
}

@media only screen and (max-width: 420px) {
    .card_item {
        text-align: center;
        align-self: center;
        display: block;
        margin: 100px auto;
        /* align-items: center; */

    }

    .card_img img {
        width: 275px;
        height: 180px;
        /* border-radius: 15px; */
        /* box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2); */
        /* margin-right: 7px; */
        /* display: block; */
    }

    .card_content {
        /* margin-left: 10px; */
        text-align: center;
        align-items: center;
        /* display: block; */
    }

    .card_content h1 {
        font-size: 18px;
        /* align-self: center; */
        /* display: block; */
    }

    .card_content p {
        width: 300px;
        font-size: 12px;

        /* margin: 0px; */
        align-self: center;
        /* display: block; */
        margin: auto;
        /* padding: 0; */
        /* margin-left: 200px; */
        /* color: rgb(86, 86, 86); */
    }
}

</style>