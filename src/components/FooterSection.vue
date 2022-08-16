<script setup>

</script>

<template>
    <div class="footer">
        <p>Bayir Tech Copyright © 2007</p>
    </div>
</template>

<style scoped>






.footer{
    width: 100%;
    height: 40px;
    background: #de0000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    /* margin: auto; */
    
    /* bottom: 0; */
    margin-bottom: 0;
    position: absolute;
}

.footer p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    color: white;
    align-self: center;
    margin: auto;
    padding: auto;
    line-height: auto;
    }


@media only screen and (max-width: 1000px) {
    div.footer>p {
        font-size: 16px;
    }
}


@media only screen and (max-width: 700px) {
div.footer>p{
    font-size: 14px;
}
}
</style>