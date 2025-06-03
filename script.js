let oneGenerateInputNumberButtons = 0;
let saved = 0;
let verify = 0;
let chooseButtons = 0;

function generateButtons() {
    let number = document.getElementById('numberButtons').value
        if (oneGenerateInputNumberButtons == 0) {
            for (let i = 1; i <= number; ++i) {
                ++saved;
                document.getElementById("generatedButtons").innerHTML += `
                <br>
                <div class="container text-center">
                    <div class="card">
                        <div class="card-body">
                            <button class="btn btn-success" id="${saved}"
                            onclick="pushEveryGeneratedButton('${saved}')">Push</button>
                        </div>
                    </div>
                </div> `;     
            }
            ++oneGenerateInputNumberButtons;
        }
        const chooseButton = Math.floor(Math.random()*(saved)) + 1; 
        chooseButtons = chooseButton;  
}

function pushEveryGeneratedButton(elementId) {
    if (chooseButtons == elementId && verify == 0) {
        document.getElementById(elementId).textContent ="Winner"; 
        ++verify;
    }
    if (chooseButtons != elementId) {
    document.getElementById(elementId).textContent ="Loser"; 
    }
}
   
