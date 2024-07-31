const player = document.getElementById('player');
let keysPressed = {};


player.style.position = 'relative';
player.style.top = player.style.top || '0px';
player.style.left = player.style.left || '0px';

document.addEventListener('keydown', function(event) {
    keysPressed[event.key.toLowerCase()] = true;

    if (keysPressed['arrowup'] || keysPressed['w']) {
        player.style.top = (parseInt(player.style.top) - 64) + 'px';
    }
    
    else if (keysPressed['arrowdown'] || keysPressed['s']) {
        player.style.top = (parseInt(player.style.top) + 64) + 'px';
    }
    
    else if (keysPressed['arrowleft'] || keysPressed['a']) {
        player.style.left = (parseInt(player.style.left) - 64) + 'px';
    }
   
    else if (keysPressed['arrowright'] || keysPressed['d']) {
        player.style.left = (parseInt(player.style.left) + 64) + 'px';
    }
});

document.addEventListener('keyup', function(event) {
    keysPressed[event.key.toLowerCase()] = false;
});
