<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Special Application</h1>
        </div>

        <div class="special_applications_imgs">
            <div class="special_applications">
                <img src="./assets/special_app_1.jpg" alt="Special Application of Expansion Joints">
            </div>

            <div class="special_applications">
                <img src="./assets/special_app_2.jpg" alt="Special Application of Expansion Joints">
            </div>


            <div class="special_applications">
                <img src="./assets/special_app_3.jpg" alt="Special Application of Expansion Joints">
            </div>
        </div>


        <div class="table_div">
            <table class="special_applications_table">

                <thead>
                    <tr>
                        <th style="color: #000000;">TYPE</th>
                        <th style="color: #000000;">Production Range(*)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>START EXPANSİON JOİNTS</td>
                        <td>Nominal Diamater: DN 50- DN1400 Nominal Pressure: PN6 – PN 40 Single &amp; Universal Bellow
                            Types</td>
                    </tr>
                    <tr>
                        <td>OUTSIDE PROTECTED EXPANSİON JOİNTS</td>
                        <td>Nominal Diamater: DN 50- DN1400 Nominal Pressure: PN6 – PN 40 Single &amp; Universal Bellow
                            Types</td>
                    </tr>
                    <tr>
                        <td>DECORATİVE TYPE</td>
                        <td>Nominal Diamater: DN 15- DN200 Nominal Pressure: PN10 – PN 25 Connection Types: Welded &amp;
                            Threaded</td>
                    </tr>
                </tbody>
            </table>
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

div.special_applications{
    text-align: center;
    margin:  auto;
}

.special_applications_imgs{
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.special_applications{
    width: 40%;
    height: auto;
}
div.special_applications>img{
    width: 80%;
    height: 80%;
    margin: 40px auto;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}


.special_applications_table thead {
    color: #555555;
}

.table_div {
    margin: 40px auto;
    text-align: center;
    width: 85%;
    color: #555555;
}


tr:nth-child(even) {
    background-color: #dddddd;
}


.special_applications_table {
    text-align: center;
    border: none;
    margin: auto;

}

.special_applications_table td {
    padding: 5px;
    width: 350px;
    align-self: center;
}

.special_applications_table th {
    background-color: transparent; 
    word-wrap: normal;
}

.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .special_applications_table th {
            font-size: 14px;
        }
    .special_applications_table  tr td{
        font-size: 14px;
    }


        .special_applications_imgs {
            margin: 80px auto;
            display: block;
        }
    
        .special_applications {
            width: 80%;
            height: auto;
        }
    
        div.special_applications>img {
            width: 70%;
            height: 70%;
            margin: 40px auto;
            box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
            border-radius: 20px;
        }

                .title h1 {
                    font-size: 28px;
                }
}

@media only screen and (max-width: 600px) {
    .special_applications_table th {
        font-size: 10px;
    }

    .special_applications_table tr td {
        font-size: 10px;
    }

         div.special_applications>img {
             width: 70%;
             height: 70%;
             margin: 30px auto;
             box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
             border-radius: 20px;
         }

.title h1 {
    font-size: 24px;
}
    
}

@media only screen and (max-width: 480px) {
    .special_applications_table th {
        font-size: 10px;
    }

    .special_applications_table tr td {
        font-size: 10px;
    }

         div.special_applications>img {
             width: 70%;
             height: 70%;
             margin: 20px auto;
             box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
             border-radius: 20px;
         }

        
}
</style>