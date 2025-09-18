function run() {
    let iframeWindow = document.getElementById("iframeWindow"); // if no periods are detected in the input, search google instead
    let url = "https://hammerhead-games.vercel.app";

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};

run()