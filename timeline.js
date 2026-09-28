// ============================================================
// INNOVATION IN SOUND DESIGN
// HOW THE HELL DID WE GET HERE?
// TREE / GENEALOGY ENGINE
// ============================================================

const container = document.getElementById("timeline-container");


// ------------------------------------------------------------
// TREE STRUCTURE
// ------------------------------------------------------------
//
// The horizontal trunk = conceptual journey through time.
// Branches = people / inventions / investigations.
// Context nodes = changes in the question or medium.
//
// IMPORTANT:
// This is a conceptual genealogy, NOT a claim that every
// connected person directly influenced the next person.
// Relationship types are stored separately below.
// ------------------------------------------------------------

const tree = [

  // ===== EARLY QUESTION =====================================

  {
    id: "aristotle",
    x: 180,
    y: 920,
    type: "node"
  },

 { id:"research-reactivation", x:600, y:920, type:"context", title:"THE QUESTION RETURNS", date:"12th–13th century", subtitle:"Aristotle's colour theory returns to active research" },

{ id:"renaissance", x:1050, y:920, type:"context", title:"RENAISSANCE", date:"16th century", subtitle:"Music, colour & proportion" },

  {
    id: "arcimboldo",
    x: 1050,
    y: 650,
    type: "node"
  },


  // ===== KIRCHER / NEWTON / CASTEL ==========================

  {
    id: "kircher",
    x: 1450,
    y: 610,
    type: "node"
  },

  {
    id: "newton",
    x: 1450,
    y: 1230,
    type: "node"
  },

  {
    id: "castel",
    x: 1900,
    y: 920,
    type: "node"
  },

  {
    id: "field",
    x: 2350,
    y: 920,
    type: "node"
  },

  { id:"colour-music", x:2750, y:920, type:"context", title:"COLOUR MUSIC", date:"19th–20th century", subtitle:"Many ways to make music visible" },


  // ===== COLOUR MUSIC BRANCHES ===============================

  {
    id: "bishop",
    x: 3200,
    y: 570,
    type: "node"
  },

  {
    id: "rimington",
    x: 3200,
    y: 780,
    type: "node"
  },

  {
    id: "greenewalt",
    x: 3200,
    y: 1100,
    type: "node"
  },

  {
    id: "scriabin",
    x: 3200,
    y: 1370,
    type: "node"
  },

  {
    id: "wilfred",
    x: 3650,
    y: 570,
    type: "node"
  },

  {
    id: "ginna-corra",
    x: 3650,
    y: 920,
    type: "node"
  },


  // ===== MEDIUM CHANGE: FILM ================================

  { id:"film", x:4100, y:920, type:"context", title:"FILM", date:"1920s", subtitle:"Visual form + movement + time" },


  // ===== VISUAL MUSIC BRANCH ================================

  {
    id: "ruttmann",
    x: 4550,
    y: 600,
    type: "node"
  },

  {
    id: "richter",
    x: 4550,
    y: 900,
    type: "node"
  },

  {
    id: "eggeling",
    x: 4550,
    y: 1200,
    type: "node"
  },


  // ===== GRAPHICAL SOUND ====================================

  { id:"graphical-sound", x:5000, y:920, type:"context", title:"GRAPHICAL SOUND", date:"1930s", subtitle:"Visual form becomes sound" },

  {
    id: "pfenninger",
    x: 5450,
    y: 700,
    type: "node"
  },

  {
    id: "fischinger",
    x: 5450,
    y: 1100,
    type: "node"
  },

  {
    id: "mclaren",
    x: 5900,
    y: 920,
    type: "node"
  },

  {
    id: "oram",
    x: 6300,
    y: 650,
    type: "node"
  },


  // ===== DIGITAL DRAWING ====================================

  { id:"digital-drawing", x:6300, y:920, type:"context", title:"DIGITAL DRAWING", date:"1960s onward", subtitle:"Drawing becomes data" },

  {
    id: "sutherland",
    x: 6650,
    y: 650,
    type: "node"
  },

  {
    id: "graphic-1",
    x: 6650,
    y: 1100,
    type: "node"
  },


  // ===== END POINT ==========================================

  {
    id: "paint-with-music",
    x: 7050,
    y: 920,
    type: "node"
  },

  {
  id: "whats-next",
  x: 7500,
  y: 920,
  type: "context",
  title: "WHAT'S NEXT?",
  subtitle: "Your turn."
},

];


