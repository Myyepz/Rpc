const RPC = require("discord-rpc");
const rpc = new rpc.Clinet({
	transport: "ipc"
});

rpc.on("ready", () => {
	rpc.setActivity({
	    state: "Corporation",
        details: "ForteBots",
        startTimestamp: 1507665886,
        endTimestamp: 1507665886,
        largeImageKey: "7a54351efc3bc44734bdbc58c7425c7f",
        largeImageTextAa: "Love Yepz",
        smallImageKey: "7a54351efc3bc44734bdbc58c7425c7f",
        smallImageText: "Max Level"
    });
    
    console.log("Aktif Bosku");
});

rpc.login({
	clientId: "794319115782193162"
});