// Dependencies
import env from "@/utils/env";
import { Discord, generateState, generateCodeVerifier } from "arctic";

// Generators
export const State = generateState;
export const CodeVerifier = generateCodeVerifier;

// Discord OAuth
export const DiscordAuth = new Discord(
    env.discord.DISCORD_CLIENT_ID,
    env.discord.DISCORD_CLIENT_SECRET,
    `${env.app.BASE_URL}/callback/discord`
);
