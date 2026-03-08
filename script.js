const halfCells = [
    // Data structure for half-cells with E0 values, n values, solution and electrode colors, and "inertness"
    // Format: { id, name, ion, e0, n, color (solution), metalColor (electrode), isInert (boolean) }
  { "id": 1, "name": "Fluorine", "metal": "Pt(s)", "ion": "F<sup>-</sup>", "e0": 2.87, "n": 1, "color": "rgba(255, 255, 200, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": true },
  { "id": 2, "name": "Gold(III)", "metal": "Au(s)", "ion": "Au<sup>3+</sup>", "e0": 1.50, "n": 3, "color": "rgba(250, 231, 125, 0.6)", "metalColor": "#FFD700", "isInert": false },
  { "id": 3, "name": "Chlorine", "metal": "Pt(s)", "ion": "Cl<sup>-</sup>", "e0": 1.36, "n": 2, "color": "rgba(200, 255, 200, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": true },
  { "id": 4, "name": "Silver", "metal": "Ag(s)", "ion": "Ag<sup>+</sup>", "e0": 0.80, "n": 1, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#C0C0C0", "isInert": false },
  { "id": 5, "name": "Iron(III)/Iron(II)", "metal": "Fe(s)", "ion": "Fe<sup>3+</sup>, Fe<sup>2+</sup>", "n": 1, "e0": 0.77, "color": "rgba(255, 165, 0, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": false },
  { "id": 6, "name": "Iodine", "metal": "Pt(s)", "ion": "I<sup>-</sup>, I<sub>2</sub>(s)", "e0": 0.54, "n": 2, "color": "rgba(139, 69, 19, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": true },
  { "id": 7, "name": "Copper(II)", "metal": "Cu(s)", "ion": "Cu<sup>2+</sup>",  "e0": 0.34, "n": 2, "color": "rgba(0, 163, 224, 0.6)", "metalColor": "#B87333", "isInert": false },
  { "id": 8, "name": "Copper(I)", "metal": "Cu(s)", "ion": "Cu<sup>+</sup>", "e0": 0.52, "n": 1, "color": "rgba(0, 255, 127, 0.6)", "metalColor": "#B87333", "isInert": false },
  { "id": 9, "name": "Tin(IV)/Tin(II)", "metal": "Pt(s)", "ion": "Sn<sup>4+</sup>, Sn<sup>2+</sup>",  "e0": 0.15, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": true },
  { "id": 10, "name": "Hydrogen (SHE)", "metal": "Pt(s)", "ion": "H<sub>2</sub>(g) | H<sup>+</sup>",  "e0": 0.00, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "rgb(223, 222, 222)", "isInert": true },
  { "id": 11, "name": "Lead(II)", "metal": "Pb(s)", "ion": "Pb<sup>2+</sup>", "e0": -0.13, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#778899", "isInert": false },
  { "id": 12, "name": "Tin(II)", "metal": "Sn(s)", "ion": "Sn<sup>2+</sup>", "e0": -0.14, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#A9A9A9", "isInert": false },
  { "id": 13, "name": "Nickel(II)", "metal": "Ni(s)", "ion": "Ni<sup>2+</sup>", "e0": -0.25, "n": 2, "color": "rgba(144, 238, 144, 0.6)", "metalColor": "#D3D3D3", "isInert": false },
  { "id": 14, "name": "Cobalt(II)", "metal": "Co(s)", "ion": "Co<sup>2+</sup>", "e0": -0.28, "n": 1, "color": "rgba(255, 182, 193, 0.6)", "metalColor": "#DCDCDC", "isInert": false },
  { "id": 15, "name": "Iron(II)", "metal": "Fe(s)", "ion": "Fe<sup>2+</sup>", "e0": -0.44, "n": 1, "color": "rgba(144, 238, 144, 0.6)", "metalColor": "#696969", "isInert": false },
  { "id": 16, "name": "Chromium(III)", "metal": "Cr(s)", "ion": "Cr<sup>3+</sup>", "e0": -0.74, "n": 1, "color": "rgba(147, 112, 219, 0.6)", "metalColor": "#BEBEBE", "isInert": false },
  { "id": 17, "name": "Zinc", "metal": "Zn(s)", "ion": "Zn<sup>2+</sup>", "e0": -0.76, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#BEBEBE", "isInert": false },
  { "id": 18, "name": "Aluminum", "metal": "Al(s)", "ion": "Al<sup>3+</sup>", "e0": -1.66, "n": 3, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#E0E0E0", "isInert": false },
  { "id": 19, "name": "Magnesium", "metal": "Mg(s)", "ion": "Mg<sup>2+</sup>", "e0": -2.37, "n": 2, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#D3D3D3", "isInert": false },
  { "id": 20, "name": "Lithium", "metal": "Li(s)", "ion": "Li<sup>+</sup>", "e0": -3.05, "n": 1, "color": "rgba(200, 200, 200, 0.6)", "metalColor": "#F5F5F5", "isInert": false }
];

let currentProblem = {};

function generateNewProblem() {
    let c1 = halfCells[Math.floor(Math.random() * halfCells.length)];
    let c2 = halfCells[Math.floor(Math.random() * halfCells.length)];
    do { c2 = halfCells[Math.floor(Math.random() * halfCells.length)]; } while (c1.id === c2.id);

    // Galvanic Logic: Higher E0 is Cathode
    const cathode = c1.e0 > c2.e0 ? c1 : c2;
    const anode = c1.e0 > c2.e0 ? c2 : c1;
    const R = 8.314; // J/(mol*K)
    const F = 96485; // C/mol

    // Calculate balanced electrons (n) for Nernst/Eq
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    const n = (cathode.n * anode.n) / gcd(cathode.n, anode.n);
    
    const e0 = cathode.e0 - anode.e0;
    const temp = parseFloat((((Math.random() - 0.25) * 50) + 298.15).toFixed(2));
    
    // Calculate Q = [Anode]^(n/nAnode) / [Cathode]^(n/nCathode)
    const concAnode = parseFloat((Math.random() * 1.0 + 0.1).toFixed(2));
    const concCathode = parseFloat((Math.random() * 1.0 + 0.1).toFixed(2));
    const Q = Math.pow(concAnode, n / anode.n) / Math.pow(concCathode, n / cathode.n);

    currentProblem = {
        cathode,
        anode,
        e0Cell: e0.toFixed(2),
        concCathode: concCathode,
        concAnode: concAnode,
        temp: temp,
        nCathode: cathode.n,
        nAnode: anode.n,
        n: (anode.n * cathode.n) / gcd(anode.n, cathode.n),
        // Pre-calculate answers
        valG0: ((-n * F * e0)/1000).toExponential(2), // Calc G in kJ/mol
        valK: Math.exp((n * F * e0) / (R * temp)).toExponential(2),
        valNernst: (e0 - ((R * temp) / (n * F)) * Math.log(Q)).toFixed(3),
        basicQuestionAnswered: true // Set to false if we want to force answering basic questions first
    };

    // Randomize which component we ask about
    currentProblem.questionTarget = Math.random() < 0.5 ? "anode" : "cathode";
    
    // Randomize visual position (Left vs Right)
    currentProblem.isAnodeLeft = Math.random() < 0.5;

    setupPracticeMode();
    updateUI();
}

function updateModeLabels(isGalvanic) {

    const labels = document.querySelectorAll('.mode-label');
    if (isGalvanic) {
        labels[0].style.opacity = "1";
        labels[1].style.opacity = "0.5";
    } else {
        labels[0].style.opacity = "0.5";
        labels[1].style.opacity = "1";
    }
}

function updateViewLabels(isPractice) {
    const labels = document.querySelectorAll('.view-label');
    if (!isPractice) {
        labels[0].style.opacity = "1";
        labels[1].style.opacity = "0.5";
    } else {
        labels[0].style.opacity = "0.5";
        labels[1].style.opacity = "1";
    }
}

function updateParametersDisplay(isPractice) {
    const display = document.getElementById('params-display');

    if (isPractice) {
        // Practice Mode: Obfuscate which is anode/cathode
        const p = currentProblem;
        const cells = [
            { name: p.anode.name, conc: p.concAnode, e0: p.anode.e0 },
            { name: p.cathode.name, conc: p.concCathode, e0: p.cathode.e0 }
        ];
        
        // Simple shuffle to randomize display order
        if (Math.random() < 0.5) cells.reverse();

        display.innerHTML = `
            <p><strong>Half-Cell A:</strong> ${cells[0].name}, ${cells[0].conc} M (E&deg; = ${cells[0].e0} V)<br>
            <strong>Half-Cell B:</strong> ${cells[1].name}, ${cells[1].conc} M (E&deg; = ${cells[1].e0} V) <br>
            <strong>Temperature:</strong> ${currentProblem.temp} K</p>
        `;
    } else {
        // Simulation Mode: Show explicit details
        display.innerHTML = `
            <p><strong>Anode:</strong> ${currentProblem.anode.name} (${currentProblem.concAnode}M)<br>
            <strong>Cathode:</strong> ${currentProblem.cathode.name} (${currentProblem.concCathode}M)<br>
            <strong>Temperature:</strong> ${currentProblem.temp} K</p>
        `;
    }
}
function updateSolutionColors() {
    const leftColor = currentProblem.isAnodeLeft ? currentProblem.anode.color : currentProblem.cathode.color;
    const rightColor = currentProblem.isAnodeLeft ? currentProblem.cathode.color : currentProblem.anode.color;
    
    document.getElementById('left-liquid').style.backgroundColor = leftColor;
    document.getElementById('right-liquid').style.backgroundColor = rightColor;
}

function updateElectrodes() {
    const leftStrip = document.getElementById('left-electrode');
    const rightStrip = document.getElementById('right-electrode');
    
    const leftCell = currentProblem.isAnodeLeft ? currentProblem.anode : currentProblem.cathode;
    const rightCell = currentProblem.isAnodeLeft ? currentProblem.cathode : currentProblem.anode;

    leftStrip.style.backgroundColor = leftCell.metalColor;
    rightStrip.style.backgroundColor = rightCell.metalColor;

    // Visual hint: If inert, make the electrode look like a wire
    leftStrip.style.width = leftCell.isInert ? "6px" : "25px";
    rightStrip.style.width = rightCell.isInert ? "6px" : "25px";
    
    leftStrip.style.left = leftCell.isInert ? "30px" : "21px";
    rightStrip.style.right = rightCell.isInert ? "25px" : "16px";
}

function updateMeter(isGalvanic, isPractice) {
    const voltageDisplay = document.getElementById('voltage-display');
    const wire = document.getElementById('wire');

    if (isGalvanic) {
        voltageDisplay.innerText = isPractice ? "? V" : currentProblem.e0Cell + " V";
        wire.setAttribute('stroke', '#333');
    } else {
        voltageDisplay.innerText = "Battery";
        wire.setAttribute('stroke', '#e74c3c'); // Red wire for Electrolytic
    }
}

function updateCellNotation() {
    const box = document.getElementById('simulation-box-notation');
    const p = currentProblem;
    
    // Helper to clean name for electrode (e.g. "Copper(II)" -> "Copper")
    const getMetalName = (name) => name.split('(')[0].trim();
    
    let anodePart = "";
    if (p.anode.isInert) {
        anodePart = `Pt(s) | ${p.anode.ion}(aq, ${p.concAnode}M)`;
    } else {
        anodePart = `${p.anode.metal} | ${p.anode.ion}(aq, ${p.concAnode}M)`;
    }
    
    let cathodePart = "";
    if (p.cathode.isInert) {
        cathodePart = `${p.cathode.ion}(aq, ${p.concCathode}M) | Pt(s)`;
    } else {
        cathodePart = `${p.cathode.ion}(aq, ${p.concCathode}M) | ${p.cathode.metal}`;
    }
    
    box.innerHTML = `
        <p style="margin: 5px 0; font-weight: bold;">Standard Cell Notation:</p>
        <p style="font-family: monospace; font-size: 1.2em; margin: 5px 0;">${anodePart} || ${cathodePart}</p>
    `;
}

function updateUI() {
    const isGalvanic = !document.getElementById('mode-toggle').checked;
    const isPractice = document.getElementById('practice-toggle').checked;

    updateModeLabels(isGalvanic);
    updateViewLabels(isPractice);
    updateParametersDisplay(isPractice);
    updateSolutionColors();
    updateElectrodes();
    updateMeter(isGalvanic, isPractice);
    
    // Handle Simulation Notation Box
    const notationBox = document.getElementById('simulation-box-notation');
    if (isPractice) {
        notationBox.style.display = 'none';
    } else {
        notationBox.style.display = 'block';
        updateCellNotation();
    }

    const practiceBoxBasic = document.getElementById('practice-box-basic');
    const practiceBoxEq = document.getElementById('practice-box-eq');
    const practiceBoxNernst = document.getElementById('practice-box-nernst');

    if (isPractice) {
        practiceBoxBasic.style.display = 'block';
        if (currentProblem.basicQuestionAnswered) {
            practiceBoxEq.style.display = 'block';
            practiceBoxNernst.style.display = 'block';
        } else {
            practiceBoxEq.style.display = 'none';
            practiceBoxNernst.style.display = 'none';
        }
    } else {
        practiceBoxBasic.style.display = 'none';
        practiceBoxEq.style.display = 'none';
        practiceBoxNernst.style.display = 'none';
    }
}

function setupPracticeMode() {
    const practiceBoxBasic = document.getElementById('practice-box-basic');
    const practiceBoxEq = document.getElementById('practice-box-eq');
    const practiceBoxNernst = document.getElementById('practice-box-nernst');
    
    // Prepare dynamic values
    const q1Text = `Which half-cell is the ${currentProblem.questionTarget}?`;
    const options = [currentProblem.anode.name, currentProblem.cathode.name];
    if (Math.random() < 0.5) options.reverse();

    let optionsHtml = '<option value="">-- Select Metal --</option>';
    options.forEach(name => {
        optionsHtml += `<option value="${name}">${name}</option>`;
    });

    // Inject the full HTML
    practiceBoxBasic.innerHTML = `
        <p style="margin: 5px 0; font-weight: bold;">${q1Text}</p>
        <select id="basic-q1-select" style="padding: 5px; margin-bottom: 10px; width: 200px;">${optionsHtml}</select>
        <p style="margin: 5px 0; font-weight: bold;">What is the standard cell potential (E&deg;<sub>cell</sub>)?</p>
        <div>
            <input type="number" id="basic-q2-input" placeholder="?" style="width: 80px; text-align: center;"> V
        </div>
        <br>
        <button onclick="checkBasicAnswer()" style="background: #ffc107; color: #000; border-color: #e0a800;">Check Answer</button>
        <p id="basic-feedback" style="margin-top: 10px; font-weight: bold; min-height: 20px;"></p>
        `;

    practiceBoxEq.innerHTML = ` 
    <p style="margin: 5px 0; font-weight: bold;">Calculate the Gibbs Free Energy (ΔG<sup>o</sup>) for this cell (kJ/mol).</p>
        <div>
            <input type="text" id="g-input" placeholder="e.g. -1.2e5" style="width: 120px; text-align: center;">
        </div>
        <br>
            <p style="margin: 5px 0; font-weight: bold;">Calculate the Equilibrium Constant (K) for this cell.</p>
        <div>
            <input type="text" id="k-input" placeholder="e.g. 1.2e10" style="width: 120px; text-align: center;">
        </div>
        <br>
        <button onclick="checkEqAnswer()" style="background: #41ff07; color: #000; border-color: #07e000;">Check Answer</button>
        <p id="eq-feedback" style="margin-top: 10px; font-weight: bold; min-height: 20px;"></p>
    `;

    practiceBoxNernst.innerHTML = `
        <p style="margin: 5px 0; font-weight: bold;">Calculate the non-standard cell potential (E<sub>cell</sub>) using the Nernst Equation.</p>
        <div>
            <input type="number" id="nernst-input" placeholder="?" style="width: 80px; text-align: center;"> V
        </div>
        <br>
        <button onclick="checkNernstAnswer()" style="background: #ffc107; color: #000; border-color: #e0a800;">Check Answer</button>
        <p id="nernst-feedback" style="margin-top: 10px; font-weight: bold; min-height: 20px;"></p>
    `;

}

function checkBasicAnswer() {
    const feedback = document.getElementById('basic-feedback');
    const userMetal = document.getElementById('basic-q1-select').value;
    const userE0 = parseFloat(document.getElementById('basic-q2-input').value);
    
    const correctMetal = currentProblem[currentProblem.questionTarget].name;
    const correctE0 = parseFloat(currentProblem.e0Cell);

    if (!userMetal || isNaN(userE0)) {
        feedback.innerText = "Please answer both questions.";
        feedback.style.color = "orange";
        return;
    }

    // Check answers (allowing small margin of error for float math)
    if (userMetal === correctMetal && Math.abs(userE0 - correctE0) < 0.02) {
        feedback.innerText = "Correct! Great job.";
        feedback.style.color = "green";
        document.getElementById('voltage-display').innerText = currentProblem.e0Cell + " V"; // Reveal voltage
        currentProblem.basicQuestionAnswered = true;
        updateUI(); // Refresh UI to show next boxes
    } else {
        feedback.innerText = "Incorrect. Check your reduction potentials and try again.";
        feedback.style.color = "red";
    }
}

function checkEqAnswer() {
    const feedback = document.getElementById('eq-feedback');
    const userG = parseFloat(document.getElementById('g-input').value);
    const userK = parseFloat(document.getElementById('k-input').value);
    
    const correctG = parseFloat(currentProblem.valG0);
    const correctK = parseFloat(currentProblem.valK);

    let feedbackText = "";
    let isCorrect = true;

    // Check Delta G (allow 5% error)
    if (isNaN(userG)) {
        feedbackText += "Please enter ΔG°. ";
        isCorrect = false;
    } else if (Math.abs((userG - correctG) / correctG) > 0.05) {
        feedbackText += "ΔG° is incorrect. ";
        isCorrect = false;
    } else {
        feedbackText += "ΔG° is correct! ";
    }

    // Check K (allow 5% error)
    if (isNaN(userK)) {
        feedbackText += "Please enter K.";
        isCorrect = false;
    } else if (Math.abs((userK - correctK) / correctK) > 0.05) {
        feedbackText += "K is incorrect.";
        isCorrect = false;
    } else {
        feedbackText += "K is correct!";
    }

    feedback.innerText = feedbackText;
    
    if (feedbackText.includes("incorrect") || feedbackText.includes("Please")) {
         feedback.style.color = "red";
    } else {
         feedback.style.color = "green";
    }
}

function checkNernstAnswer() {
    const feedback = document.getElementById('nernst-feedback');
    const userE = parseFloat(document.getElementById('nernst-input').value);
    const correctE = parseFloat(currentProblem.valNernst);

    if (isNaN(userE)) {
        feedback.innerText = "Please enter a value.";
        feedback.style.color = "orange";
        return;
    }

    if (!isNaN(userE) && Math.abs(userE - correctE) < 0.02) {
        feedback.innerText = `Correct! Ecell = ${currentProblem.valNernst} V`;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Incorrect. Check your Q calculation and n value.";
        feedback.style.color = "red";
    }
}

// Initial Run
generateNewProblem();