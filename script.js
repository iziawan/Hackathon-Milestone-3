const form = document.getElementById('resume-form');
const resumeContent = document.getElementById('resume-content');

 form.addEventListener('submit', function(event) {
    event.preventDefault();

     const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        degree: document.getElementById('degree').value,
        school: document.getElementById('school').value,
        gradYear: parseInt(document.getElementById('gradYear').value),
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        years: parseInt(document.getElementById('years').value),
        skills: document.getElementById('skills').value.split(',').map(skill => skill.trim())
    };

     generateResume(formData);
});

 function generateResume(data) {
    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p>Email: ${data.email}</p>
        <h4>Education</h4>
        <p>${data.degree} from ${data.school} (Class of ${data.gradYear})</p>
        <h4>Work Experience</h4>
        <p>${data.jobTitle} at ${data.company} (${data.years} years)</p>
        <h4>Skills</h4>
        <ul>
            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
}
