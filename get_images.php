<?php
header('Content-Type: application/json');

// Assurez-vous que le chemin du dossier est correct
$images = glob('pictures/*.{jpg,png,JPG,PNG,JPEG,TIFF,TIF,WEBP}', GLOB_BRACE);

$image_data = [];

if ($images !== false) {
    foreach ($images as $image) {
        $image_info = [
            'path' => $image,
            'title' => '',
            'comment' => '',
            'speed' => '',
            'iso' => '',
            'aperture' => '',
            'camera' => ''
        ];

        // Vérifier si l'image contient des métadonnées EXIF
        if (exif_imagetype($image) === IMAGETYPE_JPEG || exif_imagetype($image) === IMAGETYPE_TIFF) {
            $exif_data = @exif_read_data($image, 0, true);
            if ($exif_data !== false) {
                // Extraire le titre
                if (isset($exif_data['IFD0']['ImageDescription'])) {
                    $image_info['title'] = $exif_data['IFD0']['ImageDescription'];
                }

                // Extraire le commentaire
                if (isset($exif_data['COMPUTED']['UserComment'])) {
                    $image_info['comment'] = $exif_data['COMPUTED']['UserComment'];
                }

                // Extraire la vitesse d'obturation
                if (isset($exif_data['EXIF']['ShutterSpeedValue'])) {
                    $image_info['speed'] = $exif_data['EXIF']['ShutterSpeedValue'];
                }

                // Extraire l'ISO
                if (isset($exif_data['EXIF']['ISOSpeedRatings'])) {
                    $image_info['iso'] = $exif_data['EXIF']['ISOSpeedRatings'];
                }

                // Extraire l'ouverture
                if (isset($exif_data['EXIF']['FNumber'])) {
                    $image_info['aperture'] = $exif_data['EXIF']['FNumber'];
                }

                // Extraire le modèle de la caméra
                if (isset($exif_data['IFD0']['Model'])) {
                    $image_info['camera'] = $exif_data['IFD0']['Model'];
                }
            }
        }

        $image_data[] = $image_info;
    }
}

// Générer et renvoyer le JSON
echo json_encode($image_data);
?>
