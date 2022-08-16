<script>

</script>

<template>
    <div>

        <div class="title">
            <h1>Machine Specification</h1>
        </div>

        <div class="table_div">
            <table class="machine_specification_table">
                <thead>
                    <tr>
                        <th rowspan="3" style="color:#000000;"><strong>&nbsp; (M00 662 000)&nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp;&nbsp;</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>&nbsp;Nominal Diameter&nbsp; &nbsp; &nbsp;
                                &nbsp;&nbsp;</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>Length of the Line</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>Production Speed</strong></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>DN06</strong></td>
                        <td><strong>1/4 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>35 mt/h</strong></td>

                    </tr>
                    <tr>
                        <td><strong>DN08</strong></td>
                        <td><strong>5/16 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>40 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN10</strong></td>
                        <td><strong>3/8 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>45 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN12</strong></td>
                        <td><strong>1/2 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>60 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN16</strong></td>
                        <td><strong>5/8 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>65 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN20</strong></td>
                        <td><strong>3/4 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>65 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN25</strong></td>
                        <td><strong>1 "</strong></td>
                        <td><strong>14 mt</strong></td>
                        <td><strong>65 mt/h</strong></td>
                    </tr>

                </tbody>
            </table>


        </div>

        <div class="table_div">
            <table class="machine_specification_table">
                <thead>
                    <tr>
                        <th rowspan="3" style="color:#000000;"><strong>&nbsp; (M00 663 000)&nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp;&nbsp;</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>&nbsp;Nominal Diameter&nbsp; &nbsp; &nbsp;
                                &nbsp;&nbsp;</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>Length of the Line</strong></th>
                        <th rowspan="3" style="color:#000000;"><strong>Production Speed</strong></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>DN32</strong></td>
                        <td><strong>1-1/4 "</strong></td>
                        <td><strong>16 mt</strong></td>
                        <td><strong>70 mt/h</strong></td>

                    </tr>
                    <tr>
                        <td><strong>DN40</strong></td>
                        <td><strong>1-1/2 "</strong></td>
                        <td><strong>16 mt</strong></td>
                        <td><strong>75 mt/h</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DN50</strong></td>
                        <td><strong>2 "</strong></td>
                        <td><strong>16 mt</strong></td>
                        <td><strong>80 mt/h</strong></td>
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



.machine_specification_table thead {
    color: #555555;
}

.table_div {
    margin: 40px auto;
    text-align: center;
    width: 50%;
    color: #555555;
}


tr:nth-child(even) {
    background-color: #dddddd;
}


.machine_specification_table {
    text-align: center;
    border: none;
    margin: auto;
    align-self: center;
}

.machine_specification_table td {
    padding: 5px;
    width: 350px;
    align-self: center;
}

.machine_specification_table th {
    background-color: transparent; 
    word-wrap: normal;
}

.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .machine_specification_table th {
            font-size: 14px;
        }
    .machine_specification_table  tr td{
        font-size: 14px;
    }

                   .title h1 {
                       font-size: 28px;
                   }
}

@media only screen and (max-width: 600px) {
    .machine_specification_table th {
        font-size: 10px;
    }

    .machine_specification_table tr td {
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
    .machine_specification_table th {
        font-size: 10px;
    }

    .machine_specification_table tr td {
        font-size: 10px;
    }

         .note>p {
             font-size: 12px;
         }
}
</style>