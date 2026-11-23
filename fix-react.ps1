$file = 'C:\Users\sachi\.gemini\antigravity\scratch\shade-transport-website\assets\js\react-app.js'
$lines = Get-Content $file -Encoding UTF8
Write-Host "Total lines: $($lines.Count)"

# Find the bad block start and end
$badStart = -1
$badEnd = -1

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($badStart -eq -1 -and $lines[$i] -match 'india-map-wrapper-PLACEHOLDER_DELETE_LINE') {
        $badStart = $i - 2  # include the 2 lines before (the orphaned section placeholder)
        Write-Host "Bad block starts at line $($i+1): $($lines[$i])"
    }
    if ($badStart -ne -1 -and $lines[$i] -match 'OUR DIRECTORS SECTION \(MCA ROC KANPUR') {
        $badEnd = $i - 1
        Write-Host "Bad block ends at line $($i+1)"
        break
    }
}

if ($badStart -eq -1 -or $badEnd -eq -1) {
    Write-Host "Could not find block boundaries. Searching..."
    for ($i = 630; $i -lt [Math]::Min(900, $lines.Count); $i++) {
        Write-Host "$($i+1): $($lines[$i])"
    }
} else {
    Write-Host "Removing lines $($badStart+1) to $($badEnd+1)"
    $cleaned = @()
    $cleaned += $lines[0..($badStart-1)]
    $cleaned += $lines[$badEnd..($lines.Count-1)]
    $cleaned | Set-Content $file -Encoding UTF8
    Write-Host "Done! New line count: $($cleaned.Count)"
}
