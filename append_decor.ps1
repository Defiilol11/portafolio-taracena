
$content = Get-Content src/styles.css
$decorations = @"

      /* --- DECORATIVE DRAWINGS (GRID & SHAPES) --- */
      .decor-plus {
        position: absolute;
        width: 24px;
        height: 24px;
        opacity: 0.3;
        pointer-events: none;
        animation: floatShape 8s ease-in-out infinite alternate;
        z-index: 0;
      }
      .decor-plus::before, .decor-plus::after {
        content: "";
        position: absolute;
        background: var(--gold);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .decor-plus::before { width: 1px; height: 100%; }
      .decor-plus::after { width: 100%; height: 1px; }
      
      .decor-circle {
        position: absolute;
        width: 40px;
        height: 40px;
        border: 1px dashed var(--gold);
        border-radius: 50%;
        opacity: 0.2;
        pointer-events: none;
        animation: rotateShape 15s linear infinite;
        z-index: 0;
      }

      .decor-line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        opacity: 0.2;
        pointer-events: none;
      }

      @keyframes floatShape {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-30px) rotate(15deg); }
      }
      @keyframes rotateShape {
        from { transform: rotate(0deg) scale(1); }
        to { transform: rotate(360deg) scale(1.1); }
      }
"@
$content += $decorations
Set-Content src/styles.css $content

