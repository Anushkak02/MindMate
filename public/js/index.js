document.getElementById("search-button").addEventListener("keypress", function(event) {
    if(event.key == "Enter"){
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        if (searchInput === "intro" || searchInput === "introduction") {
            window.location.hash = "introduction";
        } else if (searchInput === "guide" || searchInput == "guidance") {
            window.location.hash = "Guidance";
        }else if (searchInput === "con" || searchInput == "contact") {
            window.location.hash = "contact-section";
        }else if (searchInput === "bipolar" || searchInput == "eat" || searchInput == "eating" || searchInput == "ptsd" || searchInput == "depres" || searchInput == "depression" || searchInput == "anxiety" || searchInput == "anxi" || searchInput == "stress") {
            window.location.hash = "Guidance";
        }else if (searchInput === "questions" || searchInput == "questionnaire" || searchInput == "questionairre" || searchInput == "quest"){
            window.location.hash = "questionnaire";
        }else {
            alert("No section found for: " + searchInput);
        }
    }
});

function sendEmail() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const issues = document.getElementById('issues').value;
    const contact = document.getElementById('contact').value;
    const comments = document.getElementById('comments').value;

    // Construct the email body
    const body = `
      Name: ${name}%0D%0A
      Age: ${age}%0D%0A
      Occupation: ${occupation}%0D%0A
      Issues: ${issues}%0D%0A
      Contact Number: ${contact}%0D%0A
      Comments: ${comments}
    `;

    // Mailto link with to, cc, and bcc
    const mailtoLink = `mailto:anu.kaushik02@gmail.com?cc=devisht.nayyar30@gmail.com.com&bcc=ua2808@srmist.edu.in.com&subject=New Form Submission&body=${encodeURIComponent(body)}`;

    // Open the mail client
    window.location.href = mailtoLink;
  }
