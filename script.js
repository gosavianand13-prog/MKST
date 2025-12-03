// वर्ष footer मध्ये auto
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// अध्यक्षांचा WhatsApp नंबर (भारतासाठी 91 + 10 digit)
const WHATSAPP_NUMBER = "917038165238";
// उदा. नंबर 7038165230 असेल तर:  "917038165230"
// टीप: स्पेस किंवा + चिन्ह नको, फक्त अंक

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");
    if (!form) return; // index.html वर form नसल्यामुळे error टाळण्यासाठी

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("enqName").value.trim();
        const mobile = document.getElementById("enqMobile").value.trim();
        const message = document.getElementById("enqMessage").value.trim();

        if (!name || !mobile || !message) {
            alert("कृपया सर्व माहिती भरा.");
            return;
        }

        const text =
            `नमस्कार,\n` +
            `माझे नाव: ${name}\n` +
            `मोबाईल: ${mobile}\n\n` +
            `इन्क्वायरी:\n${message}\n\n` +
            `— वेबसाइटवरून पाठवलेले.`;

        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        window.open(url, "_blank");
    });
});
