const infoPanel = document.getElementById('info-panel');
const timeline = document.getElementById('timeline');

const content = {
  education: {
    hover: "Curious beginnings, sparked by Machine Learning and networks...",
    click: `
      <strong>Education:</strong><br>
      - B.Tech in Computer Science<br>
      - ML school project as a turning point<br>
      - Built a mail client in Computer Networks
    `,
    timeline: [
      "2019 – Entered CS program",
      "2021 – ML project changed trajectory",
      "2022 – Built mail client"
    ]
  },
  experience: {
    hover: "Two years of code, countless stories written in logic...",
    click: `
      <strong>Experience:</strong><br>
      - 2 years as Software Development Engineer<br>
      - API development, GUI design, security<br>
      - Collaborative feedback and iterative design
    `,
    timeline: [
      "2023 – Joined as SDE",
      "2024 – Led visual storytelling project",
      "2025 – Integrated art into systems"
    ]
  },
  hobbies: {
    hover: "Beyond syntax lies soul—art, poetry, and expressive design...",
    click: `
      <strong>Hobbies:</strong><br>
      - Visual storytelling & poetic layouts<br>
      - Painting, sketching, and digital art<br>
      - Exploring emotional resonance in design
    `,
    timeline: [
      "Always – Art as a companion",
      "2023 – First poetic portfolio draft",
      "2025 – Vision for immersive self-representation"
    ]
  }
};

document.querySelectorAll('.nav-btn').forEach(btn => {
  const section = btn.dataset.section;

  btn.addEventListener('mouseover', () => {
    infoPanel.innerHTML = content[section].hover;
    timeline.innerHTML = '';
  });

  btn.addEventListener('click', () => {
    infoPanel.innerHTML = content[section].click;
    timeline.innerHTML = content[section].timeline.map(entry => `<div class="timeline-entry">${entry}</div>`).join('');
  });
});
