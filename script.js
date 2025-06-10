let GenerateButtonsSingleTime = 0;
let saved = 0;
let verify = 0;
let WinnerButton = 0;

function generateButtons() {
    let number = document.getElementById('numberButtons').value
        if (GenerateButtonsSingleTime == 0) {
            for (let i = 1; i <= number; ++i) {
                ++saved;
                document.getElementById("generatedButtons").innerHTML += `
                    <br>
                    <div class="container text-center">
                        <div class="card">
                            <div class="card-body">
                                <button class="btn btn-success" id="${saved}"
                                    onclick="pushButton('${saved}')">Push</button>
                            </div>
                        </div>
                    </div> `;     
            }
            ++GenerateButtonsSingleTime;
        }
        WinnerButton = Math.floor(Math.random() * (saved)) + 1; 
         
}

function pushButton(elementId) {
    if (WinnerButton == elementId && verify == 0) {
        document.getElementById(elementId).textContent = "Winner"; 
        ++verify;
    }
    if (WinnerButton != elementId) {
        document.getElementById(elementId).textContent = "Loser"; 
    }
}
   
