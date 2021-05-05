<?php 
// koneksi database
include 'koneksi.php';

// menangkap data yang di kirim dari form
$semester = $_POST['semester'];
$ip = $_POST['ip'];

// update data ke database
mysqli_query($koneksi,"update ip set semester='$semester', ip='$ip' where semester='$semester'");

// mengalihkan halaman kembali ke index.php
header("location:datanilai.php");

?>