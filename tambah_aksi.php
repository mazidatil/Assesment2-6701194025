<?php 

include 'koneksi.php';

$semester = $_POST['semester'];

$ip = $_POST['ip'];


mysqli_query($koneksi,"insert into ip values('$semester','$ip')");


header("location:datanilai.php");

?>