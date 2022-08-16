<script>

</script>

<template>
    <div>     
        <div class="title">
            <h1>Lens Expansion Joints</h1>
        </div>

        <div class="lens_expansion_joints">
            <img src="./assets/lens_expansion_joints.jpg" alt="Lens Expansion Joints">
        </div>


        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">Lens expansion joints are preferred in all industries
                that uses pressurised equipment and heat exchangers and where the higher pressure and higher temperature
                require greater material thickness. <br>
                Working Temperature: -80 / +1000 °C <br>
                (*)Please for other dimensions and pressure classes contact our company. <br>
                Bellow Material: AISI 304 , St37.2, St 52,3 (Op. AISI 316, AISI 316 L, AISI 321, AISI 309, Inconel 625…)
                <br>
                Inner Sleeve Material: AISI 304, St37.2, St 52,3 (Op. AISI 316, AISI 316 L, AISI 321, AISI 309, Inconel
                625…) <br>
                Pipe Material: St 37, St52.3 (op. AISI 304, AISI 316, AISI 321, AISI 309)
            </p>
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

div.lens_expansion_joints{
    text-align: center;
    margin:  auto;
}


.lens_expansion_joints{
    width: 70%;
    height: auto;
}


div.lens_expansion_joints>img{
    width: 40%;
    height: 40%;
    margin: 40px auto;
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

        .lens_expansion_joints {
            width: 90%;
            height: auto;
        }
    
    
        div.lens_expansion_joints>img {
            width: 40%;
            height: 40%;
            margin: 40px auto;
            box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
            border-radius: 20px;
        }

         .title h1 {
             font-size: 24px;
         }
         
}

@media only screen and (max-width: 480px) {

         .note>p {
             font-size: 12px;
         }
}
</style>