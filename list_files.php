<?php
function getDirectoryTree($dir) {
    $result = [];
    $rii = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);

    foreach ($rii as $file) {
        $path = $file->getPathname();

        // Exclure le dossier .git et ses fichiers
        if (strpos($path, DIRECTORY_SEPARATOR . '.git') !== false) {
            continue;
        }

        if ($file->isDir()) {
            $result[$file->getFilename()] = getDirectoryTree($path);
        } else {
            $result[] = $file->getFilename();
        }
    }

    return $result;
}

$directory = '.';
$tree = getDirectoryTree($directory);

header('Content-Type: application/json');
echo json_encode($tree);
?>