// ------------------------------------------------------------
// CONCEPTUAL TRUNK
// ------------------------------------------------------------
//
// These are the major turning points in the question.
//
// The trunk is continuous. Everything ultimately connects
// back to it.
// ------------------------------------------------------------

const trunk = [
  { x: 100,  y: 920 },
  { x: 600,  y: 920 },
  { x: 1050, y: 920 },
  { x: 1450, y: 920 },
  { x: 1900, y: 920 },
  { x: 2350, y: 920 },
  { x: 2750, y: 920 },
  { x: 3200, y: 920 },
  { x: 3650, y: 920 },
  { x: 4100, y: 920 },
  { x: 4550, y: 920 },
  { x: 5000, y: 920 },
  { x: 5450, y: 920 },
  { x: 5900, y: 920 },
  { x: 6300, y: 920 },
  { x: 6650, y: 920 },
  { x: 7050, y: 920 },
  { x: 7350, y: 920 }
];


// ------------------------------------------------------------
// BRANCHES
// ------------------------------------------------------------
//
// Every branch starts at the trunk.
// This is what stops nodes floating independently.
//
// "direct"      = documented development / influence
// "parallel"    = related investigation, not direct influence
// "conceptual"  = shared conceptual route
// ------------------------------------------------------------

const branches = [

  // Aristotle → research → Renaissance
  {
    from: "aristotle",
    to: "research-reactivation",
    relation: "conceptual"
  },

  {
    from: "research-reactivation",
    to: "renaissance",
    relation: "conceptual"
  },

  // Renaissance → Arcimboldo
  {
    from: "renaissance",
    to: "arcimboldo",
    relation: "direct"
  },


  // Kircher / Newton → Castel
  {
    from: "kircher",
    to: "castel",
    relation: "direct"
  },

  {
    from: "newton",
    to: "castel",
    relation: "influence"
  },

  {
    from: "renaissance",
    to: "kircher",
    relation: "conceptual"
  },

  {
    from: "renaissance",
    to: "newton",
    relation: "conceptual"
  },


  // Castel → Field / Colour Music
  {
    from: "castel",
    to: "field",
    relation: "conceptual"
  },

  {
    from: "field",
    to: "colour-music",
    relation: "conceptual"
  },

  {
    from: "castel",
    to: "colour-music",
    relation: "conceptual"
  },


  // Colour Music → parallel investigations
  {
    from: "colour-music",
    to: "bishop",
    relation: "parallel"
  },

  {
    from: "colour-music",
    to: "rimington",
    relation: "parallel"
  },

  {
    from: "colour-music",
    to: "greenewalt",
    relation: "parallel"
  },

  {
    from: "colour-music",
    to: "scriabin",
    relation: "parallel"
  },

  {
    from: "colour-music",
    to: "wilfred",
    relation: "parallel"
  },

  {
    from: "colour-music",
    to: "ginna-corra",
    relation: "parallel"
  },


  // Ginna & Corra → film
  {
    from: "ginna-corra",
    to: "film",
    relation: "direct"
  },


  // Film → visual music
  {
    from: "film",
    to: "ruttmann",
    relation: "parallel"
  },

  {
    from: "film",
    to: "richter",
    relation: "parallel"
  },

  {
    from: "film",
    to: "eggeling",
    relation: "parallel"
  },


  // Film → graphical sound
  {
    from: "film",
    to: "graphical-sound",
    relation: "conceptual"
  },


  // Graphical sound → Pfenninger / Fischinger
  {
    from: "graphical-sound",
    to: "pfenninger",
    relation: "parallel"
  },

  {
    from: "graphical-sound",
    to: "fischinger",
    relation: "parallel"
  },


  // Pfenninger → McLaren
  {
    from: "pfenninger",
    to: "mclaren",
    relation: "influence"
  },

  // Fischinger is parallel, not direct
  {
    from: "fischinger",
    to: "mclaren",
    relation: "parallel"
  },


  // McLaren → Oram
// Conceptual continuation of graphical sound into
// electronic sound design — NOT a claim of direct influence.
{
  from: "mclaren",
  to: "oram",
  relation: "conceptual"
},


// Oram → Digital Drawing
{
  from: "oram",
  to: "digital-drawing",
  relation: "conceptual"
},


// Sutherland = technical enabler for digital drawing
{
  from: "digital-drawing",
  to: "sutherland",
  relation: "parallel"
},


// Digital Drawing → Graphic 1
{
  from: "digital-drawing",
  to: "graphic-1",
  relation: "conceptual"
},


// Graphic 1 → Paint With Music
{
  from: "graphic-1",
  to: "paint-with-music",
  relation: "direct"
}

];


