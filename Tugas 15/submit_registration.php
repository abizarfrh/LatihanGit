<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sanbercode_registration";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Menangkap data dari form
$name = $_POST['name'];
$phone = $_POST['phone'];

// Menyimpan data ke database
$sql = "INSERT INTO registrations (name, phone) VALUES ('$name', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "Pendaftaran berhasil!";
} else {
    echo "Terjadi kesalahan: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi
$conn->close();
?>
