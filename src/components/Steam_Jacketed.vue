<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Steam Jacketed</h1>
        </div>

        <div class="steam_jacketed">
            <img src="./assets/steam_jacketed.jpg" alt="Steam Jacketed of Metal Flex Hose">
        </div>



        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">***You can get information from our sales consultants.
            </p>
        </div>
    </div>
</template>

<style scoped>





.title {
    margin: auto;
    padding: auto;
    text-align: center;
}

.title h1 {
    color: #de0000;
}

div.steam_jacketed{
    text-align: center;
    margin: 80px auto;
}


div.steam_jacketed>img{
    width: 70%;
    height: auto;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 900px) {
        .title h1 {
                font-size: 28px;
            }
}
@media only screen and (max-width: 600px) {

    .note>p{
        font-size: 14px;
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