<?php
$ name=$_POST['name'];
$ email=$_POST['email'];
$ contactno=$_POST['contactno'];
$ blood_group=$_POST['blood_group'];
$ organ_needed=$_POST['organ_needed'];
$ hospital=$_POST['hospital'];
$ medical_reports=$_POST['medical_reports'];
?>
$conn=new mysqli("localhost","root","","test");
if ($conn->connection_error){
    die("connection failed":'.$conn->connect_error');
}else{
    $stmt=$conn->prepare("insert into registration(name,email,contactno,blood_group,organ_needed,hospital,medical_reports);
    values(?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssss",$name,$email,#contactno,$blood_group,$organ_needed,$hospital,$medical_reports);
    echo "registration successfully done";
    $stmt->close();
    $conn->close();

}
