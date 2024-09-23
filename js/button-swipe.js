const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add(
        "bg-[#B4F461]",
        "border-none"
    )
    donationBtn.classList.remove(
        "bg-[#B4F461]",
    )
})

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add(
        "bg-[#B4F461]"
    )
    historyBtn.classList.remove(
        "bg-[#B4F461]",
        "border-none"
    )
})