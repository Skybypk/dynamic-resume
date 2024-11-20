var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resumeoutput');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Gather form data
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
    };
    // Generate resume
    generateResume(resumeData);
});
function generateResume(data) {
    resumeOutput.innerHTML = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(data.name, "</p>\n      <p><strong>Email:</strong> ").concat(data.email, "</p>\n      <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(data.education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(data.experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(data.skills, "</p>\n  ");
}