// ------------------------------------------------------------
// CREATE CANVAS
// ------------------------------------------------------------

const canvas = document.createElement("div");
canvas.id = "genealogy-canvas";

const svg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);

svg.id = "connections";
svg.setAttribute("width", "7500");
svg.setAttribute("height", "1900");
svg.setAttribute("viewBox", "0 0 7500 1900");

canvas.appendChild(svg);

const nodeLayer = document.createElement("div");
nodeLayer.id = "node-layer";

canvas.appendChild(nodeLayer);

container.innerHTML = "";
container.appendChild(canvas);


// ------------------------------------------------------------
// SVG HELPERS
// ------------------------------------------------------------

function createPath(className, d) {

  const path = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  path.setAttribute("d", d);
  path.setAttribute("class", className);

  svg.appendChild(path);

  return path;
}


// ------------------------------------------------------------
// DRAW MAIN TRUNK
// ------------------------------------------------------------

let trunkPath = `M ${trunk[0].x} ${trunk[0].y}`;

for (let i = 1; i < trunk.length; i++) {

  trunkPath += ` L ${trunk[i].x} ${trunk[i].y}`;

}

createPath("connection connection-direct", trunkPath);


// ------------------------------------------------------------
// NODE LOOKUP
// ------------------------------------------------------------

const positions = {};

tree.forEach(item => {
  positions[item.id] = item;
});


// ------------------------------------------------------------
// DRAW TREE BRANCHES
// ------------------------------------------------------------
//
// Branches use a smooth curve rather than random giant arcs.
// They visibly originate from the main trunk.
// ------------------------------------------------------------

branches.forEach(branch => {

  const from = positions[branch.from];
  const to = positions[branch.to];

  if (!from || !to) return;

  const startX = from.x;
  const startY = from.y;

  const endX = to.x;
  const endY = to.y;

  const distance = Math.abs(endX - startX);

  const curve = Math.max(60, distance * 0.35);

  const direction =
    endY < startY ? -1 : 1;

  const controlY =
    startY + (Math.abs(endY - startY) * 0.45 * direction);

  const d = `
    M ${startX} ${startY}
    C
      ${startX + curve} ${controlY},
      ${endX - curve} ${endY},
      ${endX} ${endY}
  `;

  let className = "connection";

  if (branch.relation === "direct") {
    className += " connection-direct";
  }

  if (branch.relation === "influence") {
    className += " connection-influence";
  }

  if (branch.relation === "parallel") {
    className += " connection-parallel";
  }

  if (branch.relation === "conceptual") {
    className += " connection-context";
  }

  createPath(className, d);

});


// ------------------------------------------------------------
// ADD TRUNK JUNCTION MARKERS
// ------------------------------------------------------------

trunk.forEach(point => {

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  circle.setAttribute("cx", point.x);
  circle.setAttribute("cy", point.y);
  circle.setAttribute("r", "5");
  circle.setAttribute("class", "trunk-junction");

  svg.appendChild(circle);

});


// ------------------------------------------------------------
// CREATE HTML NODES
// ------------------------------------------------------------

tree.forEach(item => {

  if (item.type === "context") {

    createContextNode(item);

  } else {

    createPersonNode(item);

  }

});


