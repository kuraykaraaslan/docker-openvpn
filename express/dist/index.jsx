"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express server
const express_1 = __importDefault(require("express"));
// Routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const iptablesRoutes_1 = __importDefault(require("./routes/iptablesRoutes"));
const openVPNRoutes_1 = __importDefault(require("./routes/openVPNRoutes"));
// Load environment variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use('/', indexRoutes_1.default);
app.use('/iptables', iptablesRoutes_1.default);
app.use('/openvpn', openVPNRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
