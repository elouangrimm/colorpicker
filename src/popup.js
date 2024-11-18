const colorPicker = document.getElementById("colorPicker");
const copyButton = document.getElementById("copyButton");

chrome.storage.local.get("color", (data) => {
    if (data.color) {
        colorPicker.value = data.color;
    }
});

colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    console.log("Color Set:", selectedColor);
    chrome.storage.local.set({ color: selectedColor });
});

copyButton.addEventListener("click", () => {
    const color = colorPicker.value;
    navigator.clipboard.writeText(color).then(() => {
        console.log("Color copied to clipboard:", color);
    }).catch((err) => {
        console.error("Failed to copy color:", err);
    });
});
