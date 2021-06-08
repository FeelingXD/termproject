<?php 
    include_once "db.php";
    ?>
<style>
    #frame1 {
        float: left;
        height: 100%;
        width: 50%;
        overflow: hidden;
    }
    #frame1_subject{
        background-color: #3c3c3c;
        color: white;
        box-sizing: border-box;
        border: lightslategray solid 2px;
    }
    #frame2 {
        float: left;
        height: 100%;
        width: 50%;
        overflow: hidden;
        background-color: lightblue;
    }
    #frame2_subject{
        background-color: #3c3c3c;
        color: white;
        box-sizing: border-box;
        border: lightslategray solid 2px;
    }
</style>
<div id="frame1">
    <div id="frame1_subject">
        구역관리
    </div>
    <?php
        $frame1_sql="";
        // sql 작성
    ?>
      <table>
        <thead>
            <th></th>
            <th></th>
        </thead>    
    </table> 
</div>
<div id="frame2">
    <div id="frame2_subject">
        내가쓴글 
    </div>
    <?php
    $frame2_sql="";
    // sql 작성
    ?>
    
    <table>
        <thead>
            <th></th>
            <th></th>
        </thead>    

    </table>
</div>