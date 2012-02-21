var win = Ti.UI.createWindow();

var webView = Ti.UI.createWebView({
	url:'/index.html'
});
win.add(webView);

win.open();
