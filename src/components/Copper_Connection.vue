<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Copper Connection</h1>
        </div>
        <div class="copper_connection">
            <img src="./assets/copper_connection.jpg" alt="Copper Connection of Metal Flex Hose">
        </div>


        <div class="note">
            <p style="color:rgb(86, 86, 86); align-self: center;">According to the requirements, fittings made of carbon
                steel, stainless steel, copper or brass welded to the braided or unbraided metal flexible hoses by using
                TIG welding or silver alloyed brazing methods in accordance with the DIN / ISO</p>
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

div.copper_connection{
    text-align: center;
    margin: 80px auto;
}


div.copper_connection>img{
    width: 70%;
    height: auto;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

.copper_connection_table thead {
    color: #555555;
}

.table_div {
    margin: auto;
    text-align: center;
    width: 85%;
    color: #555555;
}


tr:nth-child(even) {
    background-color: #dddddd;
}


.copper_connection_table {
    text-align: center;
    border: none;
    margin: auto;

}

.copper_connection_table td {
    padding: 5px;
    width: 350px;
    align-self: center;
}

.copper_connection_table th {
    background-color: transparent; 
    word-wrap: normal;
}

.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .copper_connection_table th {
            font-size: 14px;
        }
    .copper_connection_table  tr td{
        font-size: 14px;
    }
        .title h1 {
            font-size: 28px;
        }
}

@media only screen and (max-width: 600px) {
    .copper_connection_table th {
        font-size: 10px;
    }

    .copper_connection_table tr td {
        font-size: 10px;
    }

    .note>p{
        font-size: 14px;
    }
        .title h1 {
            font-size: 24px;
        }
}

@media only screen and (max-width: 480px) {
    .copper_connection_table th {
        font-size: 10px;
    }

    .copper_connection_table tr td {
        font-size: 10px;
    }

         .note>p {
             font-size: 12px;
         }
}
</style>