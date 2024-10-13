export function redireciona() {
    var home = document.getElementById("home");
    var mais = document.getElementById("mais");
    var animais = document.getElementById("animais");
    var plantas = document.getElementById("plantas");
    var prob = document.getElementById("perigo");

    home.onclick = function() {
        localStorage.setItem("s1", "true");
        window.location.href = "index.html";
    };
    
    mais.onclick = function() {
        localStorage.setItem("s2", "true");
        window.location.href = "mais.html";
    };

    animais.onclick = function() {
        localStorage.setItem("s3", "true");
        window.location.href = "animais.html";
    };
    
    plantas.onclick = function() {
        localStorage.setItem("s4", "true");
        window.location.href = "plantas.html";
    };

    prob.onclick = function() {
        localStorage.setItem("s5", "true");
        window.location.href = "problemas.html";
    }
}