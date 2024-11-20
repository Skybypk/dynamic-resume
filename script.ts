 // script.ts
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(form);
  const resumeData: ResumeData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      education: formData.get('education') as string,
      experience: formData.get('experience') as string,
      skills: formData.get('skills') as string,
  };

  // Generate resume
  generateResume(resumeData);
});

function generateResume(data: ResumeData): void {
  resumeOutput.innerHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <h3>Education</h3>
      <p>${data.education}</p>
      <h3>Experience</h3>
      <p>${data.experience}</p>
      <h3>Skills</h3>
      <p>${data.skills}</p>
  `;
}
