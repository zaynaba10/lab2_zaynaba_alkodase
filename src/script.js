document.getElementById('navToggle').addEventListener('click', function(event) {
    var navbar = document.getElementById('mobileNav');
    navbar.classList.add('visible');
    event.stopPropagation(); // Prevents the click event from propagating to the document
});

document.getElementById('navClose').addEventListener('click', function() {
    var navbar = document.getElementById('mobileNav');
    navbar.classList.remove('visible');
});

document.addEventListener('click', function(event) {
    var navbar = document.getElementById('mobileNav');
    var navToggle = document.getElementById('navToggle');
    if (!navbar.contains(event.target) && !navToggle.contains(event.target)) {
        navbar.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mobileNav');
    navbar.classList.remove('visible');  
});


document.querySelectorAll('.toggleIconanswer').forEach(function(icon) {
    icon.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var extraInfo = document.getElementById(targetId);
        
        // Hide all other extraInfo elements and reset icons
        document.querySelectorAll('.answer').forEach(function(info) {
            if (info !== extraInfo) {
                info.classList.add('hidden');
                // Reset other icons to plus
                var otherIcon = document.querySelector(`img[data-target="${info.id}"]`);
                if (otherIcon) {
                    otherIcon.src = '/src/assets/plus-circle.png';
                }
            }
        });

        // Toggle the clicked extraInfo
        if (extraInfo.classList.contains('hidden')) {
            extraInfo.classList.remove('hidden');
            this.src = '/src/assets/minus-circle.png';
        } else {
            extraInfo.classList.add('hidden');
            this.src = '/src/assets/plus-circle.png';
        }
    });
});