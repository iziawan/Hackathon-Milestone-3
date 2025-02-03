document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    // Declare variables outside the if block
    let name = "";
    let email = "";
    let phone = "";
    let education = "";
    let experience = "";
    let skills = "";

    // Assign values only if elements exist
    if (
      nameElement &&
      emailElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      name = nameElement.value;
      email = emailElement.value;
      phone = phoneElement.value;
      education = educationElement.value;
      experience = experienceElement.value;
      skills = skillsElement.value;
    } else {
      console.error("One or more elements are missing");
      return; // Exit if any elements are missing
    }

    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error("The resume output element is missing");
    }
  });
