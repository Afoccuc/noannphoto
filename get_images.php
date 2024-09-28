<?php
$image_files = glob('pictures/*.{jpg,png,JPG}', GLOB_BRACE);
echo json_encode($image_files);
?>
