function Voting() {
    const userName = document.getElementById("nameInput").value;
    const mobileNumber = document.getElementById("mobileInput").value;
    const vote = document.getElementById("floatingSelect").value;

    if (!userName || !mobileNumber || !vote) {
        alert("Please fill all the fields.");
    } else {
        alert(`Thank you for voting, ${userName}!\nYou voted for: ${vote}`);
    }

    document.getElementById("nameInput").value = "";
    document.getElementById("mobileInput").value = "";
    document.getElementById("floatingSelect").value = "";

}
