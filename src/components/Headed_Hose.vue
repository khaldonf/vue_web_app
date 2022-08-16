<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Headed Hose</h1>
        </div>
        <div class="headed_hose">
            <img src="./assets/headed_hose.jpg" alt="Headed Hose of Metal Flex Hose">
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

div.headed_hose{
    text-align: center;
    margin: 100px auto;
}


div.headed_hose>img{
    width: 70%;
    height: auto;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

@media only screen and (max-width: 900px) {
    .title h1 {
            font-size: 28px;
        }
}

@media only screen and (max-width: 600px) {
.title h1 {
        font-size: 24px;
    }
}
</style>