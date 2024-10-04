document.querySelector('#openModal').addEventListener('click', ()=>{
    document.querySelector('#modal').classList.toggle('hidden')
})


document.querySelector('#modal').addEventListener('click', function(event) {
    console.log("khkh");
    
    const formContact = document.getElementById('formContact');
    const modal = document.querySelector('#modal');
    if (!formContact.contains(event.target)) {
      modal.classList.add('hidden');
    }
  });

document.querySelector("#send-button").addEventListener('click',()=>{
  alert(`Thomas m'a dit de ne pas utiliser alert ! Jamais il a dit ! JAMAIS`)
})

