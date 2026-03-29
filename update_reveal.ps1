
$content = Get-Content src/styles.css
$content = $content -replace "\.reveal \{\s*opacity: 0;\s*transform: translateY\(40px\) scale\(0\.97\);\s*transition: opacity 1s cubic-bezier\(0\.16, 1, 0\.3, 1\), transform 1s cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*will-change: opacity, transform;\s*\}", ".reveal { opacity: 0; transform: translateY(60px) scale(0.95); filter: blur(10px); transition: opacity 1.2s cubic-bezier(0.19, 1, 0.22, 1), transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), filter 1.2s cubic-bezier(0.19, 1, 0.22, 1); will-change: opacity, transform, filter; }"

$content = $content -replace "\.reveal\.visible \{\s*opacity: 1;\s*transform: translateY\(0\) scale\(1\);\s*\}", ".reveal.visible { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }"

Set-Content src/styles.css $content