// ------------------------------------------------------------
// CONTEXT NODE
// ------------------------------------------------------------

function createContextNode(item) {

  const element = document.createElement("div");

  element.className = "context-node";

  element.style.left = `${item.x - 120}px`;
  element.style.top = `${item.y - 35}px`;

  element.innerHTML = `
  <span class="context-title">
    ${item.title}
  </span>
  <span class="context-date">
    ${item.date || ""}
  </span>
  <span class="context-subtitle">
    ${item.subtitle}
  </span>
`;

  nodeLayer.appendChild(element);

}


// ------------------------------------------------------------
// PERSON / INVENTION NODE
// ------------------------------------------------------------

function createPersonNode(item) {

  const data = nodes.find(node => node.id === item.id);

  if (!data) {
    console.warn(`No node data found for: ${item.id}`);
    return;
  }

  const wrapper = document.createElement("div");

  wrapper.className = "genealogy-node";

  wrapper.style.left = `${item.x - 120}px`;
  wrapper.style.top = `${item.y - 45}px`;

  const button = document.createElement("button");

  button.className = "genealogy-button";

  button.innerHTML = `
    <span class="genealogy-dot"></span>

    <span class="genealogy-text">

      <span class="genealogy-title">
        ${data.title}
      </span>

      <span class="genealogy-date">
        ${data.date}
      </span>

    </span>
  `;

  button.addEventListener("click", () => {

    openNode(data);

  });

  wrapper.appendChild(button);

  nodeLayer.appendChild(wrapper);

}


// ------------------------------------------------------------
// MODAL
// ------------------------------------------------------------

const modal = document.getElementById("node-modal");

const closeButton =
  document.getElementById("close-modal");

const backdrop =
  document.querySelector(".modal-backdrop");


function openNode(data) {

  document.getElementById("node-date").textContent =
    data.date || "";

  document.getElementById("node-title").textContent =
    data.title || "";

  document.getElementById("node-role").textContent =
    data.role || "";

  document.getElementById("node-question").textContent =
    data.question || "";

  document.getElementById("node-idea").textContent =
    data.idea || "";

  document.getElementById("node-did").textContent =
    data.did || "";

  document.getElementById("node-matters").textContent =
    data.matters || "";

  document.getElementById("node-works").textContent =
  data.works || "";

const mediaContainer =
  document.getElementById("node-media");

mediaContainer.innerHTML = "";

if (data.media) {

  if (data.media.video) {

    const iframe = document.createElement("iframe");

    iframe.className = "media-video";
    iframe.src = data.media.video;
    iframe.title = data.title || "Video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    mediaContainer.appendChild(iframe);

  } else if (data.media.image) {

    const image = document.createElement("img");

    image.className = "media-image";
    image.src = data.media.image;
    image.alt = data.title || "";

    mediaContainer.appendChild(image);

  }

}

modal.classList.remove("hidden");

}


function closeModal() {

  modal.classList.add("hidden");

}


closeButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// ------------------------------------------------------------
// INITIAL POSITION
// ------------------------------------------------------------

container.scrollLeft = 0;
container.scrollTop = 250; 


// ------------------------------------------------------------
// WHEEL ZOOM
// ------------------------------------------------------------

let zoom = 0.67;


// Apply initial timeline scale
canvas.style.transform =
  `scale(${zoom})`;

canvas.style.transformOrigin =
  "top left";

canvas.style.width =
  `${7800 * zoom}px`;

canvas.style.height =
  `${1900 * zoom}px`;


container.addEventListener(
  "wheel",
  event => {

    if (!event.ctrlKey) return;

    event.preventDefault();

    const oldZoom = zoom;

    zoom += event.deltaY < 0
      ? 0.1
      : -0.1;

    zoom = Math.max(
      0.55,
      Math.min(1.4, zoom)
    );

    if (zoom === oldZoom) return;

    canvas.style.transform =
      `scale(${zoom})`;

    canvas.style.width =
      `${7800 * zoom}px`;

    canvas.style.height =
      `${1900 * zoom}px`;

  },
  { passive: false }
);