<script>

</script>

<template>
    <div>
        <div class="sub_title">
            <h1 style="color: #de0000;">Cardan Artiqulated</h1>
        </div>
        <div class="sub_title">
            <h1>Angular Expansion Joints (Earthquake Or Cardan Joint)</h1>
        </div>
        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">Angular compensators are the third group of expansion
                elements used to absorb expansion. The major advantages of this type of compensators are that they are
                suitable for absorbing movements in two or three dimensions, which also require a change of direction.
                Angular compensators provide a definite solution especially in cases where lateral movements are very
                large. During this type of use, angular compensators should be used in double or triple groups.
                Depending on whether the resulting expansion is in one or multiple planes, there are different designs.
                These designs are both single and double joint compensators</p>
        </div>

        <div class="cardan_artiqulated">
            <img src="./assets/cardan_1.jpg" alt="Cardan Artiqulated of Expansion Joints">
        </div>

        <div class="sub_title">
            <h1>Technical Specifications</h1>
        </div>

        <div class="note">
            <div style="text-align: left;  color:rgb(86, 86, 86);">
                <ul>
                    <li>Standard Earthquake Compensators are produced with weld neck.</li>
                    <li>Operating pressure : PN:6 ; PN:10 ; PN:16</li>
                    <li>Design Temperature : -80……+420 C</li>
                    <li>The corrugation : AISI 304 , AISI 321, AISI 316</li>
                    <li>Flange, Pipe etc. : St 37-2 Karbon çeliği</li>
                    <li>Joints : St 37-2 Karbon çeliği</li>
                </ul>
            </div>
        </div>

        <div class="cardan_artiqulated">
            <img src="./assets/cardan_2.jpg" alt="Cardan Artiqulated of Expansion Joints">
        </div>


    </div>


</template>

<style>



.sub_title{
    margin: auto;
    text-align: center;
}

.sub_title h1{
    color: rgb(86, 86, 86);
    align-self: center;
    padding: auto;
}


div.cardan_artiqulated{
    text-align: center;
    margin:  auto;
    width: 80%;
    height: auto;
}

.cardan_artiqulated_imgs{
    margin: 80px auto;
    display: flex;
}

div.cardan_artiqulated>img{
    width: 70%;
    height: 70%;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}


.note{
    margin: 50px auto;
    padding: 0px 50px;
    text-align: center;
    width: 70%;
}

@media only screen and (max-width: 900px) {
    .cardan_artiqulated_table th {
            font-size: 14px;
        }
    .cardan_artiqulated_table  tr td{
        font-size: 14px;
    }

        .sub_title h1 {
           font-size: 22px;
        }
}

@media only screen and (max-width: 600px) {
    .cardan_artiqulated_table th {
        font-size: 10px;
    }

    .cardan_artiqulated_table tr td {
        font-size: 10px;
    }

    .note>p{
        font-size: 14px;
    }
        .sub_title h1 {
            font-size: 18px;
        }
}

@media only screen and (max-width: 480px) {
    .cardan_artiqulated_table th {
        font-size: 10px;
    }

    .cardan_artiqulated_table tr td {
        font-size: 10px;
    }

         .note>p {
             font-size: 12px;
         }
}
</style>