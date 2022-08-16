<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Limit Rod Delitation</h1>
        </div>
        <div class="limit_rod_delitation">
            <img src="./assets/limit_rod_1.jpg" alt="Limit Rod Delitation of Expansion Joints">
        </div>

        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">A single lateral compensator. It is possible to absorb
                three-dimensional movements with two compensators connected to this tip. The main task of the lateral
                compensator is to prevent bending stresses. These stresses are required due to pressure stresses.</p>
        </div>

        <div class="limit_rod_delitation">
            <img src="./assets/limit_rod_2.jpg" alt="Limit Rod Delitation of Expansion Joints">
        </div>




    </div>


</template>

<style>





.title {
    margin: auto;
    padding: auto;
    text-align: center;
}

.title h1 {
    color: #de0000;
}


div.limit_rod_delitation{
    text-align: center;
    margin:  auto;
}

div.limit_rod_delitation>img{
    margin: 70px auto;
    width: 60%;
    height: 60%;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}


.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 600px) {
   
    .note>p{
        font-size: 14px;
    }

        .title h1 {
            font-size: 28px;
        }
}

@media only screen and (max-width: 480px) {
   
         .note>p {
             font-size: 12px;
         }

                 .title h1 {
                     font-size: 24px;
                 }
}
</style>