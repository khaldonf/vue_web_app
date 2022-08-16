<script setup>

</script>

<template>

    <div class="contact_us">
        <div class="card_img">
            <img src="./assets/flexible_solution.jpg" alt="flexible hose solution">
        </div>
        <div class="info">
            <div class="email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p> info@bayirtech.com </p>
            </div>
            <div class="phone">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>+90 555 393 6006</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
























.contact_us{
    text-align: center;
    align-self: center;
    margin: 90px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact_us img{
    height: auto;
    width: 300px;
    border-right: 10px solid #de0000;
    float: left;
    margin-left: 150px;
    margin-right: 50px;
    padding-right: 10px;
}

.info{
    float: right;
}

.email{
   margin-right: 200px;
   margin-top: 5px;
}

.email i{
    color: #de0000;
    padding-right: 10px;
}

.email p{
    display: inline-block;
    color: rgb(86, 86, 86);
}

.phone{
    margin-right: 215px;
    margin-top: 15px;
}

.phone i{
    color: #de0000;
    padding-right: 10px;
}

.phone p{
    display: inline-block;
    color: rgb(86, 86, 86);
}

@media only screen and (max-width: 1680px) {
    .contact_us {
            margin: 70px auto;        
        }
    
        .contact_us img {
            height: auto;
            width: 200px;
            border-right: 7px solid #de0000;
            margin-right: 40px;          
        }
    
    
        .phone {
            margin-top: 20x;
        }
    
}

@media only screen and (max-width: 1200px) {
        .contact_us {        
                margin: 70px auto;              
            }
        
            .contact_us img {
                height: auto;
                width: 150px;
                border-right: 7px solid #de0000;             
            }

                        .email {                       
                            font-size: 14px;
                        }

                                                 .phone {
                                                     margin-top: 20x;
                                                     font-size: 14px;
                                                 }
}
@media only screen and (max-width: 900px) {
    .contact_us {           
            margin:70px auto;          
        }
    
        .contact_us img {
            height: auto;
            width: 150px;
            border-right: 7px solid #de0000;          
        }
    
    
        .email {           
            font-size: 14px;
        }
    
        .phone {
            margin-top: 20x;
            font-size: 14px;
        }
    
}


@media only screen and (max-width: 720px) {
    .contact_us {     
        margin: 50px auto;
        text-align:center;
        display: block;      
    }

    .contact_us img {
        height: auto;
        width: 150px;
        border-right: 7px solid #de0000;
        margin:50px auto;
        float: none;      
    }

    .info {
        float: none;
        margin: auto;
        text-align: center;
        display: inline-block;
    }

    .email {       
        font-size: 14px;
        margin: auto;

    }


    .phone {
      
        font-size: 14px;
        margin: auto;
        padding-top: 7px;
        padding-right: 7px;
    }

}


@media only screen and (max-width: 640px) {
    .contact_us {
  
        display: block;
        margin: auto;
        text-align: center;
        align-items: center;
      
    }

    div.contact_us>div.card_img>img {
        display: block;
        height: auto;
        width: 150px;
        border-right: 7px solid #de0000;
        align-self: center  ;
        margin: 30px auto;
        float: none;
    
    }

  div.contact_us>div.info {
     
        align-self: center;
        margin: 30px auto;
        float: none;
        text-align: center;
        vertical-align: auto;
    }

    .email {
      
        align-self: center;
        font-size: 12px;
    }


    .phone {
        margin-top: 20x;
        font-size: 12px;
    }

}


</style>