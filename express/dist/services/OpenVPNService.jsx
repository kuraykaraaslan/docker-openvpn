"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
class OpenVPNService {
    async statusOpenVPNServer() {
        try {
            const command = `service openvpn-server@server status`; // Command to get the status of the OpenVPN server
            const result = child_process_1.default.execSync(command, { encoding: 'utf-8' }); // Execute the command synchronously
            const statusOutput = result.toString(); // Convert the result to string
            console.log(statusOutput);
            /*
            Sample output:
           ● openvpn-server@server.service - OpenVPN service for server
                Loaded: loaded (/lib/systemd/system/openvpn-server@.service; enabled; vendor preset: enabled)
                Drop-In: /etc/systemd/system/openvpn-server@server.service.d
                        └─disable-limitnproc.conf
                Active: active (running) since Fri 2024-06-21 20:00:53 +03; 54min ago
                Docs: man:openvpn(8)
                        https://community.openvpn.net/openvpn/wiki/Openvpn24ManPage
                        https://community.openvpn.net/openvpn/wiki/HOWTO
            Main PID: 584405 (openvpn)
                Status: "Initialization Sequence Completed"
                Tasks: 1 (limit: 19031)
                Memory: 1.8M
            */
            /*
            Required output:
            {
                "loaded": "loaded", // loaded | not-found
                "active": "active", // active | inactive
                "since": Timestamp,
            }
            */
            // Parse the output
            const lines = statusOutput.split('\n');
            console.log(lines);
            const loaded = lines[1].includes('loaded') ? 'loaded' : 'not-found';
            const active = lines[4].includes('active') ? 'active' : 'inactive';
            const since = lines[4].split(';')[0].split('since ')[1];
            return {
                loaded,
                active,
                since
            };
        }
        catch (error) {
            console.error(error);
            return {
                loaded: 'not-found',
                active: 'inactive',
                since: null
            };
        }
    }
    async startOpenVPNServer() {
        const command = `service openvpn-server@server start`; // Command to start the OpenVPN server
        child_process_1.default.execSync(command); // Execute the command synchronously
    }
    async stopOpenVPNServer() {
        const command = `service openvpn-server@server stop`; // Command to stop the OpenVPN server
        child_process_1.default.execSync(command); // Execute the command synchronously
    }
}
exports.default = OpenVPNService;
