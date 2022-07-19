function checkPassword() {
    if (document.getElementById('password').value == 123){
        document.getElementById('HIDDENDIV').classList.remove('hidden');
        document.getElementById('FORMPOPUP').style.display='none';
    } else { alert('Invalid Password!'); password.setSelectionRange(0, password.value.length); }
}
function openForm() {
    document.getElementById("FORMPOPUP").style.display = "block";
}

function closeForm() {
    document.getElementById("FORMPOPUP").style.display = "none";
}