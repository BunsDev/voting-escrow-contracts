import { waffle } from "hardhat"

export async function forward(seconds: number) {
    const lastTimestamp = (await waffle.provider.getBlock("latest")).timestamp
    await waffle.provider.send("evm_setNextBlockTimestamp", [lastTimestamp + seconds])
    await waffle.provider.send("evm_mine", [])
}

export async function setNextBlockTimestamp(timestamp: number) {
    await waffle.provider.send("evm_setNextBlockTimestamp", [timestamp])
    await waffle.provider.send("evm_mine", [])
}
