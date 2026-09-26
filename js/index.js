const view = document.querySelector('.latest__view');
const track = document.querySelector('.latest__track');

if (view && track) {
  track.innerHTML += track.innerHTML;   


//   เมาส์ hover 
  let paused = false;
  view.addEventListener('mouseenter', () => paused = true);
  view.addEventListener('mouseleave', () => paused = false);

  function loop() {
    if (!paused) {
      view.scrollTop += 1;                      
      if (view.scrollTop >= track.scrollHeight / 2) {
        view.scrollTop = 0;                         
      }
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// อันใหม่ 
const points = document.querySelectorAll('#timelineTrack .timeline-point');
  points.forEach(point => {
    point.addEventListener('mouseenter', () => point.classList.add('show'));
    point.addEventListener('mouseleave', () => point.classList.remove('show'));    
    point.addEventListener('click', () => {
      points.forEach(p => p.classList.remove('show'));
      point.classList.add('show');
    });
  });

