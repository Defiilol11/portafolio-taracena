
function Update-File($Path, $Old, $New) {
    $Content = Get-Content $Path -Raw
    $Content = $Content.Replace($Old, $New)
    Set-Content $Path $Content
}

# 1. about.html
Update-File "src/app/components/about/about.html" "<section id=`"about`" style=`"background: var(--warm-white)`">" "<section id=`"about`" style=`"background: var(--warm-white); overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"decor-circle`" style=`"top: 10%; right: -50px; width: 300px; height: 300px; opacity: 0.05;`"></div>
  <div class=`"decor-plus`" style=`"top: 85%; left: 8%;`"></div>
  <div class=`"decor-line`" style=`"top: 50%; right: -50px; width: 150px;`"></div>"

# 2. expertise.html
Update-File "src/app/components/expertise/expertise.html" "<section id=`"expertise`">" "<section id=`"expertise`" style=`"overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"orb`" style=`"width: 500px; height: 500px; top: -100px; left: -250px;`"></div>
  <div class=`"decor-plus`" style=`"top: 20%; right: 15%;`"></div>
  <div class=`"decor-circle`" style=`"bottom: 10%; right: 10%; width: 100px; height: 100px;`"></div>"

# 3. experience.html
Update-File "src/app/components/experience/experience.html" "<section id=`"journey`">" "<section id=`"journey`" style=`"overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"decor-line`" style=`"top: 30%; left: -50px; width: 250px;`"></div>
  <div class=`"decor-plus`" style=`"bottom: 20%; left: 5%;`"></div>
  <div class=`"orb`" style=`"width: 400px; height: 400px; bottom: -100px; right: -200px;`"></div>"

# 4. projects.html
Update-File "src/app/components/projects/projects.html" "<section id=`"projects`">" "<section id=`"projects`" style=`"overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"decor-circle`" style=`"top: 15%; right: 20%; width: 60px; height: 60px;`"></div>
  <div class=`"decor-plus`" style=`"top: 60%; left: 8%;`"></div>
  <div class=`"decor-line`" style=`"bottom: 20%; right: -50px; width: 200px;`"></div>"

# 5. contact.html
Update-File "src/app/components/contact/contact.html" "<section id=`"contact`">" "<section id=`"contact`" style=`"overflow: hidden; position: relative;`">
  <!-- Decorators -->
  <div class=`"orb`" style=`"width: 800px; height: 800px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.3;`"></div>
  <div class=`"decor-plus`" style=`"top: 30%; left: 20%;`"></div>
  <div class=`"decor-plus`" style=`"top: 70%; right: 20%;`"></div>
  <div class=`"decor-circle`" style=`"top: 10%; right: 30%; width: 80px; height: 80px;`"></div>"

# 6. portfolio.html
Update-File "src/app/pages/portfolio/portfolio.html" "<section class=`"portfolio-page`">" "<section class=`"portfolio-page`" style=`"position: relative; overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"orb`" style=`"width: 600px; height: 600px; top: -200px; left: -200px;`"></div>
  <div class=`"decor-line`" style=`"top: 150px; right: 0; width: 300px;`"></div>
  <div class=`"decor-plus`" style=`"top: 400px; right: 10%;`"></div>
  <div class=`"decor-circle`" style=`"bottom: 200px; left: 5%; width: 150px; height: 150px;`"></div>"

# 7. project-detail.html
Update-File "src/app/pages/project-detail/project-detail.html" "<article class=`"project-detail-page`" *ngIf=`"project`">" "<article class=`"project-detail-page`" *ngIf=`"project`" style=`"position: relative; overflow: hidden;`">
  <!-- Decorators -->
  <div class=`"orb`" style=`"width: 500px; height: 500px; top: -100px; right: -150px;`"></div>
  <div class=`"decor-plus`" style=`"top: 250px; left: 10%;`"></div>
  <div class=`"decor-line`" style=`"top: 500px; left: -100px; width: 400px;`"></div>
  <div class=`"decor-circle`" style=`"bottom: 300px; right: 5%; width: 120px; height: 120px;`"></div>"


