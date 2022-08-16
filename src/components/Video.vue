<script>
export default {
    methods:{
        toggle() {

            var trailer = document.querySelector(".trailer");
            trailer.classList.toggle("active");


            var video = document.querySelector("video");
            video.classList.toggle("active");
            video.pause();
            video.currentTime = 0;
            this.$forceUpdate();

        }
    },
  }

</script>

<template>
    <div>
        <div style="height: 200px; width: 100%;">

        </div>
        <div class="trailer active">
            <video src="./assets/Machine.mp4" controls="true" autoplay class="active">
            </video>
            <router-link @click="expansion_joints_list_clicked" style="text-decoration: none; color: inherit;"
                to="/">
                <img src="./assets/close.jpg" @click="toggle" class="close" alt="cannot load image">
            </router-link>
        </div>
    </div>


</template>

<style>


.trailer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
}

.trailer.active {
    visibility: visible;
    opacity: 1;
}

.trailer video {
    position: relative;
    max-width: 900px;
    outline: none;
}

.close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 20px;
}

@media (max-width: 990px) {
    .trailer video {
        max-width: 90%;

    }
}


</style>