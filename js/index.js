

// Shared functions
function getTextNumber(id) {
    return Number(document.getElementById(id).innerText);
}

function getNumber(id) {
    return Number(document.getElementById(id).value);
}

// this is common function
function multiDonate(inputBalanceId, donatedBalanceId, modalId, title) {

    const mainBalance = getTextNumber('mainBalance');
    const inputBalance = getNumber(inputBalanceId);
    const donatedBalance = getTextNumber(donatedBalanceId);

    // Validation
    if (isNaN(inputBalance) || inputBalance <= 0) {
        alert('Invalid input');
        return;
    }
    if (inputBalance > mainBalance) {
        alert('Not enough balance for Donation.');
        return;
    }
    // total donate balance
    const donateAmount = (donatedBalance + inputBalance);
    document.getElementById(donatedBalanceId).innerText = donateAmount;
    // new balnce
    const remainBalance = mainBalance - inputBalance;
    document.getElementById('mainBalance').innerText = remainBalance;

    // show modal
    document.getElementById(modalId).showModal();

    // create history
    
    const donateTitle = document.getElementById(title).innerText;
    
    const historySection = document.getElementById('history-section');
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="rounded-xl p-6 border-2 border-gray-400">
    <div class="space-y-4">
    <h2 class="font-bold text-lg">${inputBalance} Taka is ${donateTitle}</h2>
                    <p class="text-subtitle text-sm">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard
                        Time)</p>
                </div>
            </div>
            
            `
    historySection.appendChild(div);
    document.getElementById(inputBalance).value = "";
}

// donate card 1
document.getElementById('donateBtn1').addEventListener('click', function () {
    multiDonate('inputBalance1', 'donatedBalance1', 'my_modal_1', 'donateTitle1');
});

// donate card 2
document.getElementById('donateBtn2').addEventListener('click', function () {
    multiDonate('inputBalance2', 'donatedBalance2', 'my_modal_2', 'donateTitle2');
});
// donate card 3
document.getElementById('donateBtn3').addEventListener('click', function () {
    multiDonate('inputBalance3', 'donatedBalance3', 'my_modal_3', 'donateTitle3');
});





// Toggle section
const donationTab = document.getElementById('donateToggleBtn');
const historyTab = document.getElementById('historyToggleBtn');

historyTab.addEventListener('click', function () {
    historyTab.classList.remove('bg-white');
    historyTab.classList.add(
        "bg-[#B4F461]",
        "text-black"
    );
    donationTab.classList.remove("bg-primary");
    donationTab.classList.add(
        "border-gray-400",
        "border-2",
        "bg-transparent",
        "text-gray-500"
    );
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

donationTab.addEventListener('click', function () {
    donationTab.classList.add(
        "bg-[#B4F461]",
        "text-black"
    );
    historyTab.classList.remove(
        "bg-[#B4F461]",
        "text-black"
    );
    donationTab.classList.remove(
        "border-gray-400",
        "border-2",
        "bg-transparent",
        "text-gray-500"
    );
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});