class ProjectCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        <style>
            .card {
                background-color: var(--color-primary);
                border-radius: 1rem;
                padding: 2rem;

                img {
                width: 100%;
                }
                a {
                text-decoration: none;
                }
            }
                h2,
                p {
                color: var(--color-primary-text);
                }
        </style>
        <div class="card">
            <a target="_blank">
                <picture>
                    <img />
                </picture>
                <h2></h2>
                <p></p>
            </a>
        </div>`;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("h2").textContent =
      this.getAttribute("title") || "Untitled Project";

    this.shadowRoot.querySelector("img").src =
      this.getAttribute("imageSrc") || "placeholder.jpg";

    this.shadowRoot.querySelector("img").alt =
      this.getAttribute("imageAlt") || "placeholder.jpg";

    this.shadowRoot.querySelector("p").textContent =
      this.getAttribute("description") || "No description provided.";

    this.shadowRoot.querySelector("a").href = this.getAttribute("url") || "#";
  }
  disconnectedCallback() {}
}

customElements.define("project-card", ProjectCard);

const projects = [
  {
    title: "Patriots and Paws",
    imageSrc: "assets/pap_ss.png",
    imageAlt: "Screenshot of Patriots and Paws web application",
    description: "User and admin portals for veteran non-profit",
    url: "https://github.com/TritonSE/PAP-Inventory-Processing",
  },
  {
    title: "Call Blackline",
    imageSrc: "assets/cbl_ss.png",
    imageAlt: "Call Blackline splashscreens",
    description:
      "Mobile application to support minorities against discrimination",
    url: "https://github.com/TritonSE/CBL-Mobile-Application",
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

const container = document.getElementById("projects-section");

projects.forEach((p) => {
  const card = document.createElement("project-card");
  card.setAttribute("title", p.title);
  card.setAttribute("imageSrc", p.imageSrc);

  card.setAttribute("imageAlt", p.imageAlt);
  card.setAttribute("description", p.description);
  card.setAttribute("url", p.url);
  container.appendChild(card);
});
