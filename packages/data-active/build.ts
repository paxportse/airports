import * as fs from "fs"
import { airports } from "../data/airports"
import { activeAirports } from "./activeAirports"

if (!fs.existsSync("./generated")) {
	fs.mkdirSync("./generated")
}

fs.writeFileSync(
	"./generated/airports.ts",
	`import { Airport, IataCode } from "@paxport/airports-type"\n` +
		`export const airports:Record<IataCode,Airport>=${JSON.stringify(
			Object.fromEntries(activeAirports.map(iataCode => [iataCode, airports[iataCode]]))
		).replace(/"([^"]+)":/g, "$1:")}`
)
