function run() {
    let iframeWindow = document.getElementById("iframeWindow");
    let url = "https://hammerhead-games.vercel.app";

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};

run()