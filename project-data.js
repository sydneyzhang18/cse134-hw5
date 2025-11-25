const container = document.getElementById("projects-section");
const btnLocal = document.getElementById("load-local");
const btnRemote = document.getElementById("load-remote");

const serverUrl =
  "https://my-json-server.typicode.com/sydneyzhang18/cse134-hw5-db/projects";

const localData = [
  {
    title: "Call Blackline",
    imageSrc: "assets/cbl_ss.png",
    imageAlt: "Call Blackline splashscreens",
    description:
      "Mobile application to support minorities against discrimination",
    url: "https://github.com/TritonSE/CBL-Mobile-Application",
  },
  {
    title: "Patriots and Paws",
    imageSrc: "assets/pap_ss.png",
    imageAlt: "Screenshot of Patriots and Paws web application",
    description: "User and admin portals for veteran non-profit",
    url: "https://github.com/TritonSE/PAP-Inventory-Processing",
  },
  {
    title: "Proofessor",
    imageSrc: "assets/ersp_poster.png",
    imageAlt: "Proofessor research poster",
    description:
      "AI-based tutor for students learning to write mathematical proofs",
    url: "https://github.com/rkthomps/ai-proof-tutorg",
  },
  {
    title: "Jamplate",
    imageSrc: "assets/dlab.png",
    imageAlt: "Jamplate plugin screenshot",
    description:
      "FigJam plugin that leverage GPT-4 to support ideation processes.",
    url: "https://dl.acm.org/doi/pdf/10.1145/3640543.3645196",
  },
];
localStorage.setItem("projects", JSON.stringify(localData));

function clearProjects() {
  container.innerHTML = "";
}

function renderProjects(projects) {
  clearProjects();

  projects.forEach((p) => {
    const card = document.createElement("project-card");

    card.setAttribute("title", p.title);
    card.setAttribute("imageSrc", p.imageSrc);
    card.setAttribute("imageAlt", p.imageAlt);
    card.setAttribute("description", p.description);
    card.setAttribute("url", p.url);

    container.appendChild(card);
  });
}

// Load Local
btnLocal.addEventListener("click", () => {
  const localString = localStorage.getItem("projects");

  if (!localString) {
    alert("No local data found in localStorage!");
    return;
  }

  const projects = JSON.parse(localString);
  renderProjects(projects);
});

// Load Remote
btnRemote.addEventListener("click", async () => {
  try {
    const response = await fetch(serverUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch remote data");
    }

    const projects = await response.json();
    renderProjects(projects);
  } catch (err) {
    console.error(err);
    alert("Error loading remote data");
  }
});
