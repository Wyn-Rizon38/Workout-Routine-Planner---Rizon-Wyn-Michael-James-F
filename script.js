document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('workout-form');
  const workoutList = document.querySelector('#workout-list ul');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${exercise} - ${duration} mins, ${sets} sets, ${reps} reps</span>
      <button class="delete-btn">Delete</button>
    `;

    workoutList.appendChild(li);

    form.reset();
  });

  workoutList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });
});
