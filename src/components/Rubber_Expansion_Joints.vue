<script>

</script>

<template>
    <div>
        <div class="title">
            <h1>Rubber Expansion Joints</h1>
        </div>
        <div class="rubber_expansion_joints_imgs">
            <div class="rubber_expansion_joints">
                <img src="./assets/rubber_1.jpg" alt="Rubber Expansion Joints">
            </div>

            <div class="rubber_expansion_joints">
                <img src="./assets/rubber_2.jpg" alt="Rubber Expansion Joints">
            </div>

            <div class="rubber_expansion_joints" style="width: 100%;">
                <img src="./assets/rubber_3.jpg" alt="Rubber Expansion Joints">
            </div>

        </div>

        <div class="table_div">
            <table class="rubber_expansion_joints_table">
                <thead>
                    <tr>
                        <th rowspan="1" style="color: black;">DN</th>
                        <th rowspan="1" style="color: black;">PN</th>
                        <th rowspan="1" style="color: black;">D (mm)</th>
                        <th rowspan="1" style="color: black;">K (mm)</th>
                        <th rowspan="1" style="color: black;">B</th>
                        <th rowspan="1" style="color: black;">
                            <p>N</p>
                        </th>
                        <th rowspan="1">Ø</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>32</td>
                        <td>16</td>
                        <td>100</td>
                        <td>140</td>
                        <td>100</td>
                        <td>76,5</td>
                        <td>16x4</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>16</td>
                        <td>100</td>
                        <td>150</td>
                        <td>110</td>
                        <td>76,5</td>
                        <td>16x4</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td>16</td>
                        <td>100</td>
                        <td>165</td>
                        <td>125</td>
                        <td>87</td>
                        <td>18x4</td>
                    </tr>
                    <tr>
                        <td>65</td>
                        <td>16</td>
                        <td>100</td>
                        <td>185</td>
                        <td>145</td>
                        <td>102</td>
                        <td>18x4</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>16</td>
                        <td>100</td>
                        <td>200</td>
                        <td>160</td>
                        <td>118</td>
                        <td>20x8</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>16</td>
                        <td>100</td>
                        <td>220</td>
                        <td>180</td>
                        <td>141</td>
                        <td>20x8</td>
                    </tr>
                    <tr>
                        <td>125</td>
                        <td>16</td>
                        <td>120</td>
                        <td>250</td>
                        <td>210</td>
                        <td>169</td>
                        <td>22x8</td>
                    </tr>
                    <tr>
                        <td>150</td>
                        <td>16</td>
                        <td>120</td>
                        <td>285</td>
                        <td>240</td>
                        <td>198</td>
                        <td>22x8</td>
                    </tr>
                    <tr>
                        <td>200</td>
                        <td>16</td>
                        <td>120</td>
                        <td>340</td>
                        <td>295</td>
                        <td>255</td>
                        <td>24x12</td>
                    </tr>
                    <tr>
                        <td>250</td>
                        <td>16</td>
                        <td>130</td>
                        <td>405</td>
                        <td>355</td>
                        <td>313</td>
                        <td>26x12</td>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>16</td>
                        <td>210</td>
                        <td>460</td>
                        <td>410</td>
                        <td>378</td>
                        <td>28x12</td>
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

div.rubber_expansion_joints{
    text-align: center;
    margin:  auto;
}

.rubber_expansion_joints_imgs{
    margin: 80px auto;
    display: flex;
    flex-wrap: wrap;
}

.rubber_expansion_joints{
    width: 40%;
    height: auto;
}


div.rubber_expansion_joints>img{
    width: 70%;
    height: 70%;
    margin: 40px auto;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}


.rubber_expansion_joints_table thead {
    color: #555555;
}

.table_div {
    margin: 40px auto;
    text-align: center;
    width: 70%;
    color: #555555;
}


tr:nth-child(even) {
    background-color: #dddddd;
}


.rubber_expansion_joints_table {
    text-align: center;
    border: none;
    margin: auto;

}

.rubber_expansion_joints_table td {
    padding: 5px;
    width: 350px;
    align-self: center;
}

.rubber_expansion_joints_table th {
    background-color: transparent; 
    word-wrap: normal;
}

.note{
    margin: 25px auto;
    padding: 0px 50px;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .rubber_expansion_joints_table th {
            font-size: 14px;
        }
    .rubber_expansion_joints_table  tr td{
        font-size: 14px;
    }

           div.rubber_expansion_joints {
               text-align: center;
               margin: auto;
           }
    
           .rubber_expansion_joints_imgs {
               margin: 80px auto;
               display: block;
           }
    
           .rubber_expansion_joints {
               width: 60%;
               height: auto;
           }
    
    
           div.rubber_expansion_joints>img {
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
    .rubber_expansion_joints_table th {
        font-size: 10px;
    }

    .rubber_expansion_joints_table tr td {
        font-size: 10px;
    }

    .note>p{
        font-size: 14px;
    }

        div.rubber_expansion_joints {
            text-align: center;
            margin: auto;
        }
    
        .rubber_expansion_joints_imgs {
            margin: 80px auto;
            display: block;
        }
    
        .rubber_expansion_joints {
            width: 60%;
            height: auto;
        }
    
    
        div.rubber_expansion_joints>img {
            width: 70%;
            height: 70%;
            margin: 40px auto;
            box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.5);
            border-radius: 20px;
        }

           .title h1 {
               font-size: 24px;
           }
}

@media only screen and (max-width: 480px) {
    .rubber_expansion_joints_table th {
        font-size: 10px;
    }

    .rubber_expansion_joints_table tr td {
        font-size: 10px;
    }

         .note>p {
             font-size: 12px;
         }
}
</style>