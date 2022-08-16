<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Externally Pressurized</h1>
        </div>
        <div class="externally_pressurized">
            <img src="./assets/externally_pressurized.jpg" alt="Externally Pressurized of Expansion Joints">
        </div>

        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">It is used in high pressure and high expansion
                applications. Under these conditions, normal compensators are subject to deformation. By external
                pressure application, undulation is recovered from the unstable state. That is, it changes from a
                printed rod state that is subjected to flambage to a rod state that tries to pull.</p>
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


div.externally_pressurized{
    text-align: center;
    margin:  auto;
}

div.externally_pressurized>img{
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
   
    .title h1 {
            font-size: 24px;
        }

    .note>p{
        font-size: 14px;
    }
}

@media only screen and (max-width: 480px) {
   
         .note>p {
             font-size: 12px;
         }
}
</style>