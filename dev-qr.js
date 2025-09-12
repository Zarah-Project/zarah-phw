#!/usr/bin/env node
const { spawn } = require("child_process");
const os = require("os");
const qrcode = require("qrcode-terminal");

// Get local network IP (ignores internal / 127.0.0.1)
function getLocalIP() {
	const nets = os.networkInterfaces();
	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			if (net.family === "IPv4" && !net.internal) {
				return net.address;
			}
		}
	}
	return "localhost";
}

const ip = getLocalIP();
const port = 3000;
const url = `http://${ip}:${port}`;

console.log(`\n🚀 Starting Next.js dev server at: ${url}\n`);
qrcode.generate(url, { small: true });

const dev = spawn("next", ["dev", "-H", "0.0.0.0", "-p", port], {
	stdio: "inherit",
});
